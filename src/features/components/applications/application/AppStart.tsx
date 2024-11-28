import Form from "../../../ui/form/Form";
import { Column } from "../../../styles/Column.styled";
import ButtonGroup from "../../../ui/buttonGroup/ButtonGroup";
import { Row } from "../../../styles/Row.styled";
import Input from "../../../ui/input/Input";
import Button from "../../../ui/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getApplication, setApplication } from "../../../app/application.slice";
import { AppApplyingAs } from "../../../types/Application.type";
import { useNavigate } from "react-router-dom";

const AppStart = () => {
	const app = useSelector(getApplication);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = () => {
		console.log(app);
		navigate("/apply/application/info");
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Column $gap="0.5rem">
				<h4>Application for 123 Example Street, Joplin MO 64801</h4>
				<p>Rent: $1,500</p>
			</Column>
			<Column>
				<h4>Start My Application</h4>
				<ButtonGroup
					label="What are you applying as?"
					buttons={["Tenant", "Co-Signer"]}
					value={app.applyingAs}
					onChange={(value) =>
						dispatch(
							setApplication({
								...app,
								applyingAs: value as AppApplyingAs,
							})
						)
					}
				/>
				<Row>
					<Input
						id="firstName"
						label="First Name"
						value={app.firstName}
						onChange={(e) =>
							dispatch(
								setApplication({
									...app,
									firstName: e.target.value,
								})
							)
						}
						required
					/>
					<Input
						id="lastName"
						label="Last Name"
						value={app.lastName}
						onChange={(e) =>
							dispatch(
								setApplication({
									...app,
									lastName: e.target.value,
								})
							)
						}
						required
					/>
				</Row>
				<Input
					id="email"
					label="Email"
					value={app.email}
					disabled
					readOnly
					required
				/>
				<Row>
					<Input
						id="phoneNumber"
						label="Cell Phone Number"
						value={app.phoneNumber}
						placeholder="123-456-7890"
						onChange={(e) =>
							dispatch(
								setApplication({
									...app,
									phoneNumber: e.target.value,
								})
							)
						}
						required
					/>
					<Input
						id="dob"
						label="Date of Birth"
						type="date"
						value={app.dob}
						onChange={(e) =>
							dispatch(
								setApplication({
									...app,
									dob: e.target.value,
								})
							)
						}
						required
					/>
				</Row>
			</Column>
			<Button fullWidth>Next</Button>
		</Form>
	);
};

export default AppStart;
