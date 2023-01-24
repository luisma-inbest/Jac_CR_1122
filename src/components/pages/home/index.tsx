import {user} from "@/assets";
import {handleMainPage} from "@/models/routes&permissions";
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {getParams} from "../authentication/AuthFuncs";

export const Home = () => {
	let navigate = useNavigate();

	async function handleSession() {
		try {
			await getParams();
			let user: any,
				session: any,
				attributes: any = await getParams();
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
