import {api, API_ROUTE} from "./axiosConfig";
import {Agency} from "@/models";

export const AgencyAPI = {
	create: async function (agency: Agency) {
		console.log("create agency", agency);
		try {
			const response = await api.request({
				url: `/agency/`,
				method: "POST",
				data: {data: agency},
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
		console.log("get agencies");
		try {
			const response = await api.request({
				url: `/agency/`,
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
