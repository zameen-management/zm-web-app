import { Navigate, Route, Routes } from "react-router-dom";
import PropertiesPage from "./Properties.page";
import PropertyPage from "./Property.page";

const PropertiesRoot = () => {
	return (
		<Routes>
			<Route index element={<PropertiesPage />} />
			<Route path=":propertyId" element={<PropertyPage />} />
			<Route path="*" element={<Navigate to="" />} />
		</Routes>
	);
};

export default PropertiesRoot;
