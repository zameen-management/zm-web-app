import axios from "./axios";

class AssetApi {
	private endpoint = "/assets";
	private api = axios;

	private generateUrl = async (): Promise<{ url: string; key: string }> => {
		const response = await this.api.get(`${this.endpoint}/url`);
		return response.data;
	};

	upload = async (file: File): Promise<string> => {
		const { url, key } = await this.generateUrl();
		await axios.put(url, file, {
			headers: {
				"Content-Type": file.type,
			},
		});
		return key;
	};

	delete = async (key: string): Promise<boolean> => {
		const response = await this.api.delete(`${this.endpoint}/${key}`);
		return response.data;
	};
}

export default new AssetApi();
