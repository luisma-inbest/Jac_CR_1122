import { api, API_ROUTE } from "./axiosConfig";
import { Lead, LeadDataType } from "@/models";
import { LeadActivityType } from "@/models";

export const NotificationAPI = {
	addToken: async function (leadId: number, token: string) {
		return api
			.request({
				url: `/user/NotificationToken/${leadId}}`,
				method: "POST",
				data: {
					data: {
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
