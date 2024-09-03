import { MdBathtub, MdBed } from "react-icons/md";
import { Property } from "../../types/Property.types";
import Image from "../../ui/image/Image";
import { StyledPropertyCard } from "./Properties.styled";
import { useNavigate } from "react-router-dom";
import { Unit } from "../../types/Unit.types";
import { formatToDollar } from "../../utils/formatToDollar";

interface Props {
	property: Property;
}

const PropertyCard = ({ property }: Props) => {
	const navigate = useNavigate();
	const unit: Unit = property.units[0] as Unit;

	return (
		<StyledPropertyCard
			onClick={() => navigate(`${property._id}`)}
			$status={property.status}
		>
			{property.images.length > 0 ? (
				<Image imageKey={property.images[0].key} />
			) : (
				<img
					src="https://www.charminghomes.co.nz/uploads/1/3/9/6/139617426/property-placeholder-grande_2.jpg"
					alt="placeholder"
				/>
			)}
			<div className="card-overlay"></div>
			<div className="pill">{property.status}</div>
			<div className="card-content">
				<div className="column gap-05">
					<h3>{property.address.street}</h3>
					<div className="row gap-2">
						<div className="card-specs">
							<MdBed />
							<p>{unit.beds} beds</p>
						</div>
						<div className="card-specs">
							<MdBathtub />
							<p>{unit.baths} baths</p>
						</div>
					</div>
				</div>
				<h4>{formatToDollar(unit.rent)}/mo</h4>
			</div>
		</StyledPropertyCard>
	);
};

export default PropertyCard;
