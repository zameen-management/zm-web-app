import { useEffect, useState } from "react";
import { Property as PropertyModel } from "../../../types/Property.type";
import { Container } from "../../../styles/Container.styled";
import { StyledProperty } from "../Properties.styled";
import PropertyImages from "./PropertyImages";
import { Row } from "../../../styles/Row.styled";
import Button from "../../../ui/button/Button";
import { Column } from "../../../styles/Column.styled";
import WalkthroughForm from "./WalkthroughForm";
import PropertyOverview from "./PropertyOverview";
import { useNavigate } from "react-router-dom";

const Property = () => {
	const [property, setProperty] = useState<PropertyModel | null>(null);
	const [showForm, setShowForm] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		setProperty({
			_id: "1001",
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
	}, []);

	if (!property)
		return (
			<Container>
				<h2>Loading Property...</h2>
			</Container>
		);

	return (
		<Container>
			<StyledProperty>
				<div className="property-left">
					<PropertyImages images={property.images} />
					<Row>
						<Button onClick={() => setShowForm(true)} size="lg">
							Schedule a Walkthrough
						</Button>
						<Button
							onClick={() =>
								navigate(`/apply?property=${property._id}`)
							}
							size="lg"
							variant="fill"
						>
							Submit an Application
						</Button>
					</Row>
				</div>
				<div className="property-right">
					<h2>123 Example Street, Joplin MO</h2>
					<PropertyOverview property={property} />
					<Column $gap="0.5rem">
						<h4>Description</h4>
					</Column>
					<Column $gap="0.5rem">
						<h4>Details</h4>
					</Column>
				</div>
			</StyledProperty>
			{showForm && <WalkthroughForm setShowForm={setShowForm} />}
		</Container>
	);
};

export default Property;
