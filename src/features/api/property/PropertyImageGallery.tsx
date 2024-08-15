import { FC, useState } from "react";
import { StyledPropertyImageGallery } from "../../components/properties/Properties.styled";
import { getImageUrl } from "../../utils/getImageUrl";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

interface ImageGalleryProps {
	images: {
		key: string;
		description: string;
	}[];
}

const PropertyImageGallery: FC<ImageGalleryProps> = ({ images }) => {
	const [index, setIndex] = useState(0);

	const changeIndex = (increment: number) => {
		let newIndex = index + increment;
		if (newIndex < 0) setIndex(images.length - 1);
		else if (newIndex >= images.length) setIndex(0);
		else setIndex(newIndex);
	};

	return (
		<StyledPropertyImageGallery>
			{images[index]?.key && (
				<img src={getImageUrl(images[index].key)} alt="Property" />
			)}
			{images[index].description && (
				<p className="description">{images[index].description}</p>
			)}
			<div className="row align-center justify-sb">
				<MdArrowBack onClick={() => changeIndex(-1)} />
				<p>
					{index + 1} / {images.length}
				</p>
				<MdArrowForward onClick={() => changeIndex(1)} />
			</div>
		</StyledPropertyImageGallery>
	);
};

export default PropertyImageGallery;
