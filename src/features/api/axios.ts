import axios from "axios";
import { API_KEY, BACKEND_URL } from "../../constants";

export default axios.create({
	baseURL: BACKEND_URL,
	withCredentials: true,
	headers: {
		"x-api-key": API_KEY,
	},
});
