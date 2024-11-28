import styled from "styled-components";

interface Props {
	$variant: "fill" | "outline" | "ghost";
	$size: "sm" | "default" | "lg";
	$fullWidth: boolean;
}

export const StyledButton = styled.button<Props>`
	width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "min-content")};
	white-space: nowrap;
	font-size: 1rem;
	color: ${({ $variant, theme }) =>
		$variant === "fill" ? "white" : theme.colors.primary};
	padding: ${({ $size }) =>
		$size === "sm"
			? "4px 10px"
			: $size === "lg"
			? "12px 30px"
			: "8px 20px"};
	outline: none;
	border: ${({ $variant, theme }) =>
		$variant === "ghost" ? "none" : `1px solid ${theme.colors.primary}`};
	background: ${({ $variant, theme }) =>
		$variant === "fill" ? theme.colors.primary : "none"};
	cursor: pointer;
	border-radius: 3px;
	transition: all 0.25s ease-in-out;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;

	svg {
		width: 20px;
		height: 20px;
	}

	&:hover,
	&:focus {
		background-color: ${({ theme }) => theme.colors.primary};
		color: white;
		box-shadow: ${({ $variant }) =>
			$variant === "fill" ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : "none"};
	}

	&:disabled {
		background-color: ${({ theme }) => theme.colors.textGray};
		border: 1px solid ${({ theme }) => theme.colors.textGray};
		color: white;
		cursor: not-allowed;
	}
`;
