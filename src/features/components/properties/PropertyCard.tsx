import { MdBathtub, MdBed } from "react-icons/md";
import { Property } from "../../types/Property.types";
import Image from "../../ui/image/Image";
import { StyledPropertyCard } from "./Properties.styled";
import { useNavigate } from "react-router-dom";

interface Props {
	property: Property;
}

const PropertyCard = ({ property }: Props) => {
	const navigate = useNavigate();

	return (
		<StyledPropertyCard
			onClick={() => navigate(`${property._id}`)}
			$status={property.status}
		>
			{property.images.length > 0 && (
				<Image imageKey={property.images[0].key} />
			)}
			<div className="card-overlay"></div>
			<div className="pill">{property.status}</div>
			<div className="card-content">
				<div className="column gap-05">
					<h3>123 Example Street</h3>
					<div className="row gap-2">
						<div className="card-specs">
							<MdBed />
							<p>3 beds</p>
						</div>
						<div className="card-specs">
							<MdBathtub />
							<p>2 baths</p>
						</div>
					</div>
				</div>
				<h4>$1,234/mo</h4>
			</div>
		</StyledPropertyCard>
	);
};

export default PropertyCard;
