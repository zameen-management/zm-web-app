import { Link } from "react-router-dom";
import { Column } from "../../styles/Column.styled";
import Button from "../../ui/button/Button";
import { HomeHero } from "./Home.styled";

const HomePage = () => {
	return (
		<HomeHero>
			<div className="hero-overlay">
				<Column $gap="2rem" $alignItems="center">
					<h1>Find Your Next Rental Home</h1>
					<Link to="/properties">
						<Button size="lg" variant="fill">
							View Available Properties
						</Button>
					</Link>
				</Column>
			</div>
		</HomeHero>
	);
};

export default HomePage;
