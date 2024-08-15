import { Outlet } from "react-router-dom";
import { StyledWebappBody } from "./Layout.styled";
import LayoutHeader from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";

const Layout = () => {
	return (
		<>
			<LayoutHeader />
			<StyledWebappBody>
				<Outlet />
			</StyledWebappBody>
			<LayoutFooter />
		</>
	);
};

export default Layout;
