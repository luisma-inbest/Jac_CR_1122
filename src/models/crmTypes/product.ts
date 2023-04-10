export interface Product {
	name: string;
	model: string;
	productVersions: string[];
	price: number;
	productColors: number[];
	ProductCollectionId: number;
	showRoom360Url: string;
	imageBase64: string;
	onePagerBase64: string;
	dataSheetBase64: string;

	active: boolean;
}
