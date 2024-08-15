import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

type EmailProps = {
	subject: string;
	body: string;
	recipients: string[];
};

const sendEmail = async ({
	subject,
	body,
	recipients,
}: EmailProps): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.post("/email", {
			subject,
			body,
			recipients,
		});
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default sendEmail;
