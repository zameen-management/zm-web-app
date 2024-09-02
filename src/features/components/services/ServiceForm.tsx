import { FormEvent, forwardRef, useState } from "react";
import { render } from "@react-email/components";
import ConsultationEmail from "../../../../emails/ConsultationEmail";
import { ConsulationForm, StyledHomeForm } from "./Services.styled";
import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";
import Dropdown from "../../ui/dropdown/Dropdown";
import Textbox from "../../ui/textbox/Textbox";
import { User } from "../../types/User.types";
import UserApi from "../../api/User.api";
import EmailApi from "../../api/Email.api";

const ServiceForm = forwardRef((_props, ref) => {
	const [isLoading, setIsLoading] = useState(false);
	const [canSend, setCanSend] = useState(true);
	const [consultation, setConsultation] = useState({
		name: "",
		email: "",
		phoneNumber: "",
		availability: "",
		propertyCount: "",
		comments: "",
	});

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (!canSend) return;
		if (!consultation.propertyCount) {
			return alert("Please provide property count information.");
		}

		try {
			setIsLoading(true);
			const users = await UserApi.getAll({ role: "Manager" });
			const recipients = users.map((user: User) => user?.email);
			const body = render(
				<ConsultationEmail consultation={consultation} />
			);

			await EmailApi.send({
				subject: `${
					consultation?.name || "Someone"
				} has requested a consultation`,
				body,
				recipients,
			});
			setCanSend(false);

			alert("Thank you for reaching out! We'll be in touch soon.");
		} catch (err) {
			console.log(err);
			alert("Unable to submit form at this time.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<StyledHomeForm ref={ref}>
			<div className="center-text">
				<h2>Schedule Your Free Consultation</h2>
				<p>
					Tell us a bit about yourself and your preferred schedule,
					and we'll set up a consultation to discuss how we can help.
				</p>
			</div>
			<ConsulationForm onSubmit={handleSubmit}>
				<div className="column gap-1">
					<Input
						id="fullName"
						label="Full Name"
						value={consultation.name}
						onChange={(e) =>
							setConsultation({
								...consultation,
								name: e.target.value,
							})
						}
						placeholder="Full Name"
						required
					/>
					<Input
						id="email"
						label="Email Address"
						value={consultation.email}
						onChange={(e) =>
							setConsultation({
								...consultation,
								email: e.target.value,
							})
						}
						type="email"
						placeholder="Email"
						required
					/>
					<Input
						id="phoneNumber"
						label="Phone Number"
						value={consultation.phoneNumber}
						onChange={(e) =>
							setConsultation({
								...consultation,
								phoneNumber: e.target.value,
							})
						}
						placeholder="123-456-7890"
						required
					/>
					<Input
						id="availability"
						label="What times are you available?"
						value={consultation.availability}
						onChange={(e) =>
							setConsultation({
								...consultation,
								availability: e.target.value,
							})
						}
						placeholder="ex. Mon-Fri 8am-4pm CST"
						required
					/>
					<Dropdown
						id="propertyCount"
						label="How many properties are in your portfolio?"
						options={[
							{
								label: "None, I'm looking to get started!",
								value: "None, I'm looking to get started!",
							},
							{
								label: "1-10 properties",
								value: "1-10 properties",
							},
							{
								label: "11-50 properties",
								value: "11-50 properties",
							},
							{
								label: "Over 50 properties",
								value: "Over 50 properties",
							},
						]}
						value={consultation.propertyCount}
						onChange={(option) =>
							setConsultation({
								...consultation,
								propertyCount: option.value,
							})
						}
						required
					/>
					<Textbox
						id="additionalComments"
						label="Additional Comments"
						value={consultation?.comments || ""}
						onChange={(e) =>
							setConsultation({
								...consultation,
								comments: e.target.value,
							})
						}
						placeholder="Add additional comments/questions here"
					/>
				</div>
				{canSend ? (
					<Button type="submit">
						{isLoading ? "Submitting..." : "Request Consultation"}
					</Button>
				) : (
					<Button disabled>Your request has been submitted!</Button>
				)}
			</ConsulationForm>
		</StyledHomeForm>
	);
});

export default ServiceForm;
