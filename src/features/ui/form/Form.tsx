import { FormEvent, InputHTMLAttributes, ReactNode } from "react";
import { StyledForm } from "./Form.styled";

interface Props extends InputHTMLAttributes<HTMLFormElement> {
	onSubmit: () => void;
	children?: ReactNode;
}

const Form = ({ onSubmit, children, ...rest }: Props) => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();
			onSubmit();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<StyledForm onSubmit={handleSubmit} {...rest}>
			{children}
		</StyledForm>
	);
};

export default Form;
