import { useDispatch, useSelector } from "react-redux";
import Form from "../../../ui/form/Form";
import { getApplication, setApplication } from "../../../app/application.slice";
import { Column } from "../../../styles/Column.styled";
import Input from "../../../ui/input/Input";
import Button from "../../../ui/button/Button";
import Radio from "../../../ui/radio/Radio";
import Card from "../../../ui/card/Card";
import { Row } from "../../../styles/Row.styled";
import { Coapplicant } from "../../../types/Application.type";
import { MdAddCircleOutline, MdDelete, MdEdit } from "react-icons/md";
import ButtonGroup from "../../../ui/buttonGroup/ButtonGroup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AppInfo = () => {
	const app = useSelector(getApplication);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleAddCoapp = () => {
		const coapp: Coapplicant = {
			name: "",
			email: "",
			applyingAs: "Tenant",
			submitted: false,
		};

		dispatch(
			setApplication({
				...app,
				coapplicants: [...app.coapplicants, coapp],
			})
		);
	};

	const handleCosignerToggle = (option: string) => {
		if (option === "Yes") {
			dispatch(
				setApplication({
					...app,
					coapplicants: [
						{
							name: "",
							email: "",
							applyingAs: "Tenant",
							submitted: false,
						},
					],
				})
			);
		} else {
			dispatch(setApplication({ ...app, coapplicants: [] }));
		}
	};

	const handleSubmit = () => {
		// TODO: Remove coapps if "no" selected
		console.log(app);
		navigate("/apply/application/residential-history");
	};

	return (
		<Form onSubmit={handleSubmit}>
			<h4>Application Info</h4>
			<Input
				id="moveInDate"
				label="Desired Move-In Date"
				type="date"
				value={app.desiredMoveInDate}
				onChange={(e) =>
					dispatch(
						setApplication({
							...app,
							desiredMoveInDate: e.target.value,
						})
					)
				}
				required
			/>
			<Column $gap="0.25rem">
				<h5>
					Are there others applying with you (including co-signers)?
				</h5>
				<p className="text-sm">
					All persons over 18 (including co-signers) need to complete
					their own applications.
				</p>
				<Radio
					value={app.coapplicants.length > 0 ? "Yes" : "No"}
					options={["Yes", "No"]}
					onChange={handleCosignerToggle}
				/>
			</Column>
			{app.coapplicants.length > 0 && (
				<>
					<Column>
						{app.coapplicants.map((coapplicant, index) => (
							<ApplicantCard
								key={index}
								coapplicant={coapplicant}
								index={index}
							/>
						))}
					</Column>
					<Button
						onClick={handleAddCoapp}
						type="button"
						variant="fill"
					>
						<MdAddCircleOutline />
						Add Another
					</Button>
				</>
			)}
			<Column $gap="0.5rem">
				<h5>
					How many people will be living in the property in total?
				</h5>
				<Input
					id="totalPeople"
					label="Be sure to include yourself, other tenants, and any dependents."
					type="number"
					min={1}
					value={app.totalPeople}
					onChange={(e) =>
						dispatch(
							setApplication({
								...app,
								totalPeople: parseInt(e.target.value),
							})
						)
					}
					required
				/>
			</Column>
			<Button fullWidth>Next</Button>
		</Form>
	);
};

const ApplicantCard = ({
	coapplicant,
	index,
}: {
	coapplicant: Coapplicant;
	index: number;
}) => {
	const app = useSelector(getApplication);
	const dispatch = useDispatch();
	const [canEdit, setCanEdit] = useState(true);

	const handleEdit = (name: string, value: any) => {
		const updatedCoapps = [...app.coapplicants];

		updatedCoapps[index] = {
			...updatedCoapps[index],
			[name]: value,
		};

		dispatch(setApplication({ ...app, coapplicants: updatedCoapps }));
	};

	const handleSave = () => {
		if (!coapplicant.name) {
			return alert("Name is required.");
		}
		if (!coapplicant.email) {
			return alert("Email is required.");
		}
		if (!coapplicant.email.includes("@")) {
			return alert("Please enter valid email.");
		}

		setCanEdit(false);
	};

	const handleDelete = () => {
		const filteredCoapplicants = [...app.coapplicants];
		filteredCoapplicants.splice(index, 1);

		if (filteredCoapplicants.length === 0) {
			dispatch(
				setApplication({
					...app,
					coapplicants: [],
				})
			);
		} else {
			dispatch(
				setApplication({ ...app, coapplicants: filteredCoapplicants })
			);
		}
	};

	return (
		<Card>
			{canEdit ? (
				<Column>
					<h4>Add a Co-Applicant/Co-Signer {index}</h4>
					<ButtonGroup
						label="Applying As"
						buttons={["Tenant", "Co-Signer"]}
						value={app.coapplicants[index].applyingAs}
						onChange={(value) => handleEdit("applyingAs", value)}
					/>
					<Input
						id="name"
						label="Name"
						value={app.coapplicants[index].name}
						onChange={(e) => handleEdit("name", e.target.value)}
						required
					/>
					<Input
						id="email"
						label="Email"
						value={app.coapplicants[index].email}
						onChange={(e) => handleEdit("email", e.target.value)}
						required
					/>
					<Button onClick={handleSave} type="button" fullWidth>
						Save
					</Button>
				</Column>
			) : (
				<>
					<Row $justifyContent="space-between">
						<h4>{coapplicant.name}</h4>
						<p
							style={{
								color: coapplicant.submitted ? "green" : "red",
							}}
							className="text-sm"
						>
							{coapplicant.submitted
								? "Application Submitted"
								: "Application Not Submitted"}
						</p>
					</Row>
					<p>{coapplicant.email}</p>
					<p>{coapplicant.applyingAs}</p>
					<Row $justifyContent="space-between">
						<Button onClick={() => setCanEdit(true)} type="button">
							<MdEdit />
							Edit
						</Button>
						<Button onClick={handleDelete} type="button">
							<MdDelete />
							Delete
						</Button>
					</Row>
				</>
			)}
		</Card>
	);
};

export default AppInfo;
