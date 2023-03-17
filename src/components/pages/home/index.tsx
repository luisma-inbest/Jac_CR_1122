import { handleMainPage } from "@/models/routes&permissions";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getParams } from "@/auth/AuthFuncs";
import UserContext, { UserContextType } from "@/context/UserContext";
import { handleSession } from "@/auth";
import { permissions } from "@/utils";

export const Home = () => {
	const { User, SetUser } = useContext(UserContext) as UserContextType;
	let navigate = useNavigate();
	const location = useLocation();
	let path = "";

	function decideRoute(role: string): string {
		let mainPage = handleMainPage(role).replace("/", "");

		if (location.state != null) {
			path = location?.state.path;
			console.log("trae path", path);
			let arr = path.split("/"); //la posicion 0 esta vacia
			arr = arr.filter((item) => item != "#");
			console.log(arr);
			console.log(mainPage);
			if (permissions[role].includes(arr[1])) {
				console.log("tiene acceso..");
				mainPage = path.replace("/#", "");
			}
		}
		console.log("mainPage", mainPage);
		return mainPage;
	}

	useEffect(() => {
		handleSession()
			.then((data: any) => {
				SetUser({
					id: data.id,
					email: data.email,
					name: data.name,
					permissions: data.role,
					AgencyId: data.AgencyId,
				});
				let newPath = decideRoute(data.role[1]);
				// console.clear();
				navigate(newPath);
			})
			.catch((err) => {
				console.log("No hay sesión activa");
				// console.clear();
				navigate("/login");
			});
	}, []);

	return <></>;
};
