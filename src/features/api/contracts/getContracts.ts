import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const getContracts = async (params?: object): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.get("/contracts", { params });
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default getContracts;
