import { useDispatch, useSelector } from "react-redux";
import { getApplication, setApplication } from "../../../app/application.slice";
import { ChangeEvent, useEffect, useState } from "react";
import {
	EmptyPet,
	EmptyVehicle,
	Pet,
	Vehicle,
} from "../../../types/Application.type";
import Card from "../../../ui/card/Card";
import { Column } from "../../../styles/Column.styled";
import { Row } from "../../../styles/Row.styled";
import Button from "../../../ui/button/Button";
import { MdAddCircleOutline, MdDelete, MdEdit } from "react-icons/md";
import Popup from "../../../ui/popup/Popup";
import Form from "../../../ui/form/Form";
import Input from "../../../ui/input/Input";
import ButtonGroup from "../../../ui/buttonGroup/ButtonGroup";
import TextArea from "../../../ui/textArea/TextArea";

const AppGeneral = () => {
	const app = useSelector(getApplication);
	const dispatch = useDispatch();
	const [petIndex, setPetIndex] = useState<number | null>(null);
	const [vehicleIndex, setVehicleIndex] = useState<number | null>(null);

	const addPet = (pet: Pet) => {
		if (petIndex === null) return;
		const pets = [...app.pets];
		pets[petIndex] = pet;
		dispatch(
			setApplication({
				...app,
				pets,
			})
		);
		setPetIndex(null);
	};

	const deletePet = (index: number) => {
		const pets = [...app.pets];
		pets.splice(index, 1);
		dispatch(
			setApplication({
				...app,
				pets,
			})
		);
	};

	const addVehicle = (vehicle: Vehicle) => {
		if (vehicleIndex === null) return;
		const vehicles = [...app.vehicles];
		vehicles[vehicleIndex] = vehicle;
		dispatch(
			setApplication({
				...app,
				vehicles,
			})
		);
		setVehicleIndex(null);
	};

	const deleteVehicle = (index: number) => {
		const vehicles = [...app.vehicles];
		vehicles.splice(index, 1);
		dispatch(
			setApplication({
				...app,
				vehicles,
			})
		);
	};

	const handleSubmit = () => {
		console.log(app);
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<h3>General Information</h3>
				<Column>
					<h5>Add any pets that you will have at this property.</h5>
					{app.pets.map((pet, index) => (
						<PetCard
							key={index}
							pet={pet}
							onEdit={() => setPetIndex(index)}
							onDelete={() => deletePet(index)}
						/>
					))}
					<Button
						onClick={() => setPetIndex(app.pets.length)}
						variant="fill"
						type="button"
					>
						<MdAddCircleOutline /> Add Pet
					</Button>
				</Column>
				<Column>
					<h5>Add any vehicles you will have on this property.</h5>
					{app.vehicles.map((vehicle, index) => (
						<VehicleCard
							key={index}
							vehicle={vehicle}
							onEdit={() => setVehicleIndex(index)}
							onDelete={() => deleteVehicle(index)}
						/>
					))}
					<Button
						onClick={() => setVehicleIndex(app.vehicles.length)}
						variant="fill"
						type="button"
					>
						<MdAddCircleOutline /> Add Vehicle
					</Button>
				</Column>
				<ButtonGroup
					label="Do you smoke?"
					buttons={["Yes", "No"]}
					value={app.smokes ? "Yes" : "No"}
					onChange={(value) =>
						dispatch(
							setApplication({ ...app, smokes: value === "Yes" })
						)
					}
				/>
				<TextArea
					id="specialRequests"
					label="Do you have any special requests or requirements we should be aware of?"
					value={app.specialRequests}
					onChange={(e) =>
						setApplication({
							...app,
							specialRequests: e.target.value,
						})
					}
				/>
				<Button fullWidth>Next</Button>
			</Form>
			{petIndex !== null && (
				<PetForm
					onSubmit={addPet}
					onClose={() => setPetIndex(null)}
					initialPet={app.pets[petIndex] || EmptyPet}
				/>
			)}
			{vehicleIndex !== null && (
				<VehicleForm
					onSubmit={addVehicle}
					onClose={() => setVehicleIndex(null)}
					initialVehicle={app.vehicles[vehicleIndex] || EmptyVehicle}
				/>
			)}
		</>
	);
};

const PetCard = ({
	pet,
	onEdit,
	onDelete,
}: {
	pet: Pet;
	onEdit: () => void;
	onDelete: () => void;
}) => {
	return (
		<Card>
			<Column>
				<h4>{pet.type}</h4>
				<p>
					<span className="text-semibold">Breed:</span> {pet.breed}
				</p>
				<p>
					<span className="text-semibold">Age:</span> {pet.age}
				</p>
				<p>
					<span className="text-semibold">Weight:</span> {pet.weight}
				</p>
				{pet.isEsa && <p>ESA / Service Animal</p>}
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

const PetForm = ({
	onSubmit,
	onClose,
	initialPet,
}: {
	onSubmit: (pet: Pet) => void;
	onClose: () => void;
	initialPet: Pet;
}) => {
	const [pet, setPet] = useState(EmptyPet);

	useEffect(() => {
		if (initialPet) {
			setPet(initialPet);
		}
	}, []);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPet({ ...pet, [e.target.id]: e.target.value });
	};

	return (
		<Popup onClose={onClose}>
			<Form onSubmit={() => onSubmit(pet)}>
				<h4>Add Pet</h4>
				<Input
					id="type"
					label="Type (Dog, Cat, etc.)"
					value={pet.type}
					onChange={handleChange}
					required
				/>
				<Input
					id="breed"
					label="Breed"
					value={pet.breed}
					onChange={handleChange}
					required
				/>
				<Row>
					<Input
						id="age"
						label="Age (Years)"
						type="number"
						value={pet.age}
						onChange={handleChange}
						required
						min={1}
					/>
					<Input
						id="weight"
						label="Weight (lbs)"
						type="number"
						value={pet.weight}
						onChange={handleChange}
						required
						min={1}
					/>
				</Row>
				<ButtonGroup
					label="This is an Emotional Support Animal (ESA) or Service Animal"
					buttons={["No", "Yes"]}
					value={pet.isEsa ? "Yes" : "No"}
					onChange={(value) =>
						setPet({ ...pet, isEsa: value === "Yes" })
					}
				/>
				{pet.isEsa && (
					<p className="text-semibold">
						Please upload verification from a medical provider for
						this ESA/Service Animal in the 'Other Documents' section
						of the Documents step.
					</p>
				)}
				<Button fullWidth>Add</Button>
			</Form>
		</Popup>
	);
};

const VehicleCard = ({
	vehicle,
	onEdit,
	onDelete,
}: {
	vehicle: Vehicle;
	onEdit: () => void;
	onDelete: () => void;
}) => {
	return (
		<Card>
			<Column>
				<h4>{vehicle.make}</h4>
				<p>
					<span className="text-semibold">Model:</span>{" "}
					{vehicle.model}
				</p>
				<p>
					<span className="text-semibold">Color:</span>{" "}
					{vehicle.color}
				</p>
				<p>
					<span className="text-semibold">Year:</span> {vehicle.year}
				</p>
				<p>
					<span className="text-semibold">License Plate:</span>{" "}
					{vehicle.licensePlate}
				</p>
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

const VehicleForm = ({
	onSubmit,
	onClose,
	initialVehicle,
}: {
	onSubmit: (vehicle: Vehicle) => void;
	onClose: () => void;
	initialVehicle: Vehicle;
}) => {
	const [vehicle, setVehicle] = useState(EmptyVehicle);

	useEffect(() => {
		if (initialVehicle) {
			setVehicle(initialVehicle);
		}
	}, []);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setVehicle({ ...vehicle, [e.target.id]: e.target.value });
	};

	return (
		<Popup onClose={onClose}>
			<Form onSubmit={() => onSubmit(vehicle)}>
				<h4>Add Vehicle</h4>
				<Row>
					<Input
						id="make"
						label="Make"
						value={vehicle.make}
						onChange={handleChange}
						required
					/>
					<Input
						id="model"
						label="Model"
						value={vehicle.model}
						onChange={handleChange}
						required
					/>
				</Row>
				<Row>
					<Input
						id="color"
						label="Color"
						value={vehicle.color}
						onChange={handleChange}
						required
					/>
					<Input
						id="year"
						label="Year"
						value={vehicle.year}
						onChange={handleChange}
						required
					/>
				</Row>
				<Input
					id="licensePlate"
					label="License Plate"
					value={vehicle.licensePlate}
					onChange={handleChange}
					required
				/>
				<Button fullWidth>Add</Button>
			</Form>
		</Popup>
	);
};

export default AppGeneral;
