import { useDispatch, useSelector } from "react-redux";
import { getApplication, setApplication } from "../../../app/applicationSlice";
import Input from "../../../ui/input/Input";

const ResidenceStep = () => {
	const dispatch = useDispatch();
	const application = useSelector(getApplication);

	const onChange = (newValues: any) => {
		dispatch(setApplication({ ...application, ...newValues }));
	};

	return (
		<>
			<div className="column gap-05">
				<h3>Rental History</h3>
			</div>
			<div className="column gap-1">
				<h4>Current Residence</h4>
				<Input
					id="location"
					autoFocus
					label="Location"
					placeholder="123 Example Ave, City ST 12345"
					maxLength={100}
					value={application.currentResidence.location}
					onChange={(e) =>
						onChange({
							currentResidence: {
								...application.currentResidence,
								location: e.target.value,
							},
						})
					}
					required
				/>
				<div className="form-grid">
					<Input
						id="name"
						label="Landlord Name"
						placeholder="Landlord name"
						maxLength={100}
						value={application.currentResidence.landlord.name}
						onChange={(e) =>
							onChange({
								currentResidence: {
									...application.currentResidence,
									landlord: {
										...application.currentResidence
											.landlord,
										name: e.target.value,
									},
								},
							})
						}
						required
					/>
					<Input
						id="phoneNumber"
						label="Landlord Phone Number"
						placeholder="xxx-xxx-xxxx"
						maxLength={100}
						value={
							application.currentResidence.landlord.phoneNumber
						}
						onChange={(e) =>
							onChange({
								currentResidence: {
									...application.currentResidence,
									landlord: {
										...application.currentResidence
											.landlord,
										phoneNumber: e.target.value,
									},
								},
							})
						}
						required
					/>
					<Input
						id="rent"
						label="Rent ($)"
						placeholder="Enter rent in dollars"
						type="number"
						min="1"
						max="9999"
						value={application.currentResidence.rent}
						onChange={(e) =>
							onChange({
								currentResidence: {
									...application.currentResidence,
									rent: e.target.value,
								},
							})
						}
						required
					/>
					<Input
						id="moveIn"
						label="Move-In Date"
						placeholder="MM-DD-YYYY"
						value={application.currentResidence.dates}
						onChange={(e) =>
							onChange({
								currentResidence: {
									...application.currentResidence,
									dates: e.target.value,
								},
							})
						}
						required
					/>
				</div>
			</div>
			<div className="column gap-1">
				<h4>Previous Residence</h4>
				<p>
					If you have been at your current residence for less than two
					years, please provide your previous residence history
					(otherwise just leave this section blank).
				</p>
				<Input
					id="prevLocation"
					label="Location"
					placeholder="123 Example Ave, City ST 12345"
					maxLength={100}
					value={application.otherResidence.location}
					onChange={(e) =>
						onChange({
							otherResidence: {
								...application.otherResidence,
								location: e.target.value,
							},
						})
					}
				/>
				<div className="form-grid">
					<Input
						id="prevName"
						label="Landlord Name"
						placeholder="Landlord name"
						maxLength={100}
						value={application.otherResidence.landlord.name}
						onChange={(e) =>
							onChange({
								otherResidence: {
									...application.otherResidence,
									landlord: {
										...application.otherResidence.landlord,
										name: e.target.value,
									},
								},
							})
						}
					/>
					<Input
						id="prevNumber"
						label="Landlord Phone Number"
						placeholder="xxx-xxx-xxxx"
						maxLength={100}
						value={application.otherResidence.landlord.phoneNumber}
						onChange={(e) =>
							onChange({
								otherResidence: {
									...application.otherResidence,
									landlord: {
										...application.otherResidence.landlord,
										phoneNumber: e.target.value,
									},
								},
							})
						}
					/>
					<Input
						id="prevRent"
						label="Rent ($)"
						placeholder="Enter rent in dollars"
						type="number"
						value={application.otherResidence.rent}
						onChange={(e) =>
							onChange({
								otherResidence: {
									...application.otherResidence,
									rent: e.target.value,
								},
							})
						}
					/>
					<Input
						id="prevDates"
						label="Dates"
						placeholder="MM-DD-YYYY - MM-DD-YYYY"
						value={application.otherResidence.dates}
						onChange={(e) =>
							onChange({
								otherResidence: {
									...application.otherResidence,
									dates: e.target.value,
								},
							})
						}
					/>
				</div>
			</div>
		</>
	);
};

export default ResidenceStep;
