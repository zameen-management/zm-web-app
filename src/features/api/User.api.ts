import { User } from "../types/User.types";
import axios from "./axios";

class UserApi {
	private api = axios;
	private endpoint = "/properties";

	add = async (data: User): Promise<User> => {
		const response = await this.api.post(this.endpoint, data);
		return response.data;
	};

	getAll = async (params?: any): Promise<User[]> => {
		const response = await this.api.get(this.endpoint, { params });
		return response.data;
	};

	getById = async (id: string): Promise<User> => {
		const response = await this.api.get(`${this.endpoint}/${id}`);
		return response.data;
	};

	update = async (id: string, data: Partial<User>): Promise<User> => {
		const response = await this.api.put(`${this.endpoint}/${id}`, data);
		return response.data;
	};

	delete = async (id: string): Promise<User> => {
		const response = await this.api.delete(`${this.endpoint}/${id}`);
		return response.data;
	};
}

export default new UserApi();
