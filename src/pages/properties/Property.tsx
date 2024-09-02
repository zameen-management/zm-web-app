import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../features/ui/container/Container";
import PropertyInfo from "../../features/components/properties/PropertyInfo";
import { Property as PropertyModel } from "../../features/types/Property.types";
import PropertyApi from "../../features/api/Property.api";

const Property = () => {
	const { propertyId } = useParams();
	const [property, setProperty] = useState<PropertyModel>();
	const navigate = useNavigate();

	const fetchProperty = async () => {
		try {
			const data = await PropertyApi.getById(propertyId || "");
			setProperty(data);
		} catch (err) {
			alert(
				"Unable to fetch property. Redirecting to properties page..."
			);
			navigate("/properties");
		}
	};

	useEffect(() => {
		fetchProperty();
	}, []);

	if (!property) {
		return (
			<Container>
				<p>Loading property...</p>
			</Container>
		);
	}

	return (
		<Container>
			<PropertyInfo property={property} />
		</Container>
	);
};

export default Property;
