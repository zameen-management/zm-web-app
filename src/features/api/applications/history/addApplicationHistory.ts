import { AxiosPromise } from "axios";
import axiosPublic from "../../axiosPublic";

const addApplicationHistory = async (
	id: string,
	body?: any
): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.post(
			`/applications/${id}/history`,
			body
		);
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default addApplicationHistory;
