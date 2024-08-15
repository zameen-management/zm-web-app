import { useDispatch, useSelector } from "react-redux";
import { getApplication, setApplication } from "../../../app/applicationSlice";
import Input from "../../../ui/input/Input";

const ReferenceSection = () => {
	const dispatch = useDispatch();
	const application = useSelector(getApplication);

	const onChange = (newValues: any) => {
		dispatch(setApplication({ ...application, ...newValues }));
	};

	return (
		<>
			<div className="column gap-05">
				<h3>References</h3>
			</div>
			<div className="column gap-05">
				<h4>Primary Reference</h4>
				<p>
					Please provide a reference we can reach out to with further
					questions (if needed).
				</p>
				<div className="form-grid">
					<Input
						id="name"
						autoFocus
						label="Reference Name"
						placeholder="Reference name"
						maxLength={50}
						value={application.primaryReference.name}
						onChange={(e) =>
							onChange({
								primaryReference: {
									...application.primaryReference,
									name: e.target.value,
								},
							})
						}
						required
					/>
					<Input
						id="relation"
						label="Relation to Applicant"
						placeholder="Friend, Sibling, Parent, etc."
						maxLength={50}
						value={application.primaryReference.relation}
						onChange={(e) =>
							onChange({
								primaryReference: {
									...application.primaryReference,
									relation: e.target.value,
								},
							})
						}
						required
					/>
					<Input
						id="phoneNumber"
						label="Reference Phone Number"
						placeholder="xxx-xxx-xxxx"
						maxLength={50}
						value={application.primaryReference.phoneNumber}
						onChange={(e) =>
							onChange({
								primaryReference: {
									...application.primaryReference,
									phoneNumber: e.target.value,
								},
							})
						}
						required
					/>
				</div>
			</div>
			<div className="column gap-05">
				<h4>Secondary Reference</h4>
				<p>Please provide another reference (if applicable)</p>
				<div className="form-grid">
					<Input
						id="otherName"
						label="Reference Name"
						placeholder="Reference name"
						maxLength={50}
						value={application.secondaryReference.name}
						onChange={(e) =>
							onChange({
								secondaryReference: {
									...application.secondaryReference,
									name: e.target.value,
								},
							})
						}
					/>
					<Input
						id="otherRelation"
						label="Relation to Applicant"
						placeholder="Friend, Sibling, Parent, etc."
						maxLength={50}
						value={application.secondaryReference.relation}
						onChange={(e) =>
							onChange({
								secondaryReference: {
									...application.secondaryReference,
									relation: e.target.value,
								},
							})
						}
					/>
					<Input
						id="otherPhone"
						label="Reference Phone Number"
						placeholder="xxx-xxx-xxxx"
						maxLength={50}
						value={application.secondaryReference.phoneNumber}
						onChange={(e) =>
							onChange({
								secondaryReference: {
									...application.secondaryReference,
									phoneNumber: e.target.value,
								},
							})
						}
					/>
				</div>
			</div>
		</>
	);
};

export default ReferenceSection;
