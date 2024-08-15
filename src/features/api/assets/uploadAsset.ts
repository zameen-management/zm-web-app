import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const uploadAsset = async (file: any): Promise<AxiosPromise> => {
	try {
		const formData = new FormData();
		formData.append("file", file);

		const response = await axiosPublic.post("/assets", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default uploadAsset;
