import { formatDate } from "../utils/formatDate";

interface Landlord {
	name: string;
	phoneNumber: string;
}

interface Residence {
	location: string;
	landlord: Landlord;
	rent: number;
	dates: string;
}

interface Employer {
	company: string;
	role: string;
	monthlyIncome: number;
	dates: string;
}

interface AdditionalIncome {
	description: string;
	monthlyIncome: number;
}

interface GeneralQuestions {
	doesSmoke: string;
	convictedFelon: string;
	bankruptcy: string;
	evicted: string;
}

interface Reference {
	name: string;
	relation: string;
	phoneNumber: string;
}

interface Signature {
	name: string;
	date: string;
}

export interface ApplicationHistory {
	_id?: string;
	message: string;
	createdAt?: string;
}

export interface IApplication {
	_id?: string;
	status: "In-Review" | "Approved" | "Rejected";
	isComplete: boolean;
	isPaid: boolean;
	currentPage: number;
	token: string;
	property: string;
	revisions: string;
	history: ApplicationHistory[];

	// data
	type: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
	ssn: string;
	dob: string;
	dl: string;
	currentResidence: Residence;
	otherResidence: Residence;
	currentEmployer: Employer;
	previousEmployer: Employer;
	additionalIncome: AdditionalIncome;
	totalGrossIncome: number;
	proofOfIncome: string[];
	generalQuestions: GeneralQuestions;
	primaryReference: Reference;
	secondaryReference: Reference;
	pets: string;
	cosigning: string;
	coapplicants: string;
	dependents: string;
	signature: Signature;
	createdAt?: Date;
	updatedAt?: Date;
}

export const APPLICATION_MODEL: IApplication = {
	status: "In-Review",
	isComplete: false,
	isPaid: false,
	currentPage: 0,
	token: "",
	property: "",
	revisions: "",
	history: [],

	// data
	type: "",
	firstName: "",
	lastName: "",
	phoneNumber: "",
	email: "",
	ssn: "",
	dob: "",
	dl: "",
	currentResidence: {
		location: "",
		landlord: {
			name: "",
			phoneNumber: "",
		},
		rent: 0,
		dates: "",
	},
	otherResidence: {
		location: "",
		landlord: {
			name: "",
			phoneNumber: "",
		},
		rent: 0,
		dates: "",
	},
	currentEmployer: {
		company: "",
		role: "",
		monthlyIncome: 0,
		dates: "",
	},
	previousEmployer: {
		company: "",
		role: "",
		monthlyIncome: 0,
		dates: "",
	},
	additionalIncome: {
		description: "",
		monthlyIncome: 0,
	},
	totalGrossIncome: 0,
	proofOfIncome: [],
	generalQuestions: {
		doesSmoke: "",
		convictedFelon: "",
		bankruptcy: "",
		evicted: "",
	},
	primaryReference: {
		name: "",
		relation: "",
		phoneNumber: "",
	},
	secondaryReference: {
		name: "",
		relation: "",
		phoneNumber: "",
	},
	pets: "",
	cosigning: "",
	coapplicants: "",
	dependents: "",
	signature: {
		name: "",
		date: formatDate(new Date()),
	},
};
