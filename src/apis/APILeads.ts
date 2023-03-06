import { api, API_ROUTE } from "./axiosConfig";
import { Lead } from "@/models";

export const LeadAPI = {
	create: async function (lead: Lead) {
		console.log("create Lead", lead);
		try {
			const response = await api.request({
				url: `/lead/`,
				method: "POST",
				data: { data: lead },
			});
			console.log(response);
		} catch (error: any) {
			console.log("Hubo un error");
			if (error.response) {
				console.log(error.response.data);
			}
		}
	},
	getAll: async function () {
		console.log("get leads by agencie");
		try {
			const response = await api.request({
				url: `/lead/`,
				method: "GET",
			});
			//el primer data es para acceder a la respuesta y en el segundo ya esta el arreglo
			return response.data.data;
		} catch (error: any) {
			console.log("Hubo un error");
			if (error.response) {
				console.log(error.response.data);
			}
		}
	},
};
