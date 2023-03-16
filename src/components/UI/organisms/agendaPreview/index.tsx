import React from "react";
import styles from "./AgendaPreview.module.css";

export const AgendaPreview = () => {
	return (
		<>
			<div className="row">
				<div className={`col-xs-12 ${styles.tabs}`}>
					<p className={`p2 ${styles.tab} ${styles.active} `}>Hoy</p>
					<p className={`p2 ${styles.tab} `}>Semana</p>
					<p className={`p2 ${styles.tab} `}>Mes</p>
				</div>
			</div>
			<div className={`row ${styles.agendaCard}`}>
				<div className="col-xs-12">
					<p className="p2 semi-bold main-color">titulo</p>
					<div className={`${styles.content}`}>
						<p className="p2 highlight semi-bold">Cliente</p>
						<p className="p2 highlight ">Sucursal</p>
						<p className="p2 highlight ">15/4/2023 - 01:30</p>
					</div>
				</div>
			</div>
		</>
	);
};
