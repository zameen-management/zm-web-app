import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { STRIPE_API_KEY } from "../../../../constants";
import { useEffect, useState } from "react";
import stripeApi from "../../../api/stripe.api";
import { Elements } from "@stripe/react-stripe-js";
import { Navigate, Route, Routes } from "react-router-dom";
import AppPayCheckoutForm from "./AppPayCheckoutForm";
import AppPayComplete from "./AppPayComplete";

const stripePromise = loadStripe(STRIPE_API_KEY);

const AppPay = () => {
	const [clientSecret, setClientSecret] = useState("");

	const createPaymentIntent = async () => {
		try {
			const { clientSecret } = await stripeApi.createPaymentIntent({
				items: [{ amount: 5000 }],
			});
			setClientSecret(clientSecret);
		} catch (error: any) {
			alert("Unable to process payment at this time.");
		}
	};

	useEffect(() => {
		createPaymentIntent();
	}, []);

	const options: StripeElementsOptions = {
		clientSecret,
		appearance: {
			theme: "stripe",
			variables: {
				colorPrimary: "#4b7bec",
			},
		},
		loader: "auto",
	};

	return (
		<>
			{clientSecret && (
				<Elements options={options} stripe={stripePromise}>
					<Routes>
						<Route index element={<AppPayCheckoutForm />} />
						<Route path="complete" element={<AppPayComplete />} />
						<Route path="*" element={<Navigate to="" />} />
					</Routes>
				</Elements>
			)}
		</>
	);
};

export default AppPay;
