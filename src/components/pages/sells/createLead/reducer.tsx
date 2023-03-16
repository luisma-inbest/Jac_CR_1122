import { Lead } from "@/models";

type Action =
	| { type: "firstName"; value: string }
	| { type: "lastName"; value: string }
	| { type: "leadEmails"; value: string[] }
	| { type: "leadPhones"; value: string[] }
	| { type: "LeadOriginId"; value: number }
	| { type: "productId"; value: string }
	| { type: "AgencyId"; value: number }
	| { type: "buyType"; value: string }
	| { type: "units"; value: number };

const initial: Lead = {
	firstName: "",
	lastName: "",
	leadEmails: [],
	leadPhones: [],
	LeadOriginId: 0,
	productId: "",
	AgencyId: 0,
	buyType: "",
	units: 0,
};

function reducer(state: Lead, action: Action): Lead {
	switch (action.type) {
		case "firstName":
			return { ...state, firstName: action.value };
		case "lastName":
			return { ...state, lastName: action.value };
		case "leadEmails":
			return { ...state, leadEmails: action.value };
		case "leadPhones":
			return { ...state, leadPhones: action.value };
		case "LeadOriginId":
			return { ...state, LeadOriginId: action.value };
		case "productId":
			return { ...state, productId: action.value };
		case "AgencyId":
			return { ...state, AgencyId: action.value };
		case "buyType":
			return { ...state, buyType: action.value };
		case "units":
			return { ...state, units: action.value };
		default:
			return state;
	}
}

export { reducer, initial };
