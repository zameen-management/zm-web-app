import { Image } from "./Image.types";
import { Unit } from "./Unit.types";
import { User } from "./User.types";

export interface PropertyAddress {
	street: string;
	city: string;
	state: string;
	zip: string;
}

export interface Property {
	_id: string;
	address: PropertyAddress;
	hasMultipleUnits: boolean;
	units: string[] | Unit[];
	owners: string[] | User[];
	images: Image[];
	description: string;
	status: "Available" | "Unavailable" | "Occupied";
	isArchived: boolean;
	createdAt?: Date;
	updatedAt?: Date;
}

export const EmptyProperty: Partial<Property> = {
	address: {
		street: "",
		city: "",
		state: "",
		zip: "",
	},
	hasMultipleUnits: false,
	units: [],
	owners: [],
	images: [],
	description: "",
	status: "Available",
	isArchived: false,
};
