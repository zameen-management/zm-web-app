import { MdOutlineImage } from "react-icons/md";
import { Image as ImageModel } from "../../../types/Image.types";
import Image from "../../../ui/image/Image";
import { StyledHeaderGallery } from "./Property.styled";

interface Props {
	images: ImageModel[];
}

const HeaderGallery = ({ images }: Props) => {
	return (
		<StyledHeaderGallery>
			<div className="large-column">
				<div className="gallery-card">
					<Image imageKey={images[0].key} />
					<div className="show-all">
						<MdOutlineImage />
						<p>View All {images.length} Photos</p>
					</div>
				</div>
			</div>
			<div className="small-column-a">
				<div className="gallery-card">
					<Image imageKey={images[1].key} />
				</div>
				<div className="gallery-card">
					<Image imageKey={images[2].key} />
				</div>
			</div>
			<div className="small-column-b">
				<div className="gallery-card">
					<Image imageKey={images[3].key} />
				</div>
				<div className="gallery-card">
					<Image imageKey={images[4].key} />
					<div className="show-more">Show More Photos</div>
				</div>
			</div>
		</StyledHeaderGallery>
	);
};

export default HeaderGallery;
