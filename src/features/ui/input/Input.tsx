import { InputHTMLAttributes } from "react";
import { StyledInput } from "./Input.styled";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

const Input = ({ id, label, required, ...rest }: Props) => {
	return (
		<StyledInput>
			<label htmlFor={id}>
				{label}
				{required && <span className="required">*</span>}
			</label>
			<input id={id} type="text" required={required} {...rest} />
		</StyledInput>
	);
};

export default Input;
