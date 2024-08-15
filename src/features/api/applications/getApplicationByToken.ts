import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const getApplicationByToken = async (token: string): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.post(`/applications/token`, {
			token,
		});
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default getApplicationByToken;
