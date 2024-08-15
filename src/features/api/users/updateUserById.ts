import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const updateUserById = async (
	id: string,
	body: object
): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.put(`/users/${id}`, body);
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default updateUserById;
