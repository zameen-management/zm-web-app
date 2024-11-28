import { InputHTMLAttributes } from "react";
import { StyledTextArea } from "./TextArea.styled";

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
	label: string;
}

const TextArea = ({ id, label, required, ...rest }: Props) => {
	return (
		<StyledTextArea>
			<label htmlFor={id}>
				{label}
				{required && <span className="required">*</span>}
			</label>
			<textarea id={id} required={required} {...rest}></textarea>
		</StyledTextArea>
	);
};

export default TextArea;
