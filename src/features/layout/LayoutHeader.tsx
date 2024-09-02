import { useState } from "react";
import { NavLink, To, useNavigate } from "react-router-dom";
import { StyledLogo, StyledWebappHeader } from "./Layout.styled";
import { MdArrowForwardIos, MdClose, MdMenu } from "react-icons/md";
import Button from "../ui/button/Button";

const LayoutHeader = () => {
	const navigate = useNavigate();
	const [isNavOpen, setIsNavOpen] = useState(false);

	const handleNavigate = (to: To) => {
		setIsNavOpen(false);
		navigate(to);
	};

	const toggleNav = () => setIsNavOpen(!isNavOpen);

	return (
		<StyledWebappHeader open={isNavOpen}>
			<StyledLogo href="/">
				<img src="/images/house.svg" alt="Zameen Management" />
			</StyledLogo>
			<nav>
				<div className="menu-close">
					<MdClose className="menu-icon" onClick={toggleNav} />
				</div>
				<NavLink to="/properties">
					Properties
					<MdArrowForwardIos />
				</NavLink>
				<Button onClick={() => handleNavigate("/services")}>
					Work With Us
				</Button>
			</nav>
			<MdMenu className="menu-icon" onClick={toggleNav} />
		</StyledWebappHeader>
	);
};

export default LayoutHeader;
