import React, {useEffect, useState} from "react";
import {Tabs} from "@/components/templates";
import {UsersTable} from "@/components/UI/organisms/";
import {Button, Loader} from "@/components/UI/atoms";
import {useNavigate} from "react-router-dom";

import styles from "./AgencyUsers.module.css";

export interface UserRowProps {
	name: string;
	position: string;
	area: string;
	manager: string;
	email: string;
	role: string;
}

export const AgencyUsers = () => {
	const [users, setUsers] = useState<UserRowProps[]>([]);
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);

	function cleanData(data: any) {
		let usersTemp: UserRowProps[] = [];

		//TODO: eliminar los any
		data.map((element: any) => {
			//console.log(element.Attributes);
			//TODO: eliminar los any
			element.Attributes.map((attr: any) => {
				if (attr.Name === "nickname") {
					let userTemp: UserRowProps = {
						name: attr.Value,
						position: "Puesto del colaborador",
						area: "Nombre del área",
						manager: "Nombre del gerente",
						email: "nombreusuario@jac.mx",
						role: "Administrador Maestro",
					};
					usersTemp.push(userTemp);
				}
			});
		});
		setUsers(usersTemp);
	}

	useEffect(() => {
		fetch("http://localhost:9000/cognito")
			.then((response) => response.json())
			.then((data) => {
				// console.log(data.data.Users);
				cleanData(data.data.Users);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return (
			<div className="row">
				<div className={`col-xs-12 ${styles.loaderContainer}`}>
					<Loader />
				</div>
			</div>
		);
	}

	return (
		<div className="row">
			<div className={`col-xs-12 ${styles.tableContainer}`}>
				<UsersTable users={users} />
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
