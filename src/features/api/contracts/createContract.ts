import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const createContract = async (body: object): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.post("/contracts", body);
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default createContract;
