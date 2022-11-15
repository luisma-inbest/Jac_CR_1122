import React, {useContext} from "react";
import {Route, Routes} from "react-router-dom";

import {Home, Login, Register, Admin, Seller} from "@/Components/pages";
import {Main} from "@/components/templates";
import {ProtectedRoute} from "./ProtectedRoute";

import UserContext, {
	UserContextType,
	UserProvider,
	UserType,
} from "@/context/UserContext";
import {AgentRoutes} from "@/models/routes";

export const Routing = () => {
	const {User, SetUser} = useContext(UserContext) as UserContextType;

	return (
		<Routes>
			{/* public urls */}
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />

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
					<Route path="/admin/properties" element={<Register />} />
				</Route>
			</Route>

			{/* agent urls */}
			<Route element={<ProtectedRoute isAllowed={!!User} />}>
				<Route path="seller" element={<Main />}>
					<Route path="" element={<Seller />} />
					<Route path={AgentRoutes.MENU1} element={<Seller />} />
					<Route path={AgentRoutes.Menu2} element={<Seller />} />
					<Route path="prospect/:page" element={<Seller />} />
					<Route path={AgentRoutes.Menu3} element={<Seller />} />
				</Route>
			</Route>

			<Route path="/*" element={<h1>404</h1>} />
		</Routes>
	);
};
