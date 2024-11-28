import { MdBathtub, MdKingBed, MdStraighten } from "react-icons/md";
import { Column } from "../../../styles/Column.styled";
import { Row } from "../../../styles/Row.styled";
import { Property } from "../../../types/Property.type";

interface Props {
	property: Property;
}

const PropertyOverview = ({ property }: Props) => {
	return (
		<Column $gap="0.5rem">
			<h4>Overview</h4>
			<Row $gap="2rem">
				<Row $gap="0.5rem">
					<MdKingBed />
					<p>{property.beds} beds</p>
				</Row>
				<Row $gap="0.5rem">
					<MdBathtub />
					<p>{property.baths} baths</p>
				</Row>
				<Row $gap="0.5rem">
					<MdStraighten />
					<p>{property.sqft.toLocaleString()} sqft</p>
				</Row>
			</Row>
		</Column>
	);
};

export default PropertyOverview;
