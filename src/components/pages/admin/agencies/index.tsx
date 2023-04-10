import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Tabs } from "@/components/templates";
import { Button, Loader } from "@/components/UI/atoms";
import { useNavigate } from "react-router-dom";
import { AgenciesTable } from "@/components/UI/organisms";

import styles from "./Agencies.module.css";
import { AgencyAPI } from "@/apis";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";

export const Agencies = () => {
	const navigate = useNavigate();
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;

	const { isLoading, data, isError, error } = useQuery({
		queryKey: ["agencies"],
		queryFn: AgencyAPI.getAll,
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
				<AgenciesTable agencies={data} />
			</div>
			<div className="col-xs-12 mt-2">
				<Button
					text="Registrar nueva agencia"
					full={true}
					func={() => navigate("/admin/agencies/create")}
				/>
			</div>
		</div>
	);
};
