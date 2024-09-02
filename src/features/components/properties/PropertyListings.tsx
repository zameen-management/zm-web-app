import { useEffect, useState } from "react";
import { StyledPropertyListings } from "./Properties.styled";
import PropertyCard from "./PropertyCard";
import PropertyApi from "../../api/Property.api";
import { Property } from "../../types/Property.types";

const PropertyListings = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [properties, setProperties] = useState<Property[]>([]);

	const fetchProperties = async () => {
		try {
			setIsLoading(true);
			const response = await PropertyApi.getAll();
			setProperties(response);
		} catch (err) {
			alert("Unable to fetch properties.");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchProperties();
	}, []);

	if (isLoading) return <p>Loading...</p>;

	return (
		<StyledPropertyListings>
			{properties.length === 0 && <p>No Properties Available</p>}
			{properties.map((property: Property) => (
				<PropertyCard key={property._id} property={property} />
			))}
		</StyledPropertyListings>
	);
};

export default PropertyListings;
