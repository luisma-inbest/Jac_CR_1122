import {api, API_ROUTE} from "./axiosConfig";
import {User} from "@/models";

export const UserAPI = {
	test: function (): void {
		console.log("test");
	},
	// get: async function (id: string, cancel = false) {
	// 	const response = await api.request({
	// 		baseURL: "https://some-domain.com/api",
	// 		url: `/products/:id`,
	// 		method: "GET",
	// 		// retrieving the signal value by using the property name
	// 		signal: cancel
	// 			? cancelApiObject[this.get.name].handleRequestCancellation().signal
	// 			: undefined,
	// 	});

	// 	// returning the product returned by the API
	// 	return response.data.product;
	// },
	getAll: async function (cancel = false) {
		try {
			const response = await api.request({
				url: "/user/",
				method: "GET",
			});
			console.log(response.data);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	},
	create: async function (user: User) {
		try {
			const response = await api.request({
				url: `/user/`,
				withCredentials: false,
				method: "POST",
				data: {user: user},
			});
			console.log(response);
		} catch (error: any) {
			console.log("Hubo un error");
			if (error.response) {
				console.log(error.response.data);
			}
		}
	},
};
