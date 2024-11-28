import { Outlet } from "react-router-dom";
import { StyledAppLayout } from "./AppLayout.styled";

const AppLayout = () => {
	return (
		<StyledAppLayout>
			<div className="modal">{<Outlet />}</div>
		</StyledAppLayout>
	);
};

export default AppLayout;
