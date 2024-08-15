import { BACKEND_URL } from "../../constants";

export const getImageUrl = (key: string): string => {
	return `${BACKEND_URL}/assets/${key}/redirect`;
};
