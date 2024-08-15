import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const getLeases = async (params?: object): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.get("/leases", { params });
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default getLeases;
