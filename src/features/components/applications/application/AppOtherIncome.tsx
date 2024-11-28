import { MdAddCircleOutline, MdDelete, MdEdit } from "react-icons/md";
import { Column } from "../../../styles/Column.styled";
import Button from "../../../ui/button/Button";
import Form from "../../../ui/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { getApplication, setApplication } from "../../../app/application.slice";
import { ChangeEvent, useEffect, useState } from "react";
import { EmptyOtherIncome, OtherIncome } from "../../../types/Application.type";
import Card from "../../../ui/card/Card";
import { Row } from "../../../styles/Row.styled";
import Popup from "../../../ui/popup/Popup";
import Input from "../../../ui/input/Input";

const AppOtherIncome = () => {
	const app = useSelector(getApplication);
	const dispatch = useDispatch();
	const [incomeIndex, setIncomeIndex] = useState<number | null>(null);

	const addIncome = (income: OtherIncome) => {
		if (incomeIndex === null) return;
		const otherIncome = [...app.otherIncome];
		otherIncome[incomeIndex] = income;
		dispatch(
			setApplication({
				...app,
				otherIncome,
			})
		);
		setIncomeIndex(null);
	};

	const deleteIncome = (index: number) => {
		const otherIncome = [...app.otherIncome];
		otherIncome.splice(index, 1);
		dispatch(
			setApplication({
				...app,
				otherIncome,
			})
		);
	};

	const handleSubmit = () => {
		console.log(app);
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Column $gap="0.25rem">
					<h3>Other Income</h3>
					<p>
						Please include other sources of income such as social
						security, scholarships, parental assistance, etc.
					</p>
				</Column>
				<Column>
					{app.otherIncome.map((income, index) => (
						<IncomeCard
							key={index}
							income={income}
							onEdit={() => setIncomeIndex(index)}
							onDelete={() => deleteIncome(index)}
						/>
					))}
					<Button
						onClick={() => setIncomeIndex(app.otherIncome.length)}
						variant="fill"
						type="button"
					>
						<MdAddCircleOutline /> Add Other Income Source
					</Button>
				</Column>
				<Button fullWidth>Next</Button>
			</Form>
			{incomeIndex !== null && (
				<IncomeForm
					onSubmit={addIncome}
					onClose={() => setIncomeIndex(null)}
					initialIncome={
						app.otherIncome[incomeIndex] || EmptyOtherIncome
					}
				/>
			)}
		</>
	);
};

const IncomeCard = ({
	income,
	onEdit,
	onDelete,
}: {
	income: OtherIncome;
	onEdit: () => void;
	onDelete: () => void;
}) => {
	return (
		<Card>
			<Column>
				<h5>{income.source}</h5>
				<p>Monthly Income: {income.income}</p>
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

const IncomeForm = ({
	onSubmit,
	onClose,
	initialIncome,
}: {
	onSubmit: (income: OtherIncome) => void;
	onClose: () => void;
	initialIncome?: OtherIncome;
}) => {
	const [income, setIncome] = useState(EmptyOtherIncome);

	useEffect(() => {
		if (initialIncome) {
			setIncome(initialIncome);
		}
	}, []);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setIncome({ ...income, [e.target.id]: e.target.value });
	};

	return (
		<Popup onClose={onClose}>
			<Form onSubmit={() => onSubmit(income)}>
				<h4>Add Other Income</h4>
				<Input
					id="source"
					label="Source"
					value={income.source}
					onChange={handleChange}
					required
				/>
				<Input
					id="income"
					label="Monthly Income "
					value={income.income}
					onChange={handleChange}
					required
				/>
				<Button fullWidth>Add</Button>
			</Form>
		</Popup>
	);
};

export default AppOtherIncome;
