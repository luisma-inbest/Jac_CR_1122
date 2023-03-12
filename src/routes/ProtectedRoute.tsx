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
	if (!isAllowed) {
		// validateSesion(redirectTo)
		let path = window.location.pathname;
		console.log("no tuvo acceso a:", path);

		return <Navigate to={redirectTo} state={{ path: path }} />;
	}

	return children ? children : <Outlet />;
};
