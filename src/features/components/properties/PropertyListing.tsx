import { Property } from "../../types/Property.types";
import HeaderGallery from "./property/HeaderGallery";
import PropertyInfo from "./property/PropertyInfo";

interface Props {
	property: Property;
}

const PropertyListing = ({ property }: Props) => {
	return (
		<section className="column gap-3">
			{property.images.length > 0 && (
				<HeaderGallery images={property.images} />
			)}
			{property.units.length > 0 && <PropertyInfo property={property} />}
		</section>
	);
};

export default PropertyListing;
