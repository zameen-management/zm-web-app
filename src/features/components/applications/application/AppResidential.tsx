import { useDispatch, useSelector } from "react-redux";
import { Column } from "../../../styles/Column.styled";
import Form from "../../../ui/form/Form";
import { getApplication, setApplication } from "../../../app/application.slice";
import Button from "../../../ui/button/Button";
import { MdAddCircleOutline, MdDelete, MdEdit } from "react-icons/md";
import Input from "../../../ui/input/Input";
import {
	EmptyResidentAddress,
	ResidentAddress,
	ResidentAddressType,
} from "../../../types/Application.type";
import { Row } from "../../../styles/Row.styled";
import ButtonGroup from "../../../ui/buttonGroup/ButtonGroup";
import { ChangeEvent, useEffect, useState } from "react";
import TextArea from "../../../ui/textArea/TextArea";
import Popup from "../../../ui/popup/Popup";
import Card from "../../../ui/card/Card";

const AppResidential = () => {
	const app = useSelector(getApplication);
	const dispatch = useDispatch();
	const [showCurrentPopup, setShowCurrentPopup] = useState(false);
	const [pastAddressIndex, setPastAddressIndex] = useState<number | null>(
		null
	);

	const addCurrentAddress = (address: ResidentAddress) => {
		dispatch(
			setApplication({
				...app,
				currentAddress: address,
			})
		);
		setShowCurrentPopup(false);
	};

	const deleteCurrentAddress = () => {
		dispatch(
			setApplication({
				...app,
				currentAddress: null,
			})
		);
	};

	const addPastAddress = (address: ResidentAddress) => {
		if (pastAddressIndex === null) return;
		const previousAddresses = [...app.previousAddresses];
		previousAddresses[pastAddressIndex] = address;
		dispatch(
			setApplication({
				...app,
				previousAddresses,
			})
		);
		setPastAddressIndex(null);
	};

	const deletePastAddress = (index: number) => {
		const previousAddresses = [...app.previousAddresses];
		previousAddresses.splice(index, 1);
		dispatch(
			setApplication({
				...app,
				previousAddresses,
			})
		);
	};

	const handleSubmit = () => {
		if (app.currentAddress === null) {
			return alert("Please add current address.");
		}
		console.log(app);
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Column $gap="0.25rem">
					<h3>Residential History</h3>
					<p>
						Strengthen your application by providing at least{" "}
						<span className="text-semibold">3 years</span> of rental
						history.
					</p>
				</Column>
				<Column>
					<h4>Current Address</h4>
					{app.currentAddress ? (
						<ResidentialCard
							address={app.currentAddress}
							onEdit={() => setShowCurrentPopup(true)}
							onDelete={deleteCurrentAddress}
						/>
					) : (
						<Button
							onClick={() => setShowCurrentPopup(true)}
							variant="fill"
							type="button"
						>
							<MdAddCircleOutline />
							Add Current Address
						</Button>
					)}
				</Column>
				<Column>
					<h4>Past Addresses</h4>
					{app.previousAddresses.map((address, index) => (
						<ResidentialCard
							key={index}
							address={address}
							onEdit={() => setPastAddressIndex(index)}
							onDelete={() => deletePastAddress(index)}
						/>
					))}
					<Button
						onClick={() =>
							setPastAddressIndex(app.previousAddresses.length)
						}
						variant="fill"
						type="button"
					>
						<MdAddCircleOutline />
						Add Past Address
					</Button>
				</Column>
				<Button fullWidth>Next</Button>
			</Form>
			{showCurrentPopup && (
				<ResidentialForm
					title="Add Current Address"
					onSubmit={addCurrentAddress}
					onClose={() => setShowCurrentPopup(false)}
					initialAddress={app.currentAddress || EmptyResidentAddress}
				/>
			)}
			{pastAddressIndex !== null && (
				<ResidentialForm
					title="Add Past Address"
					onSubmit={addPastAddress}
					onClose={() => setPastAddressIndex(null)}
					initialAddress={
						app.previousAddresses[pastAddressIndex] ||
						EmptyResidentAddress
					}
				/>
			)}
		</>
	);
};

const ResidentialCard = ({
	address,
	onEdit,
	onDelete,
}: {
	address: ResidentAddress;
	onEdit: () => void;
	onDelete: () => void;
}) => {
	return (
		<Card>
			<Column>
				<h4>{`${address.address}, ${address.city}, ${address.state} ${address.zip}`}</h4>
				<p>
					<span className="text-semibold">Type:</span> {address.type}
				</p>
				<p>
					<span className="text-semibold">Moved In:</span>{" "}
					{`${address.month} ${address.year}`}
				</p>
				{address.landlordName && (
					<Column $gap="0">
						<p className="text-semibold">Landlord Info:</p>
						<p>{address.landlordName}</p>
						<p>{address.landlordPhoneNumber}</p>
						<p>{address.landlordEmail}</p>
					</Column>
				)}
				<Row $justifyContent="space-between">
					<Button onClick={onEdit} type="button">
						<MdEdit /> Edit
					</Button>
					<Button onClick={onDelete} type="button" variant="fill">
						<MdDelete /> Delete
					</Button>
				</Row>
			</Column>
		</Card>
	);
};

const ResidentialForm = ({
	title,
	onSubmit,
	onClose,
	initialAddress,
}: {
	title: string;
	onSubmit: (address: ResidentAddress) => void;
	onClose: () => void;
	initialAddress?: ResidentAddress;
}) => {
	const [address, setAddress] = useState(EmptyResidentAddress);

	useEffect(() => {
		if (initialAddress) {
			setAddress(initialAddress);
		}
	}, []);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setAddress({ ...address, [e.target.id]: e.target.value });
	};

	return (
		<Popup onClose={onClose}>
			<Form onSubmit={() => onSubmit(address)}>
				<h4>{title}</h4>
				<ButtonGroup
					label="Residence Type"
					buttons={["Rent", "Own", "Other"]}
					value={address.type}
					onChange={(value) =>
						setAddress({
							...address,
							type: value as ResidentAddressType,
						})
					}
				/>
				<Row>
					<Input
						id="month"
						label="Month Moved In"
						value={address.month}
						onChange={handleChange}
						required
					/>
					<Input
						id="year"
						label="Year Moved In"
						value={address.year}
						onChange={handleChange}
						required
					/>
				</Row>
				<Input
					id="address"
					label="Street Address"
					value={address.address}
					onChange={handleChange}
					required
				/>
				<Row>
					<Input
						id="city"
						label="City"
						value={address.city}
						onChange={handleChange}
						required
					/>
					<Input
						id="state"
						label="State"
						value={address.state}
						onChange={handleChange}
						required
					/>
				</Row>
				<Input
					id="zip"
					label="Zip Code"
					value={address.zip}
					onChange={handleChange}
					required
				/>
				<Input
					id="rent"
					label="Monthly Rent"
					value={address.rent}
					onChange={handleChange}
				/>
				<TextArea
					id="reasonForMoving"
					label="Why are you moving?"
					value={address.reasonForMoving}
					onChange={handleChange}
				/>
				{address.type !== "Rent" && (
					<>
						<h5>Landlord Contact Info</h5>
						<Input
							id="landlordName"
							label="Full Name"
							value={address.landlordName}
							onChange={handleChange}
							required
						/>
						<Input
							id="landlordEmail"
							label="Email"
							value={address.landlordEmail}
							onChange={handleChange}
							required
						/>
						<Input
							id="landlordPhoneNumber"
							label="Phone Number"
							placeholder="xxx-xxx-xxxx"
							value={address.landlordPhoneNumber}
							onChange={handleChange}
							required
						/>
					</>
				)}
				<Button fullWidth>Add</Button>
			</Form>
		</Popup>
	);
};

export default AppResidential;
