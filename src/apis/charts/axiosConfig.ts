import axios from "axios";
import { Backend, Domain } from "@/constants";
const API_ROUTE = "https://u0cawkama8.execute-api.us-east-1.amazonaws.com";

const api = axios.create({
	withCredentials: false,
	baseURL: API_ROUTE,
});

// defining a custom error handler for all APIs
const errorHandler = (error: any) => {
	const statusCode = error.response?.status;

	// logging only errors that are not 401
	if (statusCode && statusCode !== 401) {
		// console.error(error);
	}

	return Promise.reject(error);
};

// registering the custom error handler to the
// "api" axios instance
api.interceptors.response.use(undefined, (error) => {
	return errorHandler(error);
});

export { api, API_ROUTE };
