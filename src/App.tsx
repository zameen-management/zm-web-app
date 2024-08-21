import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./features/layout";
import HomePage from "./pages/home";
import ServicesHome from "./pages/services";
// import PropertiesHome from "./pages/properties";
// import ApplicationsHome from "./pages/applications";

const App = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="services/*" element={<ServicesHome />} />
				{/* <Route path="properties/*" element={<PropertiesHome />} />
				<Route path="applications/*" element={<ApplicationsHome />} /> */}
				<Route path="*" element={<Navigate to="/" />} />
			</Route>
		</Routes>
	);
};

export default App;
