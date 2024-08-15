import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const updateLeaseById = async (
	id: string,
	body: object
): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.put(`/leases/${id}`, body);
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default updateLeaseById;
