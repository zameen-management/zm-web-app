import { useEffect, useState } from "react";
import getProperties from "../../api/property/getProperties";
import { StyledPropertyListings } from "./Properties.styled";
import { IProperty } from "../../types/Property";
import PropertyCard from "./PropertyCard";

const PropertyListings = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [properties, setProperties] = useState<IProperty[]>([]);

	const fetchProperties = async () => {
		try {
			setIsLoading(true);
			const { data } = await getProperties();

			const availableProperties = data.filter(
				(property: IProperty) => property.availability === "Available"
			);
			const occupiedProperties = data.filter(
				(property: IProperty) => property.availability === "Occupied"
			);

			setProperties([...availableProperties, ...occupiedProperties]);
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
			{properties.map((property: IProperty) => (
				<PropertyCard key={property._id} property={property} />
			))}
		</StyledPropertyListings>
	);
};

export default PropertyListings;
