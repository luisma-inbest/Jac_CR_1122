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
		validateSesion(redirectTo);
	}

	return children ? children : <Outlet />;
};

function validateSesion(redirectTo: string) {
	getSession()
		.then((data) => {
			console.log(data);
			console.log(getParams());
		})
		.catch((err) => {
			console.log("user not logged");
			console.log(err);
			return <Navigate to={redirectTo} />;
		});
}
