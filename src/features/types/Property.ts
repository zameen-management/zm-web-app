export interface IProperty {
	_id?: string;
	address: {
		street: string;
		city: string;
		state: string;
		zip: string;
	};
	type: "Single-Family" | "Duplex" | "Multi-Family" | "Apartment";
	owners: string[];
	currentLease?: any;
	availability: "Available" | "Unavailable" | "Occupied";
	images: {
		key: string;
		name: string;
		description: string;
	}[];
	general: {
		beds: number;
		baths: number;
		sqft: number;
		rent: number;
		description: string;
	};
	createdAt?: Date;
	updatedAt?: Date;
}
