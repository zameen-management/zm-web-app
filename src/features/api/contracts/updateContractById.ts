import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const updateContractById = async (
	id: string,
	body: object
): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.put(`/contracts/${id}`, body);
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default updateContractById;
