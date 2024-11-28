import { axiosInstance } from "./axios";

class BaseApi<T> {
	private endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	async create(body: T): Promise<T> {
		try {
			const response = await axiosInstance.post(`${this.endpoint}`, body);
			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async getAll(params?: Record<string, any>): Promise<T[]> {
		try {
			const response = await axiosInstance.get(`${this.endpoint}`, {
				params,
			});
			return response.data;
		} catch (error) {
			throw error;
		}
	}
}

export default BaseApi;
