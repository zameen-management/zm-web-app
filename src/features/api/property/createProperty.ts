import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const createProperty = async (body?: any): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.post("/properties", body);
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default createProperty;
