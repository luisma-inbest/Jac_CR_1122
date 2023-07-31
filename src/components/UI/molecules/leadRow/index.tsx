import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LeadRow.module.css";

interface Props {
	id: number;
	name: string;
	user?: string;
	model: string;
	color: number;
	status: string;
	createdAt: Date;
	updatedAt: Date;
}

export const LeadRow = (props: Props) => {
	const navigate = useNavigate();
	const colors = ["", styles.leadCold, styles.leadTracing, styles.leadHot];
	const [auction, setAuction] = useState(false);

	/**/
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [totalMins, setTotalMins] = useState(0);

	// const deadline = props.date.split("-");
	const oldDate = new Date(props.updatedAt.toString());

	const getTime = () => {
		const time = Date.now() - Number(oldDate);
		// console.table(time, oldDate);

		setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
		setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
		setMinutes(Math.floor((time / 1000 / 60) % 60));
		setSeconds(Math.floor((time / 1000) % 60));
		setTotalMins(Math.floor(time / 1000 / 60));
	};
	useEffect(() => {
		const interval = setInterval(() => getTime(), 1000);

		return () => clearInterval(interval);
	}, []);
	/**/

	const pickColor = () => {
		if (totalMins <= 5) {
			return styles.green;
		} else if (totalMins > 5 && totalMins <= 60) {
			return styles.orange;
		} else if (totalMins > 60) {
			return styles.red;
		} else {
			return "";
		}
	};

	return (
		<tr className={styles.tableRow}>
			<td className={styles.nameColumn}>
				<div
					className={`${styles.leadColor} ${colors[props.color]}`}
				></div>
				<Link to={`/sells/leads/${props.id}`}>
					<p className="p3 semi-bold no-margin">{props.name || ""}</p>
					<p className="p4 secondary no-margin">
						{props.model || ""}
					</p>
				</Link>
			</td>
			<td>
				<p className={`p4 secondary no-margin ${pickColor()}`}>
					{days} días - {hours}:{minutes}:{seconds}
				</p>
			</td>
			<td>
				<p className="p4 secondary no-margin">{props.status || ""}</p>
			</td>
			<td>
				<p className="p4 secondary no-margin">{props.user || ""}</p>
			</td>
			<td>
				<p className="p4 secondary no-margin">
					{props.createdAt.toString()}
				</p>
			</td>
		</tr>
	);
};
