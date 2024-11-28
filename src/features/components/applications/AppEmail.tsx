import { Column } from "../../styles/Column.styled";
import { Row } from "../../styles/Row.styled";
import Button from "../../ui/button/Button";
import Form from "../../ui/form/Form";
import Input from "../../ui/input/Input";

const AppEmail = () => {
	const handleSubmit = () => {};

	return (
		<Form onSubmit={handleSubmit}>
			<Column $gap="0.5rem">
				<h4>Application for 123 Example Street</h4>
				<p>To get started, please enter your email.</p>
			</Column>
			<Input id="email" label="Email" type="email" required />
			<Row>
				<Button fullWidth>Next</Button>
			</Row>
		</Form>
	);
};

export default AppEmail;
