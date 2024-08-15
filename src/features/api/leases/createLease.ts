import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const createLease = async (body: object): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.post("/leases", body);
		return response;
	} catch (err: any) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default createLease;
