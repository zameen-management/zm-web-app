import { useDispatch, useSelector } from "react-redux";
import { getApplication, setApplication } from "../../../app/applicationSlice";
import Input from "../../../ui/input/Input";
import Textbox from "../../../ui/textbox/Textbox";

const GeneralSection = () => {
	const dispatch = useDispatch();
	const application = useSelector(getApplication);

	const onChange = (newValues: any) => {
		dispatch(setApplication({ ...application, ...newValues }));
	};

	return (
		<>
			<div className="column gap-05">
				<h3>General Questions</h3>
			</div>
			<div className="column gap-05">
				<p>Do you smoke?</p>
				<Input
					id="doesSmoke"
					autoFocus
					label="Do You Smoke?"
					placeholder="Yes / No"
					maxLength={25}
					value={application.generalQuestions.doesSmoke}
					onChange={(e) =>
						onChange({
							generalQuestions: {
								...application.generalQuestions,
								doesSmoke: e.target.value,
							},
						})
					}
					required
				/>
			</div>
			<div className="column gap-05">
				<p>
					Have you ever been convicted of a felony? If yes, please
					explain.
				</p>
				<Textbox
					id="felony"
					label="Ever Convicted of Felony?"
					value={application.generalQuestions.convictedFelon}
					onChange={(e) =>
						onChange({
							generalQuestions: {
								...application.generalQuestions,
								convictedFelon: e.target.value,
							},
						})
					}
					required
				/>
			</div>
			<div className="column gap-05">
				<p>
					Have you ever filed for bankruptcy? If yes, please explain.
				</p>
				<Textbox
					id="bankruptcy"
					label="Ever Filed Bankruptcy?"
					value={application.generalQuestions.bankruptcy}
					onChange={(e) =>
						onChange({
							generalQuestions: {
								...application.generalQuestions,
								bankruptcy: e.target.value,
							},
						})
					}
					required
				/>
			</div>
			<div className="column gap-05">
				<p>Have you ever been evicted? If yes, please explain.</p>
				<Textbox
					id="evicted"
					label="Ever Been Evicted?"
					value={application.generalQuestions.evicted}
					onChange={(e) =>
						onChange({
							generalQuestions: {
								...application.generalQuestions,
								evicted: e.target.value,
							},
						})
					}
					required
				/>
			</div>
		</>
	);
};

export default GeneralSection;
