import { axiosInstance } from "./axios";

interface PaymentIntentData {
	items: { amount: number }[];
}

interface PaymentIntentResponse {
	clientSecret: string;
}

class StripeApi {
	private readonly endpoint = "/stripe";

	public async createPaymentIntent(
		data: PaymentIntentData
	): Promise<PaymentIntentResponse> {
		try {
			const response = await axiosInstance.post<PaymentIntentResponse>(
				`${this.endpoint}/create-payment-intent`,
				data
			);
			return response.data;
		} catch (error: any) {
			throw error;
		}
	}
}

export default new StripeApi();
