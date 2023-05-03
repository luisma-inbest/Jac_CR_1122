import { Lead, LeadDataType } from "@/models";

type Action =
	| { type: "all"; value: any }
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

let initial: LeadDataType = {
	id: -1,
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
	LeadInterests: [],
	LeadActivities: [],
	LeadOrigin: "",
	rfc: "",
	UserId: -1,
	createdAt: new Date(),
	updatedAt: new Date(),
};

function reducer(state: LeadDataType, action: Action): LeadDataType {
	switch (action.type) {
		case "all":
			return { ...action.value };
		default:
			return state;
	}
}

export { reducer, initial };
