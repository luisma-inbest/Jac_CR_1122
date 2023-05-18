import { Agency } from "@/models";

type Action =
	| { type: "all"; value: any }
	| { type: "id"; value: string }
	| { type: "name"; value: string }
	| { type: "businessName"; value: string }
	| { type: "picLogo"; value: string }
	| { type: "picLogoDark"; value: string }
	| { type: "urlSite"; value: string }
	| { type: "url360View"; value: string }
	| { type: "urlGoogleMaps"; value: string }
	| { type: "AgencySocialMedia"; value: string }
	| { type: "street"; value: string }
	| { type: "exteriorNumber"; value: string }
	| { type: "interiorNumber"; value: string }
	| { type: "state"; value: string }
	| { type: "transferCode"; value: string }
	| { type: "city"; value: string }
	| { type: "suburb"; value: string }
	| { type: "postalCode"; value: string }
	| { type: "municipality"; value: string }
	| { type: "deputation"; value: string }
	| { type: "sicop"; value: string }
	| { type: "hasService"; value: boolean }
	| { type: "active"; value: boolean }
	| { type: "AgencyIncomingLeadRuleId"; value: string }
	| { type: "LeadOwnerId"; value: string }
	//TODO: Checar
	| { type: "Checar"; value: any }
	| { type: "Manager"; value: any }
	| { type: "Users"; value: any[] };

const initial: Agency = {
	id: "",
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

	Manager: [],
	Users: [],
};

function reducer(state: Agency, action: Action): Agency {
	switch (action.type) {
		case "all":
			return action.value;
		case "id":
			return { ...state, id: action.value };
		case "name":
			return { ...state, name: action.value };
		case "businessName":
			return { ...state, businessName: action.value };
		case "picLogo":
			return { ...state, picLogo: action.value };
		case "picLogoDark":
			return { ...state, picLogoDark: action.value };
		case "urlSite":
			return { ...state, urlSite: action.value };
		case "url360View":
			return { ...state, url360View: action.value };
		case "urlGoogleMaps":
			return { ...state, urlGoogleMaps: action.value };
		case "AgencySocialMedia":
			return { ...state, AgencySocialMedia: action.value };
		case "street":
			return { ...state, street: action.value };
		case "exteriorNumber":
			return { ...state, exteriorNumber: action.value };
		case "interiorNumber":
			return { ...state, interiorNumber: action.value };
		case "state":
			return { ...state, state: action.value };
		case "transferCode":
			return { ...state, transferCode: action.value };
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
		case "sicop":
			return { ...state, sicop: action.value };
		case "hasService":
			return { ...state, hasService: action.value };
		case "active":
			return { ...state, active: action.value };
		case "AgencyIncomingLeadRuleId":
			return { ...state, AgencyIncomingLeadRuleId: action.value };
		case "LeadOwnerId":
			return { ...state, LeadOwnerId: action.value };
		case "Users":
			return { ...state, Users: action.value };

		default:
			return state;
	}
}

export { reducer, initial };
