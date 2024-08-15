import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InfoPill, StyledPill, StyledPropertyCard } from "./Properties.styled";
import { getImageUrl } from "../../utils/getImageUrl";
import { IProperty } from "../../types/Property";
import { getTextDate } from "../../utils/getTextDate";
import { MdBathtub, MdBed, MdLocationOn, MdOpenInFull } from "react-icons/md";
import { getAddress } from "../../utils/getAddress";
import { formatNumber } from "../../utils/formatNumber";

interface PropertyCardProps {
	property: IProperty;
}

const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
	const [color, setColor] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		if (property.availability === "Available") {
			setColor("#27ae60");
		} else if (property.availability === "Occupied") {
			setColor("#e67e22");
		} else {
			setColor("#e74c3c");
		}
	}, [property]);

	const handleClick = () => navigate(`/properties/${property._id}`);

	return (
		<StyledPropertyCard onClick={handleClick}>
			{property?.images[0]?.key ? (
				<img src={getImageUrl(property.images[0].key)} alt="Property" />
			) : (
				<div className="no-images">
					<div className="blur">Image Not Available</div>
				</div>
			)}
			<StyledPill color={color}>{property.availability}</StyledPill>
			{property?.currentLease?.endDate && (
				<InfoPill>
					Available{" "}
					{getTextDate(property.currentLease.endDate.split("T")[0])}
				</InfoPill>
			)}
			<div className="card-body">
				<div className="row align-center justify-sb">
					<div className="card-address">
						<MdLocationOn />
						<p>{getAddress(property.address)}</p>
					</div>
					<h3>${formatNumber(property.general.rent)}</h3>
				</div>
				<div className="row align-center justify-sb">
					<div className="card-spec">
						<MdBed />
						<p>{property.general.beds} beds</p>
					</div>
					<div className="card-spec">
						<MdBathtub />
						<p>{property.general.baths} baths</p>
					</div>
					<div className="card-spec">
						<MdOpenInFull />
						<p>{formatNumber(property.general.sqft)} ft²</p>
					</div>
				</div>
			</div>
		</StyledPropertyCard>
	);
};

export default PropertyCard;
