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
	MyProfile,
} from "./../components/pages";
import { Main } from "./../components/templates";
import { ProtectedRoute } from "./ProtectedRoute";

import { SellsRoutes, ProductRoutes, AdminRoutes } from "./../models";
import { PublicRoutes, SharedRoutes } from "@/models/routes";

export const SharedRouter = (
	<Route>
		{/* shared urls */}
		<Route path={SharedRoutes.Profile} element={<Main />}>
			<Route path="" element={<MyProfile />} />
		</Route>

		<Route path={ProductRoutes.Product} element={<Main />}>
			<Route path={ProductRoutes.Main} element={<ProductDashboard />} />
			<Route path={ProductRoutes.Details} element={<ProductDetails />} />
			<Route
				path={ProductRoutes.OnePager}
				element={<ProductOnePager />}
			/>
		</Route>
		{/* <Route path="/register" element={<Register />} /> */}
	</Route>
);
