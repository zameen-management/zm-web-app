import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const getAsset = async (key: string): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.get(`/assets/${key}`);
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default getAsset;
