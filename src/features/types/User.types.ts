export type UserRole = "Manager" | "Owner" | "Tenant";
export type UserStatus = "Active" | "Disabled";

export interface User {
	_id?: string;
	role?: UserRole;
	email: string;
	password: string;
	firstName?: string;
	lastName?: string;
	status?: UserStatus;
	refreshToken?: string;
	resetToken?: string;
	resetTokenExpiry?: Date;
	createdAt?: Date;
	updatedAt?: Date;
}

export const EmptyUser: User = {
	role: "Tenant",
	email: "",
	password: "",
	firstName: "",
	lastName: "",
	status: "Disabled",
};
