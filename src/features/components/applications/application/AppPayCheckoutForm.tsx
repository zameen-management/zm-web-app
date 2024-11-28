import {
	PaymentElement,
	useElements,
	useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import Form from "../../../ui/form/Form";
import { BASE_URL } from "../../../../constants";
import { StripePaymentElementOptions } from "@stripe/stripe-js";
import Button from "../../../ui/button/Button";

const AppPayCheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const [message, setMessage] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async () => {
		if (!stripe || !elements) return;

		setIsLoading(true);

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: `${BASE_URL}/apply/application/pay/complete`,
			},
		});

		if (error.type === "card_error" || error.type === "validation_error") {
			setMessage(
				error.message || "Unable to process payment at this time."
			);
		} else {
			setMessage("An unexpected error occurred.");
		}

		setIsLoading(false);
	};

	const paymentElementOptions: StripePaymentElementOptions = {
		layout: "tabs",
	};

	return (
		<Form id="payment-element" onSubmit={handleSubmit}>
			<h3>Pay Application Fee</h3>
			<h4>Payment Amount: $50</h4>
			<PaymentElement
				id="payment-element"
				options={paymentElementOptions}
			/>
			<Button
				variant="fill"
				fullWidth
				disabled={isLoading || !stripe || !elements}
				id="submit"
			>
				<span id="button-text">
					{isLoading ? "Loading..." : "Pay now"}
				</span>
			</Button>
			{message && <div id="payment-message">{message}</div>}
		</Form>
	);
};

export default AppPayCheckoutForm;
