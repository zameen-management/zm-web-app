import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./features/layout";
import ServicesHome from "./pages/services";
import PropertiesHome from "./pages/properties";

const App = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="services/*" element={<ServicesHome />} />
				<Route path="properties/*" element={<PropertiesHome />} />
				<Route path="*" element={<Navigate to="/services" />} />
			</Route>
		</Routes>
	);
};

export default App;
