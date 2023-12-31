import { Lead } from "@/models";

type Action =
	| { type: "firstName"; value: string }
	| { type: "lastName"; value: string }
	| { type: "leadEmails"; value: string }
	| { type: "leadPhones"; value: string }
	| { type: "LeadOriginId"; value: number }
	| { type: "productId"; value: string }
	| { type: "colorId"; value: string }
	| { type: "AgencyId"; value: number }
	| { type: "buyType"; value: string }
	| { type: "units"; value: number };

const initial: Lead = {
	firstName: "",
	lastName: "",
	leadEmails: [""],
	leadPhones: [""],
	LeadOriginId: 0,
	productId: "",
	colorId: "",
	AgencyId: 0,
	buyType: "",
	leadInterests: [
		{
			date: Date(),
			comments: "",
			ProductId: 0,
			ProductColorId: 0,
			quantity: 0,
		},
	],
};

function reducer(state: Lead, action: Action): Lead {
	switch (action.type) {
		case "firstName":
			return { ...state, firstName: action.value };
		case "lastName":
			return { ...state, lastName: action.value };
		case "leadEmails":
			return { ...state, leadEmails: [action.value] };
		case "leadPhones":
			return { ...state, leadPhones: [action.value] };
		case "LeadOriginId":
			return { ...state, LeadOriginId: action.value };
		case "AgencyId":
			return { ...state, AgencyId: action.value };

		case "buyType":
			return { ...state, buyType: action.value };
		case "productId":
			return {
				...state,
				leadInterests: [
					{ ...state.leadInterests[0], ProductId: action.value },
				],
			};
		case "colorId":
			return {
				...state,
				leadInterests: [
					{ ...state.leadInterests[0], ProductColorId: action.value },
				],
			};

		case "units":
			return {
				...state,
				leadInterests: [
					{ ...state.leadInterests[0], quantity: action.value },
				],
			};
		default:
			return state;
	}
}

export { reducer, initial };
