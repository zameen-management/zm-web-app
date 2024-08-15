import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const getContractById = async (id: string): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.get(`/contracts/${id}`);
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default getContractById;
