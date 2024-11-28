import AppStart from "./application/AppStart";
import AppInfo from "./application/AppInfo";
import { Navigate, Route, Routes } from "react-router-dom";
import AppResidential from "./application/AppResidential";
import AppEmployment from "./application/AppEmployment";
import AppOtherIncome from "./application/AppOtherIncome";
import AppGeneral from "./application/AppGeneral";
import AppBackground from "./application/AppBackground";
import AppOtherInfo from "./application/AppOtherInfo";
import AppDocuments from "./application/AppDocuments";
import AppPay from "./application/AppPay";

const AppApplication = () => {
	return (
		<Routes>
			<Route index element={<AppStart />} />
			<Route path="info" element={<AppInfo />} />
			<Route path="residential-history" element={<AppResidential />} />
			<Route path="employment" element={<AppEmployment />} />
			<Route path="other-income" element={<AppOtherIncome />} />
			<Route path="general" element={<AppGeneral />} />
			<Route path="background" element={<AppBackground />} />
			<Route path="other-info" element={<AppOtherInfo />} />
			<Route path="documents" element={<AppDocuments />} />
			<Route path="pay/*" element={<AppPay />} />
			<Route path="*" element={<Navigate to="" />} />
		</Routes>
	);
};

export default AppApplication;
