import { Navigate, Route, Routes } from "react-router-dom";
import Apply from "./Apply";
import ApplicationComplete from "./ApplicationComplete";

const ApplicationsHome = () => {
	return (
		<Routes>
			<Route path="apply" element={<Apply />} />
			<Route path="complete" element={<ApplicationComplete />} />
			<Route path="*" element={<Navigate to="apply" />} />
		</Routes>
	);
};

export default ApplicationsHome;
