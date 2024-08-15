import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const getPropertyById = async (id: string): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.get(`/properties/${id}`);
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default getPropertyById;
