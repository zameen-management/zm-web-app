import { useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

const AppPayComplete = () => {
	const stripe = useStripe();

	const [status, setStatus] = useState("default");
	const [intentId, setIntentId] = useState<string | null>(null);

	useEffect(() => {
		if (!stripe) return;

		const clientSecret = new URLSearchParams(window.location.search).get(
			"payment_intent_client_secret"
		);

		if (!clientSecret) return;

		stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
			if (!paymentIntent) return;

			setStatus(paymentIntent.status);
			setIntentId(paymentIntent.id);
		});
	}, [stripe]);

	return (
		<>
			<h4>Status: {status}</h4>
			<h4>Intent ID: {intentId}</h4>
		</>
	);
};

export default AppPayComplete;
