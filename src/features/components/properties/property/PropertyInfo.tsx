import { MdEditDocument } from "react-icons/md";
import { Property } from "../../../types/Property.types";
import { Unit } from "../../../types/Unit.types";
import Button from "../../../ui/button/Button";
import { formatToDollar } from "../../../utils/formatToDollar";
import { getAddress } from "../../../utils/getAddress";
import { StyledPropertyInfo } from "./Property.styled";
import { useNavigate } from "react-router-dom";

const PropertyInfo = ({ property }: { property: Property }) => {
	const unit = property.units[0] as Unit;
	const navigate = useNavigate();

	return (
		<StyledPropertyInfo>
			<div className="info">
				<h2>{getAddress(property.address)}</h2>
				{property.description && <p>{property.description}</p>}
				{unit.petPolicy && (
					<div className="column">
						<h3>Pet Policy</h3>
						<p>{unit.petPolicy}</p>
					</div>
				)}
				{unit.leaseTerms && (
					<div className="column">
						<h3>Lease Terms</h3>
						<p>{unit.leaseTerms}</p>
					</div>
				)}
			</div>
			<div className="more-info">
				<div className="section">
					<h3>Rent</h3>
					<h2>{formatToDollar(unit.rent)}/month</h2>
				</div>
				<div className="section">
					<h3>Manager: Faiqa Kamran</h3>
					<div className="column">
						<p>Phone Number: (417) 669-2258</p>
						<p>Email: contact@zameen-management.com</p>
					</div>
				</div>
				<div className="section">
					<Button
						onClick={() =>
							navigate(
								`/applications/apply?property=${property._id}`
							)
						}
					>
						<MdEditDocument />
						Apply Now
					</Button>
				</div>
			</div>
		</StyledPropertyInfo>
	);
};

export default PropertyInfo;
