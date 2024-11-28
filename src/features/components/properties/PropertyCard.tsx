import { Link } from "react-router-dom";
import { Row } from "../../styles/Row.styled";
import { Property } from "../../types/Property.type";
import Button from "../../ui/button/Button";
import { StyledPropertyCard } from "./Properties.styled";

interface Props {
	property: Property;
}

const PropertyCard = ({ property }: Props) => {
	return (
		<StyledPropertyCard>
			<Link to={`${property._id}`}>
				{property.images.length === 0 ? (
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png"
						alt="No Property"
					/>
				) : (
					<img
						src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt="Property Image"
					/>
				)}
			</Link>
			<Row $justifyContent="space-between">
				<p className="property-address">
					123 Example Street, Joplin MO
				</p>
				<p>$1,000/mo</p>
			</Row>
			<p className="property-info">3bd - 2ba - 1,000 sqft</p>
			<Link to={`${property._id}`}>
				<Button style={{ width: "100%" }} size="sm">
					View Property
				</Button>
			</Link>
		</StyledPropertyCard>
	);
};

export default PropertyCard;
