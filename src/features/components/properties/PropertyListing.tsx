import { Property } from "../../types/Property.types";
import HeaderGallery from "./property/HeaderGallery";

interface Props {
	property: Property;
}

const PropertyListing = ({ property }: Props) => {
	return (
		<>
			{property.images.length > 0 && (
				<HeaderGallery images={property.images} />
			)}
		</>
	);
};

export default PropertyListing;
