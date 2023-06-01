import { Lead } from "@/models";

type Action =
	| { type: "refresh"; value: boolean }
	| { type: "search"; value: string }
	| { type: "AgencyId"; value: string }
	| { type: "UserId"; value: string }
	| { type: "ProductId"; value: string }
	| { type: "currentProduct"; value: string };

const initial: any = {
	search: "",
	AgencyId: "",
	UserId: "",
	ProductId: "",
	currentProduct: "",
	refresh: false,
};

function reducer(state: any, action: Action): any {
	switch (action.type) {
		case "refresh":
			console.log("refresh", state.refresh, action.value);
			return { ...state, refresh: action.value };
		case "search":
			return { ...state, search: action.value };
		case "AgencyId":
			return { ...state, AgencyId: action.value };
		case "UserId":
			console.log("UserId", state.UserId, action.value);
			return { ...state, UserId: action.value };
		case "ProductId":
			return { ...state, ProductId: action.value };
		case "currentProduct":
			return { ...state, currentProduct: action.value };

		default:
			return state;
	}
}

export { reducer, initial };
