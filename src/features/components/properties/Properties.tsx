import { useEffect, useState } from "react";
import { Container } from "../../styles/Container.styled";
import { Property } from "../../types/Property.type";
import { StyledPropertiesGrid } from "./Properties.styled";
import PropertyCard from "./PropertyCard";

const Properties = () => {
	const [properties, setProperties] = useState<Property[]>([]);

	useEffect(() => {
		let arr = [];
		for (let i = 0; i < 4; i++)
			arr.push({
				_id: `${1001 + i}`,
				beds: 3,
				baths: 2,
				sqft: 1000,
				images: [
					"https://photos.zillowstatic.com/fp/58738434061054d0a96b71fae0e2cc92-uncropped_scaled_within_1536_1152.webp",
					"https://photos.zillowstatic.com/fp/31994573d397fd92434efc8b32d9bfdc-cc_ft_768.webp",
					"https://photos.zillowstatic.com/fp/680ab1e06f86c856a82910eaa8f0bd86-cc_ft_1536.webp",
					"https://photos.zillowstatic.com/fp/3e562360538fd839feebadbb75869bfb-cc_ft_1536.webp",
				],
			});
		setProperties(arr);
	}, []);

	return (
		<Container>
			<StyledPropertiesGrid>
				{properties.map((property, index) => (
					<PropertyCard key={index} property={property} />
				))}
			</StyledPropertiesGrid>
		</Container>
	);
};

export default Properties;
