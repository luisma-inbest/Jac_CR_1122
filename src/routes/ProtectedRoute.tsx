import React from "react";
import {Navigate, Outlet} from "react-router-dom";

export const ProtectedRoute = ({
	children,
	isAllowed,
	redirectTo = "/login",
}: any) => {
	if (!isAllowed) {
		console.log("user not logged");
		return <Navigate to={redirectTo} />;
	}

	return children ? children : <Outlet />;
};
