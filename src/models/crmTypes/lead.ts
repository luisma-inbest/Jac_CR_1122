export interface Lead {
	id?: string;
	firstName: string;
	lastName: string;
	emails: string[];
	phones: string[];
	LeadOriginId: number;
	productId: string;
	leadPhaseId?: string;
	agencyId: string;
	UserId?: number;
	buyType: string;
	units: number;
}
