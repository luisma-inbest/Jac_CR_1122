import { Lead, LeadActivityType, Sale } from "@/models";

type Action =
	| { type: "all"; value: any }
	| { type: "id"; value: number }
	| { type: "vin"; value: { index: string; value: string } }
	| { type: "condition"; value: string }
	| { type: "paymentMethod"; value: string }
	| { type: "bank"; value: string }
	| { type: "insuranceCarrier"; value: string }
	| { type: "exangeCar"; value: boolean };

const initial: Sale = {
	id: -1,
	vins: [],
	condition: "",
	paymentMethod: "0",
	bank: "0",
	insuranceCarrier: "0",
	takeCarInExange: false,
};

function reducer(state: Sale, action: Action): Sale {
	switch (action.type) {
		case "all":
			return { ...action.value };
		case "id":
			return { ...state, id: action.value };
		case "condition":
			return { ...state, condition: action.value };
		case "paymentMethod":
			return { ...state, paymentMethod: action.value };
		case "bank":
			return { ...state, bank: action.value };
		case "insuranceCarrier":
			return { ...state, insuranceCarrier: action.value };
		case "exangeCar":
			return { ...state, takeCarInExange: action.value };

		case "vin":
			let vins = [...state.vins];
			vins[parseInt(action.value.index)] = action.value.value;
			return { ...state, vins: vins };

		default:
			return state;
	}
}

export { reducer, initial };
