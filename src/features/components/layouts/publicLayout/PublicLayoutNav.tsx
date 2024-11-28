import { NavLink } from "react-router-dom";
import { StyledPublicNav } from "./PublicLayout.styled";
import Button from "../../../ui/button/Button";
import { MdClose } from "react-icons/md";
import { Dispatch, SetStateAction } from "react";

interface Props {
	isNavOpen: boolean;
	setIsNavOpen: Dispatch<SetStateAction<boolean>>;
}

const PublicLayoutNav = ({ isNavOpen, setIsNavOpen }: Props) => {
	const closeNav = () => setIsNavOpen(false);

	return (
		<StyledPublicNav $isNavOpen={isNavOpen}>
			<MdClose onClick={closeNav} />
			<nav>
				<NavLink onClick={closeNav} to="/">
					Home
				</NavLink>
				<NavLink onClick={closeNav} to="/properties">
					Properties
				</NavLink>
				<NavLink onClick={closeNav} to="/services">
					Investors
				</NavLink>
			</nav>
			<Button variant="fill">Sign In</Button>
		</StyledPublicNav>
	);
};

export default PublicLayoutNav;
