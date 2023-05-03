export interface Lead {
	id?: string;
	firstName: string;
	lastName: string;
	leadEmails: string[];
	leadPhones: string[];
	LeadOriginId: number;
	productId: string;
	colorId: string;
	leadPhaseId?: string;
	AgencyId: number;
	UserId?: number;
	buyType: string;
	units: number;
	leadInterests: any;
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
	leadPhones: any[];
	leadEmails: any[];
	leadPhase: LeadPhaseType;
	LeadInterests: any[];
	LeadActivities: any[];
	LeadOrigin: any;
	createdAt: Date;
	updatedAt: Date;
	UserId: number;
	rfc?: string;
};

export type LeadActivityType = {
	date: Date;
	title: string;
	comments: string;
	status: string;
	leadActivityType: string;
	LeadId: number;
};
