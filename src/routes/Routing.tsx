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
	SellerProfile,
	ProductDashboard,
	ProductDetails,
	ProductOnePager,
	Users,
	Agencies,
	Agency,
	CreateAgency,
	SellerDashboard,
} from "./../components/pages";
import {Main} from "./../components/templates";
import {ProtectedRoute} from "./ProtectedRoute";

import UserContext, {
	UserContextType,
	UserProvider,
	UserType,
} from "./../context/UserContext";
import {
	AgentRoutes,
	SellsRoutes,
	ProductRoutes,
	AdminRoutes,
} from "./../models";

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
					<Route path={AdminRoutes.ADMIN} element={<Admin />} />
					<Route path={AdminRoutes.REGISTER} element={<Register />} />
					<Route path={AdminRoutes.USERS} element={<Users />} />
					<Route path={AdminRoutes.AGENCIES} element={<Agencies />} />
					<Route path={AdminRoutes.AGENCY} element={<Agency />} />
					<Route path={AdminRoutes.AGENCY_CREATE} element={<CreateAgency />} />
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
					<Route path={SellsRoutes.SellerProfile} element={<SellerProfile />} />
					<Route
						path={SellsRoutes.SellsDashboard}
						element={<SellerDashboard />}
					/>
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
