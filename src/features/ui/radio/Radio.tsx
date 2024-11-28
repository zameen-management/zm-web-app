import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import { RadioButton, StyledRadio } from "./Radio.styled";

interface Props {
	value: string;
	options: string[];
	onChange: (option: string) => void;
}

const Radio = ({ value, options, onChange }: Props) => {
	const handleClick = (option: string) => {
		onChange(option);
	};

	return (
		<StyledRadio>
			{options.map((option, index) => (
				<RadioButton key={index} onClick={() => handleClick(option)}>
					{value === option ? (
						<MdRadioButtonChecked />
					) : (
						<MdRadioButtonUnchecked />
					)}
					<p>{option}</p>
				</RadioButton>
			))}
		</StyledRadio>
	);
};

export default Radio;
