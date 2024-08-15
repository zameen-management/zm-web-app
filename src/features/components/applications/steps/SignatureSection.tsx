import { useDispatch, useSelector } from "react-redux";
import { getApplication, setApplication } from "../../../app/applicationSlice";
import Input from "../../../ui/input/Input";

const SignatureSection = () => {
	const dispatch = useDispatch();
	const application = useSelector(getApplication);

	const onChange = (newValues: any) => {
		dispatch(setApplication({ ...application, ...newValues }));
	};

	return (
		<>
			<div className="column gap-05">
				<h3>Applicant Signature</h3>
				<p>
					By signing below, the Applicant grants manager the right to
					obtain a verbal or written credit report, past rental,
					employment, and criminal history.
				</p>
				<div className="form-grid">
					<Input
						id="name"
						autoFocus
						label="Full Name"
						placeholder="Enter full name"
						maxLength={50}
						value={application.signature.name}
						onChange={(e) =>
							onChange({
								signature: {
									...application.signature,
									name: e.target.value,
								},
							})
						}
						required
					/>
					<Input
						id="date"
						label="Date"
						value={application.signature.date}
						onChange={() => {}}
						disabled
						readOnly
						required
					/>
				</div>
			</div>
		</>
	);
};

export default SignatureSection;
