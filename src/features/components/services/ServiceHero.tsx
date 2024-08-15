import { FC } from "react";
import { StyledHero } from "./Services.styled";
import Button from "../../ui/button/Button";

interface HomeHeroProps {
	onClick: () => void;
}

const ServiceHero: FC<HomeHeroProps> = ({ onClick }) => {
	return (
		<StyledHero>
			<img className="handshake-img" src="/images/handshake.svg" />
			<img className="property-img" src="/images/property.svg" />
			<div className="content">
				<h1>
					End-to-End Property Management,
					<br />
					Stress-Free Ownership.
				</h1>
				<p>
					We cater to all levels of property investors, managing every
					aspect of your property. From property acquisition and lease
					management to rent collection and maintenance, we handle{" "}
					<b>everything</b> for you.
				</p>
				<Button onClick={onClick} style={{ margin: "0 auto" }}>
					Free Consultation
				</Button>
			</div>
		</StyledHero>
	);
};

export default ServiceHero;
