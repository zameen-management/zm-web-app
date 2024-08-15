import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const createUser = async (body?: any): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.post("/users", body);
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default createUser;
