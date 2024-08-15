import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const getUsers = async (params?: any): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.get("/users", { params });
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default getUsers;
