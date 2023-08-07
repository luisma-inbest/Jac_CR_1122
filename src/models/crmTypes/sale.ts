export type Sale = {
	id: number;
	leadId: number;
	vins: any[];
	condition: string;
	payment: string;
	bank: string;
	insuranceCarrier: string;
	takeCarInExange: boolean;
	businessName: string;
	taxRegime: string;
	saleType: string;
	digitalSale: boolean;
	invoiceNumber: string;
};
