import { Column } from "../../styles/Column.styled";
import Button from "../../ui/button/Button";
import Form from "../../ui/form/Form";
import Input from "../../ui/input/Input";

const AppSignUp = () => {
	const handleSubmit = () => {};

	return (
		<Form onSubmit={handleSubmit}>
			<Column $gap="0.5rem">
				<h4>Welcome!</h4>
				<p>Create an account using an email and password.</p>
			</Column>
			<Column>
				<Input id="email" label="Email" type="email" required />
				<Input
					id="password"
					label="Password"
					type="password"
					required
				/>
				<Input
					id="confirmPassword"
					label="Confirm Password"
					type="password"
					required
				/>
			</Column>
			<Button fullWidth>Sign Up</Button>
		</Form>
	);
};

export default AppSignUp;
