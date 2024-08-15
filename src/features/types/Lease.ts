export interface ILease {
	_id?: string;
	property: string;
	startDate: Date;
	endDate: Date;
	contract?: string;
	tenants?: string[];
	rent?: number;
	rentDate?: number;
	status?: "Inactive" | "Active";
	createdAt?: Date;
	updatedAt?: Date;
}
