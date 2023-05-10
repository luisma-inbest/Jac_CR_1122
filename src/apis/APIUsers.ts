import { api, API_ROUTE } from "./axiosConfig";
import { User } from "@/models";
import { signUp } from "@/auth/AuthFuncs";

function validateCognitoUser(user: User) {
	return new Promise((resolve, reject) => {
		signUp(user)
			.then((data) => {
				console.log("Usuario creado exitosamente :)");
				resolve(true);
			})
			.catch((error: any) => {
				let code = error.code;
				console.log(error);
				switch (code) {
					case "UsernameExistsException":
						console.log("El usuario ya existe");
						break;
					default:
						console.log("Error al crear el usuario");
				}
				resolve(false);
			});
	});
}

export const UserAPI = {
	getOne: function (id: number) {
		return api
			.request({
				url: `/user/${id}}`,
				method: "GET",
			})
			.then((response) => {
				// console.log("todo bien", response.data.data);
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
	getAll: async function () {
		return api
			.request({
				url: "/user/",
				method: "GET",
			})
			.then((response) => {
				// console.log("todo bien", response.data.data);
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
	getAllByAgency: async function (agency: string) {
		try {
			const response = await api.request({
				url: `/user/?AgencyId=${agency}`,
				method: "GET",
			});
			// console.log("resp:", response.data);
			return response.data.data;
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
				data: { data: user },
			});
			// console.log(response.data);
			let newId = response.data.id;
			user.userId = String(newId);
			const cognitoresponse = await validateCognitoUser(user);
			if (!cognitoresponse) {
				console.log("Error al crear el usuario en cognito");
				this.delete(newId);
				throw new Error("Error al crear el usuario en cognito");
			}
			return user.userId;
		} catch (error: any) {
			console.log("Hubo un error");
			if (error.response) {
				console.log(error.response.data);
				throw new Error(error.response.data);
			}
		}
	},
	delete: async function (id: string) {
		try {
			const response = await api.request({
				url: `/user/${id}`,
				method: "DELETE",
			});
			// console.log("resp:", response.data);
			return response.data.data;
		} catch (error) {
			console.log(error);
		}
	},
	filterSellers: async function (agency: string, roles: string[]) {
		let rolesQuery = roles.map((role) => `role=${role}`).join("&");
		try {
			const response = await api.request({
				url: `/user/?AgencyId=${agency}&${rolesQuery}`,
				method: "GET",
			});
			// console.log("resp:", response.data);
			return response.data.data;
		} catch (error) {
			console.log(error);
		}
	},
	getUserAgencies: async function (id: number) {
		try {
			const response = await api.request({
				url: `/user/agencies/${id}}`,
				method: "GET",
			});
			// console.log("resp:", response.data);
			return response.data.data;
		} catch (error) {
			console.log(error);
		}
	},
};
