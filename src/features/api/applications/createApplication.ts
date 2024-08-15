import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const createApplication = async (body?: any): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.post("/applications", body);
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default createApplication;
