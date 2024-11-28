import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./Button.styled";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "fill" | "outline" | "ghost";
	size?: "sm" | "default" | "lg";
	fullWidth?: boolean;
}

const Button = ({
	variant = "outline",
	size = "default",
	fullWidth = false,
	children,
	...rest
}: Props) => {
	return (
		<StyledButton
			$variant={variant}
			$size={size}
			$fullWidth={fullWidth}
			{...rest}
		>
			{children}
		</StyledButton>
	);
};

export default Button;
