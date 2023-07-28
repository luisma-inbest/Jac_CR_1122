import { Lead, LeadActivityType } from "@/models";

type Action =
	| { type: "LeadId"; value: number }
	| { type: "UserId"; value: number }
	| { type: "AgencyId"; value: string }
	| { type: "ProductId"; value: string }
	| { type: "date"; value: string }
	| { type: "time"; value: string }
	| { type: "type"; value: string };

const initial: any = {
	LeadId: 0,
	UserId: 0,
	AgencyId: 0,
	ProductId: 0,
	date: new Date(Date.parse("2000-01-01T00:00:00")),
	time: "00:00:00",
	type: "",
};

function reducer(state: LeadActivityType, action: Action): any {
	switch (action.type) {
		case "LeadId":
			return { ...state, LeadId: action.value };
		case "UserId":
			return { ...state, UserId: action.value };
		case "ProductId":
			return { ...state, ProductId: action.value };
		case "AgencyId":
			return { ...state, AgencyId: action.value };
		case "date":
			return { ...state, date: action.value };
		case "time":
			return { ...state, time: action.value };
		case "type":
			return { ...state, type: action.value };
		default:
			return state;
	}
}

export { reducer, initial };
