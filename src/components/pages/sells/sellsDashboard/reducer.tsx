import { Lead } from "@/models";

type Action =
	| { type: "startDate"; value: string }
	| { type: "endDate"; value: string }
	| { type: "UserId"; value: string }
	| { type: "RequestantId"; value: string }
	| { type: "refresh"; value: boolean };

const initial: any = {
	startDate: "",
	endDate: "",
	UserId: "",
	RequestantId: "",
	refresh: false,
};

function reducer(state: any, action: Action): any {
	switch (action.type) {
		case "startDate":
			console.log(typeof action.value);
			return { ...state, startDate: action.value };
		case "endDate":
			console.log(action.value);
			return { ...state, endDate: action.value };
		case "UserId":
			return { ...state, UserId: action.value };
		case "RequestantId":
			return { ...state, RequestantId: action.value };
		case "refresh":
			return { ...state, refresh: action.value };

		default:
			return state;
	}
}

export { reducer, initial };
