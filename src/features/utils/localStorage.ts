export const addLocalData = (key: string, value: string) => {
	localStorage.setItem(key, value);
};

export const getLocalData = (key: string) => {
	return localStorage.getItem(key);
};

export const removeLocalData = (key: string) => {
	localStorage.removeItem(key);
};
