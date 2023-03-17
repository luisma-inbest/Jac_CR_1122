import { Lead, LeadActivityType } from "@/models";

type Action =
	| { type: "typeActivity"; value: string }
	| { type: "commentsActivity"; value: string }
	| { type: "status"; value: string }
	| { type: "date"; value: Date }
	| { type: "LeadId"; value: number };

const initial: LeadActivityType = {
	LeadId: 0,
	leadActivityType: "",
	comments: "",
	status: "1",
	date: new Date(Date.parse("2000-01-01T00:00:00")),
};

function reducer(state: LeadActivityType, action: Action): LeadActivityType {
	switch (action.type) {
		case "typeActivity":
			return { ...state, leadActivityType: action.value };
		case "commentsActivity":
			return { ...state, comments: action.value };
		case "status":
			return { ...state, status: action.value };
		case "date":
			return { ...state, date: action.value };
		case "LeadId":
			return { ...state, LeadId: action.value };

		default:
			return state;
	}
}

export { reducer, initial };
