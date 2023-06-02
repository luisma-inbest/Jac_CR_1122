import React, { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getParams, getSession } from "@/auth/AuthFuncs";
import { Domain } from "@/constants";

import { user } from "@/assets";
import { handleMainPage } from "@/models/routes&permissions";
import { Link, useNavigate } from "react-router-dom";
import UserContext, { UserContextType } from "@/context/UserContext";

export const ProtectedRoute = ({
	children,
	isAllowed,
	redirectTo = "/",
}: any) => {
	const { User, SetUser } = useContext(UserContext) as UserContextType;
	if (!isAllowed) {
		// validateSesion(redirectTo)

		// si se usa hashroutes no es posible utilizar pathname
		// let path = window.location.pathname;
		// console.log("pathname:", path);

		let path = window.location.href.replace(Domain, "");
		console.log("Domain", Domain);
		console.log("pasa por protected route");
		console.log("usuario:", User);
		console.log("intenta ingresar a:", window.location.href);
		// console.log("newPath: ", path);

		return <Navigate to={redirectTo} state={{ path: path }} />;
	}

	return children ? children : <Outlet />;
};
