import { MdChevronLeft, MdChevronRight, MdClose } from "react-icons/md";
import { StyledGalleryModal } from "./Property.styled";
import { Image as ImageModel } from "../../../types/Image.types";
import Image from "../../../ui/image/Image";
import { Dispatch, SetStateAction } from "react";

interface Props {
	images: ImageModel[];
	imageIndex: number;
	setImageIndex: Dispatch<SetStateAction<number>>;
	onClose: () => void;
}

const GalleryModal = ({
	images,
	imageIndex,
	setImageIndex,
	onClose,
}: Props) => {
	const decremement = () => {
		setImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
	};

	const increment = () => {
		console.log(true);
		setImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
	};

	return (
		<StyledGalleryModal>
			<div onClick={decremement} className="modal-arrow left">
				<MdChevronLeft />
			</div>
			<div className="modal-image">
				<p>{`${imageIndex + 1} of ${images.length}`}</p>
				<Image imageKey={images[imageIndex].key} />
				<p>{images[imageIndex].description}</p>
			</div>
			<div onClick={increment} className="modal-arrow right">
				<MdChevronRight />
			</div>
			<MdClose onClick={onClose} className="modal-close" />
		</StyledGalleryModal>
	);
};

export default GalleryModal;
