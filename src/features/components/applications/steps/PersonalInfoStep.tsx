import { useDispatch, useSelector } from "react-redux";
import { getApplication, setApplication } from "../../../app/applicationSlice";
import Input from "../../../ui/input/Input";
import FileUploadModal from "../../../ui/fileUploadModal/FileUploadModal";

const PersonalInfoStep = () => {
	const dispatch = useDispatch();
	const application = useSelector(getApplication);

	const onChange = (newValues: any) => {
		dispatch(setApplication({ ...application, ...newValues }));
	};

	return (
		<>
			<div className="column gap-05">
				<h3>Personal Information</h3>
				<p>
					Personal information will not be shared with third-parties;
					it is solely for our internal use.
				</p>
			</div>
			<div className="form-grid">
				<Input
					id="firstName"
					autoFocus
					label="First Name"
					placeholder="First name"
					value={application.firstName}
					onChange={(e) => onChange({ firstName: e.target.value })}
					maxLength={50}
					required
				/>
				<Input
					id="lastName"
					label="Last Name"
					placeholder="Last name"
					value={application.lastName}
					onChange={(e) => onChange({ lastName: e.target.value })}
					maxLength={50}
					required
				/>
			</div>
			<div className="form-grid">
				<Input
					id="phoneNumber"
					label="Phone Number"
					placeholder="xxx-xxx-xxxx"
					value={application.phoneNumber}
					onChange={(e) => onChange({ phoneNumber: e.target.value })}
					maxLength={25}
					required
				/>
				<Input
					id="email"
					label="Email"
					placeholder="This email will be used for all future notifications"
					value={application.email}
					onChange={(e) => onChange({ email: e.target.value })}
					type="email"
					required
				/>
			</div>
			<div className="form-grid">
				<Input
					id="ssn"
					label="Social Security Number"
					placeholder="xxx-xx-xxxx"
					value={application.ssn}
					onChange={(e) => onChange({ ssn: e.target.value })}
					maxLength={25}
					required
				/>
				<Input
					id="dob"
					label="Date of Birth"
					value={application.dob}
					onChange={(e) => onChange({ dob: e.target.value })}
					type="date"
					required
				/>
			</div>

			<div className="column gap-05">
				<p>
					Please provide a picture of a state-issued drivers license.
					If you are unable to upload an image for some reason, please
					email the image to contact@zameeen-management.com
				</p>
				<FileUploadModal
					value={application.dl === "" ? [] : [application.dl]}
					onChange={(files) =>
						onChange({ dl: files.length === 0 ? "" : files[0] })
					}
					allowedFileTypes={["image/*"]}
				/>
			</div>
		</>
	);
};

export default PersonalInfoStep;
