import { Alert } from "@/components/UI/atoms";
import React, { useContext } from "react";
import styles from "./MyProfile.module.css";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";

export const MyProfile = () => {
	const { Alerts, SetAlerts } = useContext(
		AlertsContext
	) as AlertsContextType;
	function createAlert(type: string) {
		let newAlert: any = {
			type: type,
			title: "Titulo",
			text: "textito",
		};
		SetAlerts([...Alerts, newAlert]);
	}

	return (
		<div className="row">
			<h1>Perfil de Usuario</h1>
			<div className="col-xs-12">
				<Alert type="success" title="Titulo" text="textito" />
				<Alert type="error" title="Titulo" text="textito" />
				<Alert type="warning" title="Titulo" text="textito" />
				<Alert type="info" title="Titulo" text="textito" />
				<button onClick={() => createAlert("success")}>Success</button>
				<br />
				<button onClick={() => createAlert("error")}>Error</button>
				<br />
				<button onClick={() => createAlert("warning")}>Warning</button>
				<br />
				<button onClick={() => createAlert("info")}>Info</button>
			</div>
		</div>
	);
};
