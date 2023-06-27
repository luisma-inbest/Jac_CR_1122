import { handleMainPage } from "@/models/routes&permissions";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getParams } from "@/auth/AuthFuncs";
import UserContext, { UserContextType } from "@/context/UserContext";
import { handleSession } from "@/auth";
import { permissions } from "@/utils";
import { UserAPI } from "@/apis";

export const Home = () => {
	const { User, SetUser } = useContext(UserContext) as UserContextType;
	let navigate = useNavigate();
	const location = useLocation();
	let path = "";

	console.log("pasa a home");

	function decideRoute(role: string): string {
		let mainPage = handleMainPage(role).replace("/", "");
		console.log("rol del usuario", role);

		if (location.state != null) {
			path = location?.state.path;
			console.log("trae path", path);
			let arr = path.split("/"); //la posicion 0 esta vacia
			arr = arr.filter((item) => item != "#");

			console.log("url arr:", arr);
			console.log("mainpage dado el rol:", mainPage);

			//validamos si puede ir a la otra ruta o lo mandamos a la principal de su rol
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
				UserAPI.getOne(data.id)
					.then((res) => {
						console.log("usuario respuesta:", res);
						console.log("usuario data:", data);
						//TODO: se va a cambiar agencies
						SetUser({
							id: res.id,
							email: res.email,
							name: res.nickname,
							permissions: ["shared", res.UserRole.slug],
							agencies: res.Agencies,
							AgencyId: res.Agencies[0].id,
						});
						UserAPI.saveActionUser(res.id, 1).then((res) => {
							console.log(
								"guardado de accion para reporteo",
								res
							);
						});
					})
					.catch((err) => {
						console.log("err", err);
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
