import React, { useContext, useEffect, useState } from "react";
import { Tabs } from "@/components/templates";
import { UsersTable } from "@/components/UI/organisms/";
import { Button, Loader } from "@/components/UI/atoms";
import { useNavigate } from "react-router-dom";

import styles from "./Users.module.css";
import { useQuery } from "react-query";
import { UserAPI } from "@/apis";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";

export interface UserRowProps {
	name: string;
	position: string;
	area: string;
	manager: string;
	email: string;
	role: string;
}

export const Users = () => {
	// const [users, setUsers] = useState<UserRowProps[]>([]);
	const navigate = useNavigate();
	const { Alerts, SetAlerts } = useContext(
		AlertsContext
	) as AlertsContextType;
	function createAlert(type: string, title: string, text: string) {
		let newAlert: any = {
			type: type,
			title: "Titulo",
			text: "textito",
		};
		SetAlerts([...Alerts, newAlert]);
	}

	const { isLoading, data, isError, error } = useQuery({
		queryKey: ["users"],
		queryFn: UserAPI.getAll,
		staleTime: 5 * (60 * 1000), // 5 mins
		cacheTime: 10 * (60 * 1000), // 10 mins
		onSuccess: (data) => {
			console.log(data);
			createAlert("success", "Exito!", "agencias cargadas correctamente");
		},
		onError: (error) => {
			console.log(error);
			createAlert(
				"error",
				"Error!",
				"No se pudieron cargar las agencias"
			);
		},
	});

	// function cleanData(data: any) {
	// 	let usersTemp: UserRowProps[] = [];

	// 	data.map((element: any) => {
	// 		//console.log(element.Attributes);
	// 		element.Attributes.map((attr: any) => {
	// 			if (attr.Name === "nickname") {
	// 				let userTemp: UserRowProps = {
	// 					name: attr.Value,
	// 					position: "Puesto del colaborador",
	// 					area: "Nombre del área",
	// 					manager: "Nombre del gerente",
	// 					email: "nombreusuario@jac.mx",
	// 					role: "Administrador Maestro",
	// 				};
	// 				usersTemp.push(userTemp);
	// 			}
	// 		});
	// 	});
	// 	setUsers(usersTemp);
	// }

	// useEffect(() => {
	// 	fetch("http://localhost:9000/cognito")
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			// console.log(data.data.Users);
	// 			cleanData(data.data.Users);
	// 			setLoading(false);
	// 		});
	// 	setLoading(false);
	// }, []);

	if (isLoading) {
		return (
			<div className="row">
				<div className={`col-xs-12 loaderContainer`}>
					<Loader />
				</div>
			</div>
		);
	}

	if (isError) {
		return (
			<div className="row">
				<div className={`col-xs-12 loaderContainer`}>
					<h1>Hubo un error</h1>
				</div>
			</div>
		);
	}

	return (
		<div className="row">
			<div className={`col-xs-12 ${styles.tableContainer}`}>
				<UsersTable users={data} />
			</div>
			<div className="col-xs-12 mt-5">
				<Button
					text="Registrar nuevo usuario"
					full={true}
					func={() => navigate("/admin/register")}
				/>
			</div>
		</div>
	);
};
