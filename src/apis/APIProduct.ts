import { api, API_ROUTE } from "./axiosConfig";
import { Product } from "@/models";

export const ProductAPI = {
	create: async function (product: Product) {
		return api
			.request({
				url: `/product/`,
				method: "POST",
				data: { data: product },
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
	getAll: async function (page: number) {
		return api
			.request({
				// url: `/product/?page=${page}&limit=10`,
				url: `/product/`,
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
