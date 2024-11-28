import { Link } from "react-router-dom";
import { Column } from "../../styles/Column.styled";
import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";
import Form from "../../ui/form/Form";

const AppForgotPassword = () => {
	const handleSubmit = () => {};

	return (
		<Form onSubmit={handleSubmit}>
			<Column $gap="0.5rem">
				<h4>Forgot password?</h4>
				<p>Enter your email to reset your password.</p>
			</Column>
			<Column>
				<Input id="email" label="Email" type="email" required />
			</Column>
			<Column $gap="0.5rem">
				<Button fullWidth>Send Reset Link</Button>
				<Link to="/apply/sign-in">Back to sign-in</Link>
			</Column>
		</Form>
	);
};

export default AppForgotPassword;
