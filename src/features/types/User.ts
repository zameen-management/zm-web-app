export type IUser = {
	firstName?: string;
	lastName?: string;
	email: string;
	password?: string;
	role: "Manager" | "Owner" | "Tenant";
	status: "Active" | "Disabled";
	refreshToken?: string;
	resetToken?: string;
	resetTokenExpiry?: Date;
	createdAt?: Date;
	updatedAt?: Date;
};
