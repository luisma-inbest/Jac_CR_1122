import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { ProtectedRoute } from "./ProtectedRoute";

import UserContext, { UserContextType } from "./../context/UserContext";
import { SellsRouter } from "./SellsRouter";
import { PublicRouter } from "./PublicRouter";
import { AdminRouter } from "./AdminRouter";
import { ProductRouter } from "./ProductRouter";
import { SharedRouter } from "./SharedRouter";

export const Routing = () => {
	const { User, SetUser } = useContext(UserContext) as UserContextType;

	return (
		<Routes>
			{/* public urls */}
			{PublicRouter}

			{/* General urls */}
			<Route
				element={
					<ProtectedRoute
						isAllowed={
							!!User && User.permissions.includes("shared")
						}
					/>
				}
			>
				{SharedRouter}
			</Route>

			{/* admin urls */}
			<Route
				element={
					<ProtectedRoute
						isAllowed={!!User && User.permissions.includes("admin")}
					/>
				}
			>
				{AdminRouter}
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
				{SellsRouter}
			</Route>

			{/* product urls */}
			<Route
				element={
					<ProtectedRoute
						isAllowed={!!User && User.permissions.includes("admin")}
					/>
				}
			>
				{ProductRouter}
			</Route>

			{/* 404 */}
			<Route path="/*" element={<h1>Error 404 desde React Router</h1>} />
		</Routes>
	);
};
