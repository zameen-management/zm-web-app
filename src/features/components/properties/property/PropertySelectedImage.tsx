import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { StyledImageGallery } from "../Properties.styled";
import { Row } from "../../../styles/Row.styled";
import { Dispatch, SetStateAction } from "react";

interface Props {
	images: string[];
	index: number;
	setIndex: Dispatch<SetStateAction<number>>;
}

const PropertySelectedImage = ({ images, index, setIndex }: Props) => {
	const prev = () => {
		setIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const next = () => {
		setIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<StyledImageGallery>
			<p>{`${index + 1} / ${images.length}`}</p>
			<img src={images[index]} alt="Property" />
			<Row $justifyContent="space-between" $gap="0.5rem">
				<MdChevronLeft onClick={prev} />
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Dolorum, ea.
				</p>
				<MdChevronRight onClick={next} />
			</Row>
		</StyledImageGallery>
	);
};

export default PropertySelectedImage;
