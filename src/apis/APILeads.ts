import { api, API_ROUTE } from "./axiosConfig";
import { Lead, LeadDataType } from "@/models";
import { LeadActivityType } from "@/models";

export const LeadAPI = {
	create: async function (lead: Lead, UserId: number) {
		return api
			.request({
				url: `/lead/`,
				method: "POST",
				data: {
					data: {
						...lead,
						UserId: UserId,
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
	getAll: async function (data: any) {
		console.log("get leads with:", data);
		return api
			.request({
				url: `/lead/?AgencyId=${data.agency}&phase=${data.phase}&UserId=${data.UserId}&ProductId=${data.ProductId}&search=${data.search}&StartDate=${data.startDate}&EndDate=${data.endDate}&RequestantId=${data.RequestantId}&page=${data.page}&limit=10`,
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
	search: async function (
		phase: string,
		agency: string,
		UserId: string,
		page: number,
		RequestantId: number
	) {
		return api
			.request({
				url: `/lead/?AgencyId=${agency}&phase=${phase}&page=${page}&limit=10&UserId=${UserId}&RequestantId=${RequestantId}`,
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
	addActivity: async function (activity: LeadActivityType) {
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
	updateFields: async function (leadId: string, data: any) {
		console.log("data", data);
		return api
			.request({
				url: `/lead/${leadId}`,
				method: "PATCH",
				data: data,
			})
			.then((response) => {
				return response.data;
			})
			.catch((error: any) => {
				if (error.response) {
					console.log(error.response.data);
				}
				throw new Error(error);
			});
	},
	editInfo: async function (lead: LeadDataType) {
		return api
			.request({
				url: `/lead/${lead.id}`,
				method: "PATCH",
				data: {
					data: {
						firstName: lead.leadFirstName,
						lastName: lead.leadLastName,
						leadPhones: lead.leadPhones,
						leadEmails: lead.leadEmails,
					},
				},
			})
			.then((response) => {
				return response.data;
			})
			.catch((error: any) => {
				if (error.response) {
					console.log(error.response.data);
				}
				throw new Error(error);
			});
	},
	modifyInterest: async function (lead: LeadDataType) {
		return api
			.request({
				url: `/leadInterest`,
				method: "POST",
				data: {
					data: {
						date: "2023-02-02",
						comments: "Cambio de interes",
						ProductId: lead.LeadInterests[0].ProductId,
						ProductColorId: lead.LeadInterests[0].ProductColorId,
						LeadId: lead.id,
						buyType: lead.buyType.toLowerCase(),
						quantity: lead.LeadInterests[0].quantity,
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
	ruleOut: async function (leadId: number, data: any) {
		return api
			.request({
				url: `/lead/deactivate/${leadId}`,
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
	testDriveAppointment: async function (data: any) {
		console.log("data: ", data);
		return api
			.request({
				url: `/lead/TestDriveAppointment`,
				method: "POST",
				data: { data: data },
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
