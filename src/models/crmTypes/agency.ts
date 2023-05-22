export interface Agency {
	id?: string;
	name: string;
	businessName: string;

	picLogo?: string;
	picLogoDark?: string;
	urlSite?: string;

	url360View?: string;
	urlGoogleMaps?: string;

	hasService: boolean;

	street: string;
	exteriorNumber: string;
	interiorNumber?: string;
	state: string;
	transferCode: string;
	city: string;
	suburb: string;
	postalCode: string;
	municipality: string;
	deputation: string;
	sicop: string;

	active: boolean;
	AgencySocialMedia: any;

	AgencyIncomingLeadRuleId: string;
	LeadOwnerId: string;

	Manager?: any[];
	Users?: any[];
}
