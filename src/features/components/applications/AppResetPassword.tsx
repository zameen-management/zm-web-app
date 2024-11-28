import { Link } from "react-router-dom";
import { Column } from "../../styles/Column.styled";
import Button from "../../ui/button/Button";
import Form from "../../ui/form/Form";
import Input from "../../ui/input/Input";

const AppResetPassword = () => {
	const handleSubmit = () => {};

	return (
		<Form onSubmit={handleSubmit}>
			<Column $gap="0.5rem">
				<h4>Set New Password</h4>
				<p>Set a new password for your account.</p>
			</Column>
			<Column>
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
			<Column $gap="0.5rem">
				<Button fullWidth>Reset Password</Button>
				<Link to="/apply/sign-in">Back to sign-in</Link>
			</Column>
		</Form>
	);
};

export default AppResetPassword;
