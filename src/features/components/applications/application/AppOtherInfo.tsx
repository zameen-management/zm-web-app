import { useDispatch, useSelector } from "react-redux";
import Form from "../../../ui/form/Form";
import { getApplication, setApplication } from "../../../app/application.slice";
import { Column } from "../../../styles/Column.styled";
import Input from "../../../ui/input/Input";
import { ChangeEvent } from "react";
import TextArea from "../../../ui/textArea/TextArea";
import Button from "../../../ui/button/Button";

const AppOtherInfo = () => {
	const app = useSelector(getApplication);
	const dispatch = useDispatch();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(
			setApplication({
				...app,
				emergencyContact: {
					...app.emergencyContact,
					[e.target.id]: e.target.value,
				},
			})
		);
	};

	const handleSubmit = () => {
		console.log(app);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Column $gap="0.25rem">
				<h3>Other Information</h3>
				<p>Almost there - a few more questions!</p>
			</Column>
			<Column $gap="0.5rem">
				<h4>Emergency Contact</h4>
				<Input
					id="name"
					label="Name"
					value={app.emergencyContact.name}
					onChange={handleChange}
					required
				/>
				<Input
					id="relationship"
					label="Relationship"
					value={app.emergencyContact.relationship}
					onChange={handleChange}
					required
				/>
				<Input
					id="phoneNumber"
					label="Phone Number"
					placeholder="xxx-xxx-xxxx"
					value={app.emergencyContact.phoneNumber}
					onChange={handleChange}
					required
				/>
			</Column>
			<Column $gap="0.5rem">
				<h4>Additional Comments</h4>
				<TextArea
					id="additionalComments"
					label="Please include any additional information you would like us to know."
					value={app.additionalComments}
					onChange={(e) =>
						dispatch(
							setApplication({
								...app,
								additionalComments: e.target.value,
							})
						)
					}
				/>
			</Column>
			<Button fullWidth>Next</Button>
		</Form>
	);
};

export default AppOtherInfo;
