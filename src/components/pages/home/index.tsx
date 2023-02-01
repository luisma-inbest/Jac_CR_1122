import {user} from "@/assets";
import {handleMainPage} from "@/models/routes&permissions";
import React, {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {getParams} from "../authentication/AuthFuncs";
import UserContext, {UserContextType} from "@/context/UserContext";

export const Home = () => {
	const {User, SetUser} = useContext(UserContext) as UserContextType;
	let navigate = useNavigate();

	async function handleSession() {
		try {
			await getParams();
			let user: any,
				session: any,
				attributes: any = await getParams();
			SetUser({
				id: 1,
				name: attributes["nickname"],
				permissions: [attributes["custom:role"]],
			});
			navigate(handleMainPage(attributes["custom:role"]));
		} catch {
			console.log("No hay sesión activa");
			navigate("/login");
		}
	}

	useEffect(() => {
		handleSession();
	}, []);

	return (
		<div>
			<h1> Verificando sesión... </h1>
		</div>
	);
};
