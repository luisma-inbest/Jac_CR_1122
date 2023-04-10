import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import {
	Home,
	Login,
	Register,
	Admin,
	SellsDashboard,
	Leads,
	LeadDashboard,
	SellerProfile,
	ProductDashboard,
	ProductDetails,
	ProductOnePager,
	Users,
	Agencies,
	Agency,
	CreateAgency,
} from "./../components/pages";
import { Main } from "./../components/templates";
import { ProtectedRoute } from "./ProtectedRoute";

import UserContext, {
	UserContextType,
	UserProvider,
	UserType,
} from "./../context/UserContext";
import { SellsRoutes, ProductRoutes, AdminRoutes } from "./../models";
import { PublicRoutes } from "@/models/routes";

export const PublicRouter = (
	<Route>
		{/* public urls */}
		<Route path="/" element={<Home />} />
		<Route path={PublicRoutes.Login} element={<Login />} />
		<Route path="/register" element={<Register />} />
	</Route>
);
