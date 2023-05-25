import { Lead, LeadDataType } from "@/models";

type Action =
	| { type: "all"; value: any }
	| { type: "firstName"; value: string }
	| { type: "lastName"; value: string }
	| { type: "leadEmails"; value: string }
	| { type: "addEmail"; value: string }
	| { type: "editEmail"; value: { index: number; content: string } }
	| { type: "leadPhones"; value: string }
	| { type: "addPhone"; value: string }
	| { type: "editPhone"; value: { index: number; content: string } }
	| { type: "LeadOriginId"; value: number }
	| { type: "productId"; value: string }
	| { type: "colorId"; value: string }
	| { type: "AgencyId"; value: number }
	| { type: "buyType"; value: string }
	| { type: "units"; value: number };

let initial: LeadDataType = {
	id: -1,
	leadFirstName: "",
	leadLastName: "",
	leadName: "",
	leadEmails: [""],
	leadPhones: [""],
	leadPhase: {
		id: -1,
		description: "Fase 1",
		slug: "",
		createdAt: "",
		updatedAt: "",
	},
	buyType: "",
	LeadInterests: [],
	LeadActivities: [],
	LeadOrigin: "",
	rfc: "",
	UserId: -1,
	createdAt: new Date(),
	updatedAt: new Date(),
	Sales: [],
};

function reducer(state: LeadDataType, action: Action): LeadDataType {
	switch (action.type) {
		case "all":
			return { ...action.value };
		case "firstName":
			return { ...state, leadFirstName: action.value };
		case "lastName":
			return { ...state, leadLastName: action.value };
		case "addEmail":
			return {
				...state,
				leadEmails: [...state.leadEmails, action.value],
			};
		case "editEmail":
			let emails = state.leadEmails;
			emails[action.value.index] = {
				id: -1,
				email: action.value.content,
			};
			return {
				...state,
				leadEmails: emails,
			};

		case "addPhone":
			return {
				...state,
				leadPhones: [...state.leadPhones, action.value],
			};
		case "editPhone":
			let phones = state.leadPhones;
			phones[action.value.index] = {
				id: -1,
				phone: action.value.content,
			};
			return {
				...state,
				leadPhones: phones,
			};

		case "buyType":
			return {
				...state,
				buyType: action.value,
			};
		case "productId":
			let interest1 = state.LeadInterests;
			interest1[0].Product.id = action.value;
			return {
				...state,
				LeadInterests: interest1,
			};
		case "units":
			let interest2 = state.LeadInterests;
			interest2[0].quantity = action.value;
			return {
				...state,
				LeadInterests: interest2,
			};

		default:
			return state;
	}
}

export { reducer, initial };
