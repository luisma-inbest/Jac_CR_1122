import { Alert } from "@/components/UI/atoms";
import React, { useContext } from "react";
import styles from "./MyProfile.module.css";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";

export const MyProfile = () => {
	const { Alerts, SetAlerts } = useContext(
		AlertsContext
	) as AlertsContextType;

	return (
		<div className="row">
			<h1>Perfil de Usuario</h1>
			<div className="col-xs-12"></div>
		</div>
	);
};
