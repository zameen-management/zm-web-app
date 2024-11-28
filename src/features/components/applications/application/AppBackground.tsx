import { useDispatch, useSelector } from "react-redux";
import { getApplication, setApplication } from "../../../app/application.slice";
import Input from "../../../ui/input/Input";
import { ChangeEvent } from "react";
import Form from "../../../ui/form/Form";
import Button from "../../../ui/button/Button";

const AppBackground = () => {
	const app = useSelector(getApplication);
	const dispatch = useDispatch();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(
			setApplication({
				...app,
				[e.target.id]: e.target.value,
			})
		);
	};

	const handleSubmit = () => {
		console.log(app);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<h3>Background</h3>
			<Input
				id="everEvicted"
				label="Have you (or any person you have named on this application) ever been evicted from a tenancy or left owing money? If yes, explain."
				value={app.everEvicted}
				onChange={handleChange}
				required
			/>
			<Input
				id="criminalOffenses"
				label={`Have you or any member of your household ever been convicted of (or pled guilty or no contest to) any criminal offense(s) other than a minor infraction(s) that were disposed of by means other than acquittal or a finding of "not guilty"? If yes, explain.`}
				value={app.criminalOffenses}
				onChange={handleChange}
				required
			/>
			<Input
				id="bankruptcy"
				label="Have you (or any person you have named on this application) ever filed for or been involved in a bankruptcy, been foreclosed on, or been a defendant in a civil suit? If yes, explain."
				value={app.bankruptcy}
				onChange={handleChange}
				required
			/>
			<Button fullWidth>Next</Button>
		</Form>
	);
};

export default AppBackground;
