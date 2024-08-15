import { StyledInput } from "./Input.styled";
import { ChangeEvent, FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	label: string;
	value: string | number;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
}

const Input: FC<InputProps> = ({
	id,
	label,
	value,
	onChange,
	required,
	...props
}) => {
	return (
		<StyledInput>
			{label && (
				<label htmlFor={id}>
					{label}
					{required && <span>*</span>}
				</label>
			)}
			<input
				id={id}
				value={value || ""}
				onChange={onChange}
				required={required}
				{...props}
			/>
		</StyledInput>
	);
};

export default Input;
