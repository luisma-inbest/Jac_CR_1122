const API_ROUTE = "https://us-central1-richclub-c0ba3.cloudfunctions.net/app/";

const service = {
	post(url: string, params: any, auth = true, baseApi = true): Promise<any> {
		return new Promise(async (resolve, reject) => {
			try {
				// const idToken = await firebase?.auth()?.currentUser.getIdToken();
				// console.log('idToken', idToken);

				// let headers: any = {
				//     'Content-Type': 'application/json',
				//     'authorization': '3nn3bgbbf'
				// }
				let headers: any = {
					"Content-Type": "application/json",
				};
				if (auth) {
					headers.authorization = idToken;
				}
				fetch((baseApi ? API_ROUTE : "") + url, {
					method: "post",
					mode: "cors",
					cache: "no-cache",
					credentials: "same-origin",
					headers,
					body: JSON.stringify(params),
				})
					.then(function (response) {
						// if(response.status === 500) {
						//     reject(response.json())
						// }
						return response.json();
					})
					.then(function (data) {
						resolve(data);
					})
					.catch((err) => {
						reject({err, message: err.message});
					});
			} catch (ex) {
				reject({ex, message: ex.message});
			}
		});
	},
	get(url, auth = true, baseApi = true): Promise<any> {
		return new Promise(async (resolve, reject) => {
			try {
				const idToken = await firebase?.auth()?.currentUser.getIdToken();
				// console.log('idToken', idToken);

				let headers: any = {};
				if (auth) {
					// let token = '3nn3bgbbf';
					headers.authorization = idToken;
				}
				fetch((baseApi ? API_ROUTE : "") + url, {
					headers,
				})
					.then(function (response) {
						// if(response.status === 500) {
						//     reject(response.json())
						// }
						return response.json();
					})
					.then(function (data) {
						resolve(data);
					})
					.catch((err) => {
						reject(err);
					});
			} catch (ex) {
				reject(ex);
			}
		});
	},
};

export default service;
