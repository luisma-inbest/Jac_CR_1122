import React, { useContext, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { NavBar, Header } from "@/components/UI/organisms";
import { Alert, Path } from "@/components/UI/atoms";
import styles from "./Main.module.css";

import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";

export const Main = () => {
	const { Alerts, SetAlerts } = useContext(
		AlertsContext
	) as AlertsContextType;
	const [menu, setMenu] = useState(false);
	const toast = useRef<HTMLDivElement>(null);

	if (window.location.pathname === "/seller") {
		console.log("entro");
	}

	const navHandler = () => {
		setMenu(!menu);
	};

	return (
		<>
			<div className="fullPage container">
				{/* */}
				<Header navHandler={navHandler} />
				{/* */}

				<NavBar state={menu} navHandler={navHandler} />

				<div ref={toast} className={styles.toast}>
					{Alerts.map((alert: any, index) => {
						return (
							<Alert
								key={index}
								title={alert.title}
								text={alert.text}
								type={alert.type}
							/>
						);
					})}
				</div>

				<main className="row">
					<div className={`col-xs-12 ${styles.mobilePadding}`}>
						{/* Aqui Va el contenido*/}
						<Path />
						<Outlet />
					</div>
					{/* */}
				</main>
			</div>
		</>
	);
};
