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
	getAll: async function (type: string, agency: string) {
		try {
			const response = await api.request({
				url: `/lead/?AgencyId=${agency}&phase=${type}&page=1&limit=10`,
				//url: `/lead/?AgencyId=14&phase=en-cierre&page=1&limit=10`,
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
	getLead: async function (leadId: string) {
		try {
			const response = await api.request({
				url: `/lead/${leadId}`,
				//url: `/lead/?AgencyId=14&phase=en-cierre&page=1&limit=10`,
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
