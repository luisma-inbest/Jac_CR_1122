import { Lead, LeadActivityType, Sale } from "@/models";

type Action =
	| { type: "all"; value: any }
	| { type: "id"; value: number }
	| { type: "vin"; value: { index: string; value: string } }
	| { type: "condition"; value: string }
	| { type: "payment"; value: string }
	| { type: "bank"; value: string }
	| { type: "insuranceCarrier"; value: string }
	| { type: "exangeCar"; value: boolean }
	| { type: "taxRegime"; value: string }
	| { type: "saleType"; value: string }
	| { type: "businessName"; value: string }
	| { type: "digitalSale"; value: boolean };

const initial: Sale = {
	id: -1,
	leadId: -1,
	vins: [],
	condition: "",
	payment: "0",
	bank: "0",
	taxRegime: "",
	businessName: "",
	saleType: "",
	insuranceCarrier: "0",
	takeCarInExange: false,
	digitalSale: false,
};

function reducer(state: Sale, action: Action): Sale {
	switch (action.type) {
		case "all":
			return { ...action.value };
		case "id":
			return { ...state, id: action.value };
		case "condition":
			return { ...state, condition: action.value };
		case "payment":
			return { ...state, payment: action.value };
		case "bank":
			return { ...state, bank: action.value };
		case "insuranceCarrier":
			return { ...state, insuranceCarrier: action.value };
		case "exangeCar":
			return { ...state, takeCarInExange: action.value };
		case "taxRegime":
			return { ...state, taxRegime: action.value };
		case "businessName":
			return { ...state, businessName: action.value };

		case "vin":
			let vins = [...state.vins];
			vins[parseInt(action.value.index)].VIN = action.value.value;
			return { ...state, vins: vins };

		default:
			return state;
	}
}

export { reducer, initial };
