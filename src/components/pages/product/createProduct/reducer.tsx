import { Product } from "@/models";

type Action =
	| { type: "name"; value: string }
	| { type: "model"; value: string }
	| { type: "productVersions"; value: string[] }
	| { type: "price"; value: number }
	| { type: "productColors"; value: number[] }
	| { type: "ProductCollectionId"; value: number }
	| { type: "showRoom360Url"; value: string }
	| { type: "imageBase64"; value: string }
	| { type: "onePagerBase64"; value: string }
	| { type: "imageBase64"; value: string }
	| { type: "dataSheetBase64"; value: string };

const initial: Product = {
	name: "",
	model: "",
	productVersions: [],
	price: 0,
	productColors: [],
	ProductCollectionId: 0,
	showRoom360Url: "",
	imageBase64: "",
	onePagerBase64: "",
	dataSheetBase64: "",
	active: true,
};

function reducer(state: Product, action: Action): Product {
	switch (action.type) {
		case "name":
			return { ...state, name: action.value };
		case "model":
			return { ...state, model: action.value };
		case "productVersions":
			return { ...state, productVersions: action.value };
		case "price":
			return { ...state, price: action.value };
		case "productColors":
			return { ...state, productColors: action.value };
		case "ProductCollectionId":
			return { ...state, ProductCollectionId: action.value };
		case "showRoom360Url":
			return { ...state, showRoom360Url: action.value };
		case "imageBase64":
			return { ...state, imageBase64: action.value };
		case "onePagerBase64":
			return { ...state, onePagerBase64: action.value };
		case "dataSheetBase64":
			return { ...state, dataSheetBase64: action.value };
		default:
			return state;
	}
}

export { reducer, initial };
