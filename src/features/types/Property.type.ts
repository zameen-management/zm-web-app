import { Unit } from "./Unit.type";

export type PropertyAddress = {
	street: string;
	city: string;
	state: string;
	zip: string;
};

export interface Property {
	address: PropertyAddress;
	type: "Single Family" | "Multi Family" | "Apartment" | "Commercial";
	owner: string;
	units: string[] | Unit[];
	feePercentage: number;
}
