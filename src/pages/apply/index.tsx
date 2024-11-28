import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../../features/components/layouts/appLayout/AppLayout";
import AppEmail from "../../features/components/applications/AppEmail";
import AppSignIn from "../../features/components/applications/AppSignIn";
import AppForgotPassword from "../../features/components/applications/AppForgotPassword";
import AppResetPassword from "../../features/components/applications/AppResetPassword";
import AppSignUp from "../../features/components/applications/AppSignUp";
import AppApplication from "../../features/components/applications/AppApplication";

const ApplyRoot = () => {
	return (
		<Routes>
			<Route element={<AppLayout />}>
				{/* public */}
				<Route index element={<AppEmail />} />
				<Route path="sign-in" element={<AppSignIn />} />
				<Route path="forgot-password" element={<AppForgotPassword />} />
				<Route path="set-password" element={<AppResetPassword />} />
				<Route path="sign-up" element={<AppSignUp />} />

				{/* private */}
				<Route path="application/*" element={<AppApplication />} />

				<Route path="*" element={<Navigate to="" />} />
			</Route>
		</Routes>
	);
};

export default ApplyRoot;
