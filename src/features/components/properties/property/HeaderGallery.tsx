import { MdOutlineImage } from "react-icons/md";
import { Image as ImageModel } from "../../../types/Image.types";
import Image from "../../../ui/image/Image";
import { StyledHeaderGallery } from "./Property.styled";
import { useState } from "react";
import GalleryModal from "./GalleryModal";

interface Props {
	images: ImageModel[];
}

const HeaderGallery = ({ images }: Props) => {
	const [imageIndex, setImageIndex] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (index: number) => {
		setImageIndex(index);
		setIsModalOpen(true);
	};

	return (
		<>
			<StyledHeaderGallery>
				<div className="large-column">
					<div onClick={() => openModal(0)} className="gallery-card">
						<Image imageKey={images[0].key} />
						<div className="show-all">
							<MdOutlineImage />
							<p>View All {images.length} Photos</p>
						</div>
					</div>
				</div>
				{images.length > 1 && (
					<div className="small-column-a">
						<div
							onClick={() => openModal(1)}
							className="gallery-card"
						>
							<Image imageKey={images[1].key} />
						</div>
						{images.length > 2 && (
							<div
								onClick={() => openModal(2)}
								className="gallery-card"
							>
								<Image imageKey={images[2].key} />
							</div>
						)}
					</div>
				)}
				{images.length > 3 && (
					<div className="small-column-b">
						<div
							onClick={() => openModal(3)}
							className="gallery-card"
						>
							<Image imageKey={images[3].key} />
						</div>
						{images.length > 4 && (
							<div
								onClick={() => openModal(4)}
								className="gallery-card"
							>
								<Image imageKey={images[4].key} />
								<div className="show-more">
									Show More Photos
								</div>
							</div>
						)}
					</div>
				)}
			</StyledHeaderGallery>
			{isModalOpen && (
				<GalleryModal
					images={images}
					imageIndex={imageIndex}
					setImageIndex={setImageIndex}
					onClose={() => setIsModalOpen(false)}
				/>
			)}
		</>
	);
};
export default HeaderGallery;
