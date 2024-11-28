import { Column } from "../../styles/Column.styled";
import Button from "../button/Button";
import { StyledButtonGroup } from "./ButtonGroup.styled";

interface Props {
	label?: string;
	buttons: string[];
	value: string;
	onChange: (value: string) => void;
}

const ButtonGroup = ({ label, buttons = [], value, onChange }: Props) => {
	return (
		<Column $gap="0.25rem">
			{label && <p className="text-label">{label}</p>}
			<StyledButtonGroup>
				{buttons.map((option, index) => (
					<Button
						className={option === value ? "active" : ""}
						type="button"
						key={index}
						onClick={() => onChange(option)}
					>
						{option}
					</Button>
				))}
			</StyledButtonGroup>
		</Column>
	);
};

export default ButtonGroup;
