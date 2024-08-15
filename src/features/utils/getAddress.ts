interface Address {
	street: string;
	city: string;
	state: string;
	zip: string;
}

export const getAddress = (address: Address): string => {
	if (!address) return "";
	return `${address?.street}, ${address?.city}, ${address?.state} ${address?.zip}`;
};
