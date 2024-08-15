import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const updateApplicationById = async (
	id: string,
	body: any
): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.put(`/applications/${id}`, body);
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default updateApplicationById;
