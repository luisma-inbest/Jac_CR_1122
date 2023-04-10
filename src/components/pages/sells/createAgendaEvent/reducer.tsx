import { AgendaEvent } from "@/models";

type Action =
	| { type: "title"; value: string }
	| { type: "comments"; value: string }
	| { type: "leadId"; value: string }
	| { type: "dateFormatted"; value: string }
	| { type: "time"; value: string }
	| { type: "date"; value: string }
	| { type: "UserId"; value: string };

const initial: AgendaEvent = {
	title: "",
	comments: "",
	date: new Date(),
	dateFormatted: new Date().toString(),
	time: new Date().getTime().toString(),
	UserId: "",
	leadId: "",
};

function reducer(state: AgendaEvent, action: Action): AgendaEvent {
	switch (action.type) {
		case "title":
			return { ...state, title: action.value };
		case "comments":
			return { ...state, comments: action.value };
		case "leadId":
			return { ...state, leadId: action.value };
		case "dateFormatted":
			return { ...state, dateFormatted: action.value };
		case "time":
			return { ...state, time: action.value };
		case "UserId":
			return { ...state, UserId: action.value };
		default:
			return state;
	}
}

export { reducer, initial };
