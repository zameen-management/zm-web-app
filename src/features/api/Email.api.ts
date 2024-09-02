import { Email } from "../types/Email.types";
import axios from "./axios";

class EmailApi {
	private api = axios;
	private endpoint = "/email";

	send = async (body: Email): Promise<void> => {
		await this.api.post(`${this.endpoint}`, body);
	};
}

export default new EmailApi();
