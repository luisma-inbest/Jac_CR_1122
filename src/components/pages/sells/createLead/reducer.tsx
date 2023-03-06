import { Lead } from "@/models";

type Action =
	| { type: "firstName"; value: string }
	| { type: "lastName"; value: string }
	| { type: "emails"; value: string[] }
	| { type: "phones"; value: string[] }
	| { type: "LeadOriginId"; value: number }
	| { type: "productId"; value: string }
	| { type: "agencyId"; value: string }
	| { type: "buyType"; value: string }
	| { type: "units"; value: number };

const initial: Lead = {
	firstName: "",
	lastName: "",
	emails: [],
	phones: [],
	LeadOriginId: 0,
	productId: "",
	agencyId: "",
	buyType: "",
	units: 0,
	UserId: 26,
};

function reducer(state: Lead, action: Action): Lead {
	switch (action.type) {
		case "firstName":
			return { ...state, firstName: action.value };
		case "lastName":
			return { ...state, lastName: action.value };
		case "emails":
			return { ...state, emails: action.value };
		case "phones":
			return { ...state, phones: action.value };
		case "LeadOriginId":
			return { ...state, LeadOriginId: action.value };
		case "productId":
			return { ...state, productId: action.value };
		case "agencyId":
			return { ...state, agencyId: action.value };
		case "buyType":
			return { ...state, buyType: action.value };
		case "units":
			return { ...state, units: action.value };
		default:
			return state;
	}
}

export { reducer, initial };
