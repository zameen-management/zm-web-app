import { AxiosPromise } from "axios";
import axios from "../axios";

const signIn = async (
	email: string,
	password: string
): Promise<AxiosPromise> => {
	try {
		const response = await axios.post(`/auth/login`, {
			email,
			password,
		});
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default signIn;
