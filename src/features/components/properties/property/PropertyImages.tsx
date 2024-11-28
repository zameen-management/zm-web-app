import { useState } from "react";
import Popup from "../../../ui/popup/Popup";
import { MoreImagesCard, StyledPropertyImages } from "../Properties.styled";
import PropertySelectedImage from "./PropertySelectedImage";

interface Props {
	images: string[];
}

const PropertyImages = ({ images }: Props) => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(0);

	const showPopup = (image: number) => {
		setIsPopupOpen(true);
		setSelectedImage(image);
	};

	const hidePopup = () => {
		setIsPopupOpen(false);
		setSelectedImage(0);
	};

	return (
		<StyledPropertyImages>
			<img
				onClick={() => showPopup(0)}
				className="primary-image"
				src={images[0]}
				alt="house"
			/>
			<div className="property-images-row">
				{images.length > 1 && (
					<img onClick={() => showPopup(1)} src={images[1]} />
				)}
				{images.length > 2 && (
					<img onClick={() => showPopup(2)} src={images[2]} />
				)}
				{images.length > 3 && (
					<MoreImagesCard onClick={() => showPopup(3)}>
						<img src={images[3]} />
						<div className="overlay">
							<p>See More</p>
						</div>
					</MoreImagesCard>
				)}
			</div>
			{isPopupOpen && (
				<Popup onClose={hidePopup}>
					<PropertySelectedImage
						images={images}
						index={selectedImage}
						setIndex={setSelectedImage}
					/>
				</Popup>
			)}
		</StyledPropertyImages>
	);
};

export default PropertyImages;
