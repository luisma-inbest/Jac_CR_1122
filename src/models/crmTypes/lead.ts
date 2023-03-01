export interface Lead {
	id?: string;
	firstName: string;
	lastName: string;
	emails: string[];
	phones: string[];
	origin: string;
	productId: string;
	agencyId: string;
	buyType: string;
	units: number;
}
