import { useDispatch, useSelector } from "react-redux";
import { getApplication, setApplication } from "../../../app/applicationSlice";
import Textbox from "../../../ui/textbox/Textbox";

const OthersSection = () => {
	const dispatch = useDispatch();
	const application = useSelector(getApplication);

	const onChange = (newValues: any) => {
		dispatch(setApplication({ ...application, ...newValues }));
	};

	return (
		<>
			<div className="column gap-05">
				<h3>Dependents / Co-Applicants</h3>
				<p>
					Dependents are any individuals under the age of 18 living
					with you. Everyone else planning on residing at the property
					is considered a co-applicant. As a reminder,{" "}
					<b>all co-applicants must fill out an application</b>.
				</p>
			</div>
			<div className="column gap-05">
				<p>
					Please list all dependents along with their ages. If not
					applicable, leave empty.
				</p>
				<Textbox
					id="dependents"
					autoFocus
					label="Please List All Dependents"
					value={application.dependents}
					onChange={(e) => onChange({ dependents: e.target.value })}
				/>
			</div>
			<div className="column gap-05">
				<p>
					Please list all co-applicants and their relationship to you.
					If not applicable, leave empty.
				</p>
				<Textbox
					id="coapplicants"
					label="Please List All Co-Applicants"
					value={application.coapplicants}
					onChange={(e) => onChange({ coapplicants: e.target.value })}
				/>
			</div>
		</>
	);
};

export default OthersSection;
