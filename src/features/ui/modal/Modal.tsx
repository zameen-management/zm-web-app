import { FC, ReactNode } from "react";
import { StyledModal } from "./Modal.styled";

interface ModalProps {
	gap?: number;
	children: ReactNode;
}

const Modal: FC<ModalProps> = ({ gap = 1, children }) => {
	return <StyledModal $gap={gap}>{children}</StyledModal>;
};

export default Modal;
