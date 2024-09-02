import { Property } from "../../types/Property.types";

interface Props {
	property: Property;
}

const PropertyInfo = ({ property }: Props) => {
	return <>{property._id}</>;
};

export default PropertyInfo;
