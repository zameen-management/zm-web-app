import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const getUserById = async (id: string): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.get(`/users/${id}`);
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default getUserById;
