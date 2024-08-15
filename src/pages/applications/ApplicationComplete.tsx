import {
	MdAttachMoney,
	MdOutlineCreditCard,
	MdVisibility,
} from "react-icons/md";
import useQuery from "../../features/hooks/useQuery";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { IApplication } from "../../features/types/Application";
import getApplicationByToken from "../../features/api/applications/getApplicationByToken";
import { setApplicationToken } from "../../features/app/applicationSlice";
import Modal from "../../features/ui/modal/Modal";
import { StatusMessage } from "../../features/components/applications/Applications.styled";
import Button from "../../features/ui/button/Button";
import Accordion from "../../features/ui/accordion/Accordion";
import Container from "../../features/ui/container/Container";

const paymentOptions = [
	{
		icon: <MdAttachMoney />,
		title: "Paypal",
		content: (
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Delectus, illo.
			</p>
		),
	},
	{
		icon: <MdAttachMoney />,
		title: "Venmo",
		content: (
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Delectus, illo.
			</p>
		),
	},
	{
		icon: <MdAttachMoney />,
		title: "Zelle",
		content: (
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Delectus, illo.
			</p>
		),
	},
	{
		icon: <MdAttachMoney />,
		title: "Apple Pay",
		content: (
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Delectus, illo.
			</p>
		),
	},
	{
		icon: <MdAttachMoney />,
		title: "Cash / Check",
		content: (
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Delectus, illo.
			</p>
		),
	},
];

const ApplicationComplete = () => {
	const query = useQuery();
	const token = query.get("token");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const [application, setApplication] = useState<IApplication>();

	const validateApplication = async () => {
		try {
			if (!token) {
				throw new Error("Invalid token.");
			}

			const { data } = await getApplicationByToken(token);

			if (data.status === "Rejected") {
				navigate("/properties");
			}

			setApplication(data);
		} catch (err: any) {
			console.log(err.message);
			alert("Invalid token.");
			navigate("/properties");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		validateApplication();
	}, []);

	const viewApplication = () => {
		if (application) {
			dispatch(setApplicationToken(application.token));
			navigate(`/applications/apply?property=${application.property}`);
		}
	};

	if (isLoading || !application) {
		return (
			<Container>
				<Modal>
					<h2>Loading...</h2>
				</Modal>
			</Container>
		);
	}

	return (
		<Container>
			<Modal gap={1}>
				<Modal gap={1}>
					<h2>
						Thank you for your application, {application.firstName}!
					</h2>
					<div className="row gap-1">
						<p className="tag-sm-secondary">
							Application Status:{" "}
							<StatusMessage $success={application.isComplete}>
								{application.isComplete
									? "Complete"
									: "Incomplete"}
							</StatusMessage>
						</p>
						<p className="tag-sm-secondary">
							Payment Status:{" "}
							<StatusMessage $success={application.isPaid}>
								{application.isPaid ? "Paid" : "Not Paid"}
							</StatusMessage>
						</p>
					</div>
					<p>
						We've sent you a confirmation email to{" "}
						<b>{application.email}</b> where you can view your
						application status. If you did not recieve an email from
						us (check your spam/junk folders) and would like a copy
						of your application, please reach out to our leasing
						director at{" "}
						<span className="text-primary">
							faiqakamran@icloud.com
						</span>
						.
					</p>
					<Button
						onClick={viewApplication}
						style={{ width: "min-content" }}
					>
						<MdVisibility />
						View Application
					</Button>
				</Modal>
				{!application.isPaid && (
					<Modal gap={2}>
						<div className="column gap-1">
							<h3 className="text-primary">Application Fee</h3>
							<p>
								In order to get your application reviewed, you
								must first pay a $40 application fee. Online
								credit card payment is our default method and
								provides you with an instant confirmation of
								your payment status. You can apply using the
								button below:
							</p>
							<Button style={{ width: "min-content" }}>
								<MdOutlineCreditCard />
								Pay Via Credit Card
							</Button>
						</div>
						<div className="column gap-1">
							<h3 className="text-primary">
								Additional Methods of Payment
							</h3>
							<p>
								We also accept payment via Paypal, Venmo, Zelle,
								Apple Pay, cash, or check:
							</p>
							<Accordion rows={paymentOptions} />
						</div>
					</Modal>
				)}
				<Modal gap={1}>
					<h3 className="text-primary">Next Steps</h3>
					<p>
						If revisions are needed, you may receive an email
						regarding the additional information requested.
						Otherwise, you should hear back via text/email if we
						decide to move forward with the onboarding process!
					</p>
				</Modal>
			</Modal>
		</Container>
	);
};

export default ApplicationComplete;
