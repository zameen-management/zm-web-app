import { FC, FormEvent, ReactNode } from "react";
import { StyledForm } from "./Form.styled";

interface FormProps {
	onSubmit: () => void;
	children?: ReactNode;
}

const Form: FC<FormProps> = ({ onSubmit, children }) => {
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		onSubmit();
	};

	return <StyledForm onSubmit={handleSubmit}>{children}</StyledForm>;
};

export default Form;
