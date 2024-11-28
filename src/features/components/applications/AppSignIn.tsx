import { Link } from "react-router-dom";
import { Column } from "../../styles/Column.styled";
import Button from "../../ui/button/Button";
import Form from "../../ui/form/Form";
import Input from "../../ui/input/Input";

const AppSignIn = () => {
	const handleSubmit = () => {};

	return (
		<Form onSubmit={handleSubmit}>
			<Column $gap="0.5rem">
				<h4>Welcome Back!</h4>
				<p>Enter your email and password to sign in.</p>
			</Column>
			<Column>
				<Input id="email" label="Email" type="email" required />
				<Input
					id="password"
					label="Password"
					type="password"
					required
				/>
			</Column>
			<Column $gap="0.5rem">
				<Button fullWidth>Sign In</Button>
				<Link to="/apply/forgot-password">Forgot password?</Link>
			</Column>
		</Form>
	);
};

export default AppSignIn;
