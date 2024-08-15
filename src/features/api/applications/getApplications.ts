import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const getApplications = async (params: any): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.get(`/applications`, { params });
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default getApplications;
