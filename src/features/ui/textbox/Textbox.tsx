import { StyledTextbox } from "./Textbox.styled";
import { FC, TextareaHTMLAttributes } from "react";

interface TextboxProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	id: string;
	label: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	required?: boolean;
}

const Textbox: FC<TextboxProps> = ({
	id,
	label,
	required,
	value,
	onChange,
	...rest
}) => {
	return (
		<StyledTextbox>
			{label && (
				<label htmlFor={id}>
					{label}
					{required && <span>*</span>}
				</label>
			)}
			<textarea
				id={id}
				required={required}
				value={value}
				onChange={onChange}
				{...rest}
			/>
		</StyledTextbox>
	);
};

export default Textbox;
