export type Sale = {
	id: number;
	leadId: number;
	vins: string[];
	condition: string;
	payment: string;
	bank: string;
	insuranceCarrier: string;
	takeCarInExange: boolean;
	businessName: string;
	taxRegime: string;
	saleType: string;
	digitalSale: boolean;
};
