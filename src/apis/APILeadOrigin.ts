import { api, API_ROUTE } from "./axiosConfig";
import { Lead } from "@/models";

export const LeadOriginAPI = {
	createOrigin: async function (lead: Lead) {
		console.log("create Lead", lead);
		try {
			const response = await api.request({
				url: `/leadOrigin/`,
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
	getOrigins: async function () {
		return api
			.request({
				url: `/leadOrigin`,
				method: "GET",
			})
			.then((response) => {
				return response.data.data;
			})
			.catch((error: any) => {
				console.log("Hubo un error");
				if (error.response) {
					console.log(error.response.data);
				}
				throw new Error(error);
			});
	},
};
