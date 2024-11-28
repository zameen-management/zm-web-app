import { Navigate, Route, Routes } from "react-router-dom";
import HomeRoot from "./pages/home";
import PublicLayout from "./features/components/layouts/publicLayout/PublicLayout";
import ServicesRoot from "./pages/services";
import PropertiesRoot from "./pages/properties";
import ApplyRoot from "./pages/apply";

const App = () => {
	return (
		<Routes>
			<Route element={<PublicLayout />}>
				<Route index element={<HomeRoot />} />
				<Route path="properties/*" element={<PropertiesRoot />} />
				<Route path="services/*" element={<ServicesRoot />} />
				<Route path="apply/*" element={<ApplyRoot />} />
			</Route>
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default App;
