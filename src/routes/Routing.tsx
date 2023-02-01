import React, {useContext} from "react";
import {Route, Routes} from "react-router-dom";

import {
	Home,
	Login,
	Register,
	Admin,
	SellsDashboard,
	Leads,
	LeadDashboard,
	ProductDashboard,
	ProductDetails,
	ProductOnePager,
	Users,
} from "./../components/pages";
import {Main} from "./../components/templates";
import {ProtectedRoute} from "./ProtectedRoute";

import UserContext, {
	UserContextType,
	UserProvider,
	UserType,
} from "./../context/UserContext";
import {AgentRoutes, SellsRoutes, ProductRoutes} from "./../models/routes";

export const Routing = () => {
	const {User, SetUser} = useContext(UserContext) as UserContextType;

	return (
		<Routes>
			{/* public urls */}
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />

			{/* admin urls */}
			<Route
				element={
					<ProtectedRoute
						isAllowed={!!User && User.permissions.includes("admin")}
					/>
				}
			>
				<Route path="admin" element={<Main />}>
					<Route path="" element={<Admin />} />
					<Route path="/admin/register" element={<Register />} />
					<Route path="/admin/users" element={<Users />} />
				</Route>
			</Route>

			{/* sells urls */}
			<Route
				element={
					<ProtectedRoute
						isAllowed={
							!!User &&
							(User.permissions.includes("sells") ||
								User.permissions.includes("admin") ||
								User.permissions.includes("manager") ||
								User.permissions.includes("coordinator") ||
								User.permissions.includes("bdc") ||
								User.permissions.includes("adviser-digital") ||
								User.permissions.includes("adviser-floor") ||
								User.permissions.includes("adviser-hybrid") ||
								User.permissions.includes("hostess"))
						}
					/>
				}
			>
				<Route path="sells" element={<Main />}>
					<Route path={SellsRoutes.main} element={<SellsDashboard />} />
					<Route path={SellsRoutes.Leads} element={<Leads />} />
					<Route path={SellsRoutes.SingleLead} element={<LeadDashboard />} />
					<Route path={SellsRoutes.FutureLeads} element={<SellsDashboard />} />
					<Route path={SellsRoutes.FrozenLeads} element={<SellsDashboard />} />
				</Route>
			</Route>

			{/* product urls */}
			<Route
				element={
					<ProtectedRoute
						isAllowed={
							!!User &&
							(User.permissions.includes("product") ||
								User.permissions.includes("admin"))
						}
					/>
				}
			>
				<Route path="product" element={<Main />}>
					<Route path={ProductRoutes.main} element={<ProductDashboard />} />
					<Route path={ProductRoutes.Details} element={<ProductDetails />} />
					<Route path={ProductRoutes.OnePager} element={<ProductOnePager />} />
				</Route>
			</Route>

			<Route path="/*" element={<h1>404</h1>} />
		</Routes>
	);
};
