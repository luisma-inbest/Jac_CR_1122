import { api, API_ROUTE } from "./axiosConfig";
import { Agency } from "@/models";

export const AgencyAPI = {
	create: async function (agency: Agency) {
		console.log("create agency", agency);
		try {
			const response = await api.request({
				url: `/agency/`,
				method: "POST",
				data: { data: agency },
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
		return api
			.request({
				url: `/agency/`,
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
	getAgencies: async function (page: number) {
		console.log("get agencies");
		return api
			.request({
				url: `/agency/?page=${page}&limit=10`,
				method: "GET",
			})
			.then((response) => {
				return response.data;
			})
			.catch((error: any) => {
				console.log("Hubo un error");
				if (error.response) {
					console.log(error.response.data);
				}
				throw new Error(error);
			});
	},
	getAgency: async function (id: string) {
		return api
			.request({
				url: `/agency/${id}`,
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
	update: async function (agency: Agency) {
		// console.log("update agency", agency);
		try {
			const response = await api.request({
				url: `/agency/${agency.id}`,
				method: "PUT",
				data: { data: agency },
			});
			console.log(response);
			return response.data.data;
		} catch (error: any) {
			console.log("Hubo un error");
			if (error.response) {
				console.log(error.response.data);
				throw new Error(error.response.data.message);
			}
		}
	},
};
