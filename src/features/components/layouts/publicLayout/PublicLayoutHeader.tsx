import { Link } from "react-router-dom";
import { StyledPublicHeader } from "./PublicLayout.styled";
import PublicLayoutNav from "./PublicLayoutNav";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

const PublicLayoutHeader = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<StyledPublicHeader>
			<Link to="/">
				<h3>Zameen Management</h3>
			</Link>
			<PublicLayoutNav
				isNavOpen={isNavOpen}
				setIsNavOpen={setIsNavOpen}
			/>
			<MdMenu onClick={() => setIsNavOpen(true)} />
		</StyledPublicHeader>
	);
};

export default PublicLayoutHeader;
