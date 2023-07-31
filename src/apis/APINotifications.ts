import { api, API_ROUTE } from "./axiosConfig";
import { Lead, LeadDataType } from "@/models";
import { LeadActivityType } from "@/models";

export const LeadAPI = {
	create: async function (leadId: number, token: string) {
		return api
			.request({
				url: `/lead/notification/`,
				method: "POST",
				data: {
					data: {
						lead_id: leadId,
						token: token,
					},
				},
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
