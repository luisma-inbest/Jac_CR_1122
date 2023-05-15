export interface Agency {
	name: string;
	businessName: string;

	logo?: string;
	logoDark?: string;
	urlSite?: string;

	url360View?: string;
	urlGoogleMaps?: string;

	service: boolean;

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
	manager?: string;
	phone?: string;
	email?: string;

	active: boolean;
	agencySocialMedia: any;

	assignmentType: string;
}
