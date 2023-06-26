import { api, API_ROUTE } from "./axiosConfig";
import { Lead, LeadDataType } from "@/models";
import { LeadActivityType } from "@/models";

export const AgencyChartAPI = {
	funnel: async function (
		AgencyId: string,
		startDate: any,
		endDate: any,
		UserId: string
	) {
		return api
			.request({
				url: `/lead/ByAllPhases?AgencyId=${AgencyId}&StartDate=${startDate}&EndDate=${endDate}&UserId=${UserId}`,
				method: "GET",
			})
			.then((response) => {
				console.log(response.data.data);
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
	interest: async function (
		AgencyId: string,
		startDate: any,
		endDate: any,
		UserId: string
	) {
		return api
			.request({
				url: `/lead/InterestByModel?AgencyId=${AgencyId}&StartDate=${startDate}&EndDate=${endDate}&UserId=${UserId}`,
				method: "GET",
			})
			.then((response) => {
				console.log(response.data.data);
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
	origins: async function (
		AgencyId: string,
		startDate: any,
		endDate: any,
		UserId: string
	) {
		return api
			.request({
				url: `/lead/ByOrigin?AgencyId=${AgencyId}&StartDate=${startDate}&EndDate=${endDate}&UserId=${UserId}`,
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
	status: async function (
		AgencyId: string,
		startDate: any,
		endDate: any,
		UserId: string
	) {
		return api
			.request({
				url: `/lead/ByPhase?AgencyId=${AgencyId}&StartDate=${startDate}&EndDate=${endDate}&UserId=${UserId}`,
				method: "GET",
			})
			.then((response) => {
				console.log(response.data.data);
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
