import { api, API_ROUTE } from "./axiosConfig";
import { Lead } from "@/models";
import { LeadActivityType } from "@/models";

export const LeadAPI = {
	create: async function (lead: Lead) {
		return api
			.request({
				url: `/lead/`,
				method: "POST",
				data: { data: lead },
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
	getAll: async function (type: string, agency: string, page: number) {
		return api
			.request({
				url: `/lead/?AgencyId=${agency}&phase=${type}&page=${page}&limit=3`,
				//url: `/lead/?AgencyId=14&phase=en-cierre&page=1&limit=10`,
				method: "GET",
			})
			.then((response) => {
				//el primer data es para acceder a la respuesta y en el segundo ya esta el arreglo
				// console.log(response.data);
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
	getLead: async function (leadId: string) {
		return api
			.request({
				url: `/lead/${leadId}`,
				//url: `/lead/?AgencyId=14&phase=en-cierre&page=1&limit=10`,
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
	nextPhase: async function (leadId: number) {
		return api
			.request({
				url: `/lead/nextPhase/${leadId}`,
				//url: `/lead/?AgencyId=14&phase=en-cierre&page=1&limit=10`,
				method: "PATCH",
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
	addActivity: async function (leadId: number, activity: LeadActivityType) {
		return api
			.request({
				url: `/leadActivity`,
				method: "POST",
				data: { data: activity },
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
	//modificar este metodo para cambiar campos
	updateSeller: async function (leadId: string, data: any) {
		return api
			.request({
				url: `/lead/${leadId}`,
				method: "PATCH",
				data: data,
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
	editInfo: async function (leadId: number, data: any) {
		return api
			.request({
				url: `/lead/${leadId}`,
				method: "PATCH",
				data: data,
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
