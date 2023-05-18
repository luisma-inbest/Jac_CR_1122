import { Agency } from "@/models";

type Action =
	| { type: "name"; value: string }
	| { type: "businessName"; value: string }
	| { type: "logo"; value: string }
	| { type: "logoDark"; value: string }
	| { type: "urlSite"; value: string }
	| { type: "street"; value: string }
	| { type: "exteriorNumber"; value: string }
	| { type: "interiorNumber"; value: string }
	| { type: "transferCode"; value: string }
	| { type: "state"; value: string }
	| { type: "city"; value: string }
	| { type: "suburb"; value: string }
	| { type: "postalCode"; value: string }
	| { type: "municipality"; value: string }
	| { type: "deputation"; value: string }
	| { type: "service"; value: boolean }
	| { type: "active"; value: boolean }
	| { type: "agencySocialMedia"; value: any };

const initial: Agency = {
	name: "",
	businessName: "",

	picLogo: "",
	picLogoDark: "",
	urlSite: "",
	url360View: "",
	urlGoogleMaps: "",
	AgencySocialMedia: "",

	street: "",
	exteriorNumber: "",
	interiorNumber: "",
	state: "",
	transferCode: "",
	city: "",
	suburb: "",
	postalCode: "",
	municipality: "",
	deputation: "",
	sicop: "",

	hasService: false,
	active: true,

	AgencyIncomingLeadRuleId: "",
	LeadOwnerId: "",
};

function reducer(state: Agency, action: Action): Agency {
	switch (action.type) {
		case "name":
			return { ...state, name: action.value };
		case "businessName":
			return { ...state, businessName: action.value };
		case "logo":
			return { ...state, picLogo: action.value };
		case "logoDark":
			return { ...state, picLogoDark: action.value };
		case "urlSite":
			return { ...state, urlSite: action.value };
		case "service":
			return { ...state, hasService: action.value };
		case "street":
			return { ...state, street: action.value };
		case "exteriorNumber":
			return { ...state, exteriorNumber: action.value };
		case "interiorNumber":
			return { ...state, interiorNumber: action.value };
		case "transferCode":
			return { ...state, transferCode: action.value };
		case "state":
			return { ...state, state: action.value };
		case "city":
			return { ...state, city: action.value };
		case "suburb":
			return { ...state, suburb: action.value };
		case "postalCode":
			return { ...state, postalCode: action.value };
		case "municipality":
			return { ...state, municipality: action.value };
		case "deputation":
			return { ...state, deputation: action.value };
		case "agencySocialMedia":
			return { ...state, AgencySocialMedia: action.value };
		default:
			return state;
	}
}

export { reducer, initial };
