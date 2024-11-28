import { useDispatch, useSelector } from "react-redux";
import { getApplication, setApplication } from "../../../app/application.slice";
import { ChangeEvent, useEffect, useState } from "react";
import { Employer, EmptyEmployer } from "../../../types/Application.type";
import Form from "../../../ui/form/Form";
import { Column } from "../../../styles/Column.styled";
import Button from "../../../ui/button/Button";
import { MdAddCircleOutline, MdDelete, MdEdit } from "react-icons/md";
import Popup from "../../../ui/popup/Popup";
import Input from "../../../ui/input/Input";
import { Row } from "../../../styles/Row.styled";
import Card from "../../../ui/card/Card";

const AppEmployment = () => {
	const app = useSelector(getApplication);
	const dispatch = useDispatch();
	const [currentEmployerIndex, setCurrentEmployerIndex] = useState<
		number | null
	>(null);
	const [pastEmployerIndex, setPastEmployerIndex] = useState<number | null>(
		null
	);

	const addCurrentEmployer = (employer: Employer) => {
		if (currentEmployerIndex === null) return;
		const currentEmployers = [...app.currentEmployers];
		currentEmployers[currentEmployerIndex] = employer;
		dispatch(
			setApplication({
				...app,
				currentEmployers,
			})
		);
		setCurrentEmployerIndex(null);
	};

	const deleteCurrentEmployer = (index: number) => {
		const currentEmployers = [...app.currentEmployers];
		currentEmployers.splice(index, 1);
		dispatch(
			setApplication({
				...app,
				currentEmployers,
			})
		);
	};

	const addPastEmployer = (employer: Employer) => {
		if (pastEmployerIndex === null) return;
		const previousEmployers = [...app.previousEmployers];
		previousEmployers[pastEmployerIndex] = employer;
		dispatch(
			setApplication({
				...app,
				previousEmployers,
			})
		);
		setPastEmployerIndex(null);
	};

	const deletePastEmployer = (index: number) => {
		const previousEmployers = [...app.previousEmployers];
		previousEmployers.splice(index, 1);
		dispatch(
			setApplication({
				...app,
				previousEmployers,
			})
		);
	};

	const handleSubmit = () => {
		if (app.currentEmployers.length === 0) {
			return alert("Please add current employer.");
		}
		console.log(app);
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Column $gap="0.25rem">
					<h3>Employment</h3>
					<p>
						We like to see at least{" "}
						<span className="text-semibold">5 years</span> of
						employment history.
					</p>
				</Column>
				<Column>
					<h4>Current Employer(s)</h4>
					{app.currentEmployers.map((employer, index) => (
						<EmployerCard
							key={index}
							employer={employer}
							onEdit={() => setCurrentEmployerIndex(index)}
							onDelete={() => deleteCurrentEmployer(index)}
						/>
					))}
					<Button
						onClick={() =>
							setCurrentEmployerIndex(app.currentEmployers.length)
						}
						variant="fill"
						type="button"
					>
						<MdAddCircleOutline />
						Add Current Employer
					</Button>
				</Column>
				<Column>
					<h4>Past Employer(s)</h4>
					{app.previousEmployers.map((employer, index) => (
						<EmployerCard
							key={index}
							employer={employer}
							onEdit={() => setPastEmployerIndex(index)}
							onDelete={() => deletePastEmployer(index)}
						/>
					))}
					<Button
						onClick={() =>
							setPastEmployerIndex(app.previousEmployers.length)
						}
						variant="fill"
						type="button"
					>
						<MdAddCircleOutline />
						Add Past Employer
					</Button>
				</Column>
				<Button fullWidth>Next</Button>
			</Form>
			{currentEmployerIndex !== null && (
				<EmployerForm
					type="Current"
					onSubmit={addCurrentEmployer}
					onClose={() => setCurrentEmployerIndex(null)}
					initialEmployer={
						app.currentEmployers[currentEmployerIndex] ||
						EmptyEmployer
					}
				/>
			)}
			{pastEmployerIndex !== null && (
				<EmployerForm
					type="Previous"
					onSubmit={addPastEmployer}
					onClose={() => setPastEmployerIndex(null)}
					initialEmployer={
						app.previousEmployers[pastEmployerIndex] ||
						EmptyEmployer
					}
				/>
			)}
		</>
	);
};

const EmployerForm = ({
	type,
	onSubmit,
	onClose,
	initialEmployer,
}: {
	type: "Current" | "Previous";
	onSubmit: (employer: Employer) => void;
	onClose: () => void;
	initialEmployer?: Employer;
}) => {
	const [employer, setEmployer] = useState(EmptyEmployer);

	useEffect(() => {
		if (initialEmployer) {
			setEmployer(initialEmployer);
		}
	}, []);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmployer({ ...employer, [e.target.id]: e.target.value });
	};

	return (
		<Popup onClose={onClose}>
			<Form onSubmit={() => onSubmit(employer)}>
				<h4>{`Add ${type} Employer`}</h4>
				<Input
					id="name"
					label="Employer"
					value={employer.name}
					onChange={handleChange}
					required
				/>
				<Input
					id="occupation"
					label="Position / Title / Occupation"
					value={employer.occupation}
					onChange={handleChange}
					required
				/>
				<Row $justifyContent="space-between">
					<Input
						id="monthStart"
						label="Month Started"
						value={employer.monthStart}
						onChange={handleChange}
						required
					/>
					<Input
						id="yearStart"
						label="Year Started"
						value={employer.yearStart}
						onChange={handleChange}
						required
					/>
				</Row>
				{type === "Previous" && (
					<Row $justifyContent="space-between">
						<Input
							id="monthEnd"
							label="Month Ended"
							value={employer.monthEnd}
							onChange={handleChange}
							required
						/>
						<Input
							id="yearEnd"
							label="Year Ended"
							value={employer.yearEnd}
							onChange={handleChange}
							required
						/>
					</Row>
				)}
				<h5>Employment Reference</h5>
				<Input
					id="referenceName"
					label="Full Name"
					value={employer.referenceName}
					onChange={handleChange}
					required
				/>
				<Input
					id="referencePhoneNumber"
					label="Phone Number"
					placeholder="xxx-xxx-xxxx"
					value={employer.referencePhoneNumber}
					onChange={handleChange}
					required
				/>
				<Input
					id="referenceEmail"
					label="Email"
					value={employer.referenceEmail}
					onChange={handleChange}
					required
				/>
				<Button fullWidth>Add</Button>
			</Form>
		</Popup>
	);
};

const EmployerCard = ({
	employer,
	onEdit,
	onDelete,
}: {
	employer: Employer;
	onEdit: () => void;
	onDelete: () => void;
}) => {
	return (
		<Card>
			<Column>
				<h4>{employer.name}</h4>
				<p>Position: {employer.occupation}</p>
				<p>Started: {`${employer.monthStart} ${employer.yearStart}`}</p>
				{employer.monthEnd && (
					<p>Ended: {`${employer.monthEnd} ${employer.yearEnd}`}</p>
				)}
				<p>Monthly Income: {employer.monthlyIncome}</p>
				<Column $gap="0">
					<p className="text-semibold">Employment Reference:</p>
					<p>{employer.referenceName}</p>
					<p>{employer.referencePhoneNumber}</p>
					<p>{employer.referenceEmail}</p>
				</Column>
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

export default AppEmployment;
