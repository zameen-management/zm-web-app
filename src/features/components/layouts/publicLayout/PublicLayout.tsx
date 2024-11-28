import { Outlet } from "react-router-dom";
import { StyledPublicLayout } from "./PublicLayout.styled";
import PublicLayoutHeader from "./PublicLayoutHeader";

const PublicLayout = () => {
	return (
		<StyledPublicLayout>
			<PublicLayoutHeader />
			<Outlet />
		</StyledPublicLayout>
	);
};

export default PublicLayout;
