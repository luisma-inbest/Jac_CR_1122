import { api, API_ROUTE } from "./axiosConfig";
import { AgendaEvent } from "@/models";

export const AgendaAPI = {
	create: async function (event: AgendaEvent) {
		return api
			.request({
				url: `/userReminder/`,
				method: "POST",
				data: { data: event },
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
	getAll: async function (userId: string, range: string, date: string) {
		return api
			.request({
				url: `/userReminder/${userId}?range=${range}&date=${date}`,
				method: "GET",
			})
			.then((response) => {
				//el primer data es para acceder a la respuesta y en el segundo ya esta el arreglo
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
