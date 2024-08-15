import { FC } from "react";
import { StyledButton } from "./Button.styled";

const Button: FC<any> = ({ ...props }) => {
	return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
