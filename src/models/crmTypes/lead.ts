export interface Lead {
	id?: string;
	firstName: string;
	lastName: string;
	leadEmails: string[];
	leadPhones: string[];
	LeadOriginId: number;
	productId: string;
	leadPhaseId?: string;
	AgencyId: number;
	UserId?: number;
	buyType: string;
	units: number;
}

type LeadPhaseType = {
	createdAt: string;
	description: string;
	id: number;
	slug: string;
	updatedAt: string;
};

export type LeadDataType = {
	id: number;
	leadName: string;
	leadPhones: string[];
	leadEmails: string[];
	leadPhase: LeadPhaseType;
	LeadInterests: string[];
	LeadOrigin: string;
	createdAt: Date;
};

export type LeadActivityType = {
	date: Date;
	comments: string;
	status: string;
	leadActivityType: string;
	LeadId: number;
};
