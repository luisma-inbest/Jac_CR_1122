import {
	getParams,
	getSession,
} from "@/components/pages/authentication/AuthFuncs";
import React from "react";
import {Navigate, Outlet} from "react-router-dom";

export const ProtectedRoute = ({
	children,
	isAllowed,
	redirectTo = "/login",
}: any) => {
	if (!isAllowed) {
		// validateSesion(redirectTo);
		console.log("no autorizado...");
		return <Navigate to={redirectTo} />;
	}

	return children ? children : <Outlet />;
};

function validateSesion(redirectTo: string) {
	getParams()
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log("user not logged");
			console.log(err);
			return <Navigate to={redirectTo} />;
		});
}
