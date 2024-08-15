import axios from "axios";
import { BACKEND_URL } from "../../constants";

export default axios.create({
	baseURL: BACKEND_URL,
	headers: { "Content-Type": "application/json" },
	withCredentials: true,
});
