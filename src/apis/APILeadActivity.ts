import { api, API_ROUTE } from "./axiosConfig";
import { Lead } from "@/models";

export const LeadActivityAPI = {
	getActivities: async function () {
		return api
			.request({
				url: `/leadactivitytype`,
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
