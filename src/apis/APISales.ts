import { api, API_ROUTE } from "./axiosConfig";
import { Lead, LeadActivityType, Sale } from "@/models";

export const SaleAPI = {
	update: async function (sale: Sale) {
		return api
			.request({
				url: `/sale/${sale.id}`,
				method: "PUT",
				data: { data: sale },
			})
			.then((response) => {
				return response.data.data;
			})
			.catch((error: any) => {
				if (error.response) {
					console.log(error.response.data);
				}
				throw new Error(error);
			});
	},
};
