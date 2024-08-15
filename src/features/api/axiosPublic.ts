import axios from "axios";
import { BACKEND_URL, PUBLIC_API_TOKEN } from "../../constants";
import { store } from "../app/store";
import { getAccessToken, setAccessToken } from "../app/authSlice";

const axiosPublic = axios.create({
	baseURL: BACKEND_URL,
	withCredentials: true,
});

axiosPublic.interceptors.request.use(
	async (config) => {
		const state = store.getState();
		let { accessToken } = getAccessToken(state);

		if (!accessToken) {
			const response = await axios.post(
				`${BACKEND_URL}/auth/public-login`,
				{
					token: PUBLIC_API_TOKEN,
				}
			);

			accessToken = response.data.accessToken;
			store.dispatch(setAccessToken(accessToken));
		}

		if (config.headers) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default axiosPublic;
