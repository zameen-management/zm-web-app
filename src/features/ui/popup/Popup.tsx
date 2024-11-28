import { ReactNode } from "react";
import { StyledPopup } from "./Popup.styled";
import { MdClose } from "react-icons/md";

interface Props {
	children?: ReactNode;
	onClose: () => void;
}

const Popup = ({ children, onClose }: Props) => {
	return (
		<StyledPopup>
			<div className="popup-modal">
				{children}
				<MdClose className="popup-close" onClick={onClose} />
			</div>
		</StyledPopup>
	);
};

export default Popup;
