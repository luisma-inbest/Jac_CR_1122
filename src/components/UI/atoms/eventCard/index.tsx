import React from "react";

import styles from "./EventCard.module.css";

export const EventCard = () => {
	return (
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
	);
};
