import { ReactNode } from "react";
import { StyledCard } from "./Card.styled";

interface Props {
	children?: ReactNode;
}

const Card = ({ children }: Props) => {
	return <StyledCard>{children}</StyledCard>;
};

export default Card;
