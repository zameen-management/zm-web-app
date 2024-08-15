import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const deleteApplicationById = async (id: string): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.delete(`/applications/${id}`);
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default deleteApplicationById;
