import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
	getApplication,
	setApplication,
	setApplicationToken,
} from "../../app/applicationSlice";
import useMultiPageForm from "../../hooks/useMultiPageForm";
import { APPLICATION_STEPS } from "./Application.constants";
import { getAddress } from "../../utils/getAddress";
import { render } from "@react-email/components";
import AppSubmissionEmail from "../../../../emails/AppSubmissionEmail";
import { BASE_URL, MANAGER_BASE_URL } from "../../../constants";
import RevisionsMadeEmail from "../../../../emails/RevisionsMadeEmail";
import ApplicationEmail from "../../../../emails/ApplicationEmail";
import Form from "../../ui/form/Form";
import Modal from "../../ui/modal/Modal";
import Button from "../../ui/button/Button";
import ApplicationPageNav from "./ApplicationPageNav";
import PageCount from "./PageCount";
import { Property } from "../../types/Property.types";
import { User } from "../../types/User.types";
import UserApi from "../../api/User.api";
import EmailApi from "../../api/Email.api";
import ApplicationApi from "../../api/Application.api";

type FormProps = {
	property: Property;
};

const ApplicationForm = ({ property }: FormProps) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const application = useSelector(getApplication);

	const {
		currentStep,
		totalSteps,
		currentComponent,
		next,
		previous,
		goTo,
		isFirstStep,
		isLastStep,
	} = useMultiPageForm(APPLICATION_STEPS);

	useEffect(() => {
		goTo(application.currentPage);
	}, []);

	const handlePrevious = async () => {
		try {
			setIsLoading(true);
			const data = await ApplicationApi.update(application?._id || "", {
				...application,
				currentPage: Math.max(currentStep - 1, 0),
			});
			dispatch(setApplication(data));
			previous();
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};

	const handleSubmit = async () => {
		try {
			setIsLoading(true);

			if (isFirstStep && !application.token) {
				const data = await ApplicationApi.add({
					...application,
					currentPage: currentStep,
					property: property?._id || "",
				});
				await ApplicationApi.addHistory(data?._id || "", {
					message: `Application started`,
				});
				dispatch(setApplicationToken(data.token));
			} else if (isLastStep) {
				if (!application.isComplete) {
					if (application.revisions) {
						if (
							!confirm("Have you made the requested revisions?")
						) {
							alert(
								"Application not submitted, please make the requested revisions."
							);
							return;
						}
					}
					const propertyAddress = getAddress(property.address);
					const applicantBody = render(
						<AppSubmissionEmail
							name={application.firstName}
							address={getAddress(property.address)}
							url={`${BASE_URL}/applications/complete?token=${application.token}`}
						/>
					);
					await EmailApi.send({
						subject: `Your application for ${propertyAddress}`,
						body: applicantBody,
						recipients: [application.email],
					});

					let managerBody: any;
					if (application.revisions) {
						await ApplicationApi.addHistory(
							application?._id || "",
							{
								message: `${application.firstName} has revised the application`,
							}
						);
						managerBody = render(
							<RevisionsMadeEmail
								address={propertyAddress}
								applicant={`${application.firstName} ${application.lastName}`}
								url={`${MANAGER_BASE_URL}/applications/${application._id}`}
							/>
						);
					} else {
						managerBody = render(
							<ApplicationEmail
								address={propertyAddress}
								applicant={`${application.firstName} ${application.lastName}`}
								url={`${MANAGER_BASE_URL}/applications/${application._id}`}
							/>
						);
					}

					const managers = await UserApi.getAll({
						role: "Manager",
					});
					await EmailApi.send({
						subject: `Application submitted for ${propertyAddress}`,
						body: managerBody,
						recipients: managers.map(
							(manager: User) => manager.email
						),
					});
					await ApplicationApi.addHistory(application?._id || "", {
						message: `${application.firstName} has submitted the application`,
					});
				}

				const data = await ApplicationApi.update(
					application?._id || "",
					{
						isComplete: true,
						revisions: "",
					}
				);
				dispatch(setApplication(data));
				navigate(`/applications/complete?token=${data.token}`);
			} else {
				const data = await ApplicationApi.update(
					application?._id || "",
					{
						...application,
						currentPage: Math.min(currentStep + 1, totalSteps - 1),
					}
				);
				dispatch(setApplication(data));
			}
			next();
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<h2>Rental Application for {getAddress(property.address)}</h2>
			{application.revisions && (
				<h4 className="box-error">
					<b>Revisions have been requested:</b>{" "}
					{application.revisions}
				</h4>
			)}
			<Modal gap={2}>
				{isLoading ? <p>Loading Form...</p> : currentComponent}
			</Modal>
			<div className="row justify-sb">
				{isFirstStep ? (
					<span></span>
				) : (
					<Button
						type="button"
						disabled={isLoading}
						onClick={handlePrevious}
					>
						Previous
					</Button>
				)}
				{isLastStep ? (
					<ApplicationPageNav
						currentPage={currentStep}
						pageCount={totalSteps}
						goTo={goTo}
					/>
				) : (
					<PageCount current={currentStep + 1} total={totalSteps} />
				)}
				<Button disabled={isLoading}>
					{isLastStep ? "Submit Application" : "Next Step"}
				</Button>
			</div>
		</Form>
	);
};

export default ApplicationForm;
