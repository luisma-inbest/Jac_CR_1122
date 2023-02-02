import React, {useEffect, useState} from "react";
import {Tabs} from "@/components/templates";
import {Button, Loader} from "@/components/UI/atoms";
import {useNavigate} from "react-router-dom";
import {AgenciesTable} from "@/components/UI/organisms";

import styles from "./Agencies.module.css";
import {AgencyRowProps} from "@/models";

export const Agencies = () => {
	const [users, setUsers] = useState<AgencyRowProps[]>([]);
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);

	function cleanData(data: any) {
		let usersTemp: AgencyRowProps[] = [];

		//TODO: eliminar los any
		data.map((element: any) => {
			//console.log(element.Attributes);
			//TODO: eliminar los any
			element.Attributes.map((attr: any) => {
				if (attr.Name === "nickname") {
					let userTemp: AgencyRowProps = {
						name: attr.Value,
						state: "Estado",
						manager: "Nombre del gerente",
						phone: "1234567890",
						email: "nombreusuario@jac.mx",
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
				<AgenciesTable agencies={users} />
			</div>
			<div className="col-xs-12 mt-5">
				<Button
					text="Registrar nueva agencia"
					full={true}
					func={() => navigate("/admin/agencies/create")}
				/>
			</div>
		</div>
	);
};
