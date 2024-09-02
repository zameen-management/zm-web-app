import { Property } from "../types/Property.types";
import axios from "./axios";

class PropertyApi {
	private api = axios;
	private endpoint = "/properties";

	add = async (data: Property): Promise<Property> => {
		const response = await this.api.post(this.endpoint, data);
		return response.data;
	};

	getAll = async (params?: any): Promise<Property[]> => {
		const response = await this.api.get(this.endpoint, { params });
		return response.data;
	};

	getById = async (id: string): Promise<Property> => {
		const response = await this.api.get(`${this.endpoint}/${id}`);
		return response.data;
	};

	update = async (id: string, data: Partial<Property>): Promise<Property> => {
		const response = await this.api.put(`${this.endpoint}/${id}`, data);
		return response.data;
	};

	delete = async (id: string): Promise<Property> => {
		const response = await this.api.delete(`${this.endpoint}/${id}`);
		return response.data;
	};
}

export default new PropertyApi();
