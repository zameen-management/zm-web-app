import { Image } from "./Image.types";

export interface Unit {
	_id?: string;
	number?: string;
	beds: number;
	baths: number;
	sqft: number;
	rent: number;
	securityDeposit: number;
	petPolicy: string;
	leaseTerms: string;
	leases: string[];
	images: Image[];
}

export const EmptyUnit: Unit = {
	number: "",
	beds: 0,
	baths: 0,
	sqft: 0,
	rent: 0,
	securityDeposit: 0,
	petPolicy: "",
	leaseTerms: "",
	leases: [],
	images: [],
};
