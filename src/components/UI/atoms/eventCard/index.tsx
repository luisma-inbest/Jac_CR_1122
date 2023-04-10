import React from "react";

import styles from "./EventCard.module.css";

interface Props {
	title: string;
	comments: string;
	date: string;
	leadId: number;
}

export const EventCard = (props: Props) => {
	return (
		<div className={`row ${styles.agendaCard}`}>
			<div className="col-xs-12">
				<p className="p2 semi-bold main-color">{props.title}</p>
				<p className="p2 highlight semi-bold">{props.comments}</p>
				<div className={`${styles.content}`}>
					<p className="p2 highlight semi-bold">
						Cliente : {props.leadId}
					</p>
					{/* <p className="p2 highlight ">Sucursal</p> */}
					<p className="p2 highlight ">{props.date}</p>
				</div>
			</div>
		</div>
	);
};
