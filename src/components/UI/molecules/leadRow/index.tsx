import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LeadRow.module.css";

interface Props {
	id: number;
	name: string;
	model: string;
	color: number;
	status: string;
	date: string;
}

export const LeadRow = (props: Props) => {
	const navigate = useNavigate();
	const colors = [styles.leadCold, styles.leadTracing, styles.leadHot];

	/**/
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const deadline = props.date.split("-");
	const oldDate = new Date(
		Number(deadline[2]),
		Number(deadline[1]),
		Number(deadline[0])
	);

	const getTime = () => {
		const time = Date.now() - Number(oldDate);
		// console.table(time, oldDate);

		setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
		setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
		setMinutes(Math.floor((time / 1000 / 60) % 60));
		setSeconds(Math.floor((time / 1000) % 60));
	};
	useEffect(() => {
		const interval = setInterval(() => getTime(), 1000);

		return () => clearInterval(interval);
	}, []);
	/**/

	return (
		<tr className={styles.tableRow} onClick={() => navigate("1")}>
			<td className={styles.nameColumn}>
				<div
					className={`${styles.leadColor} ${colors[props.color]}`}
				></div>
				<div>
					<p className="p3 semi-bold no-margin">{props.name}</p>
					<p className="p4 secondary no-margin">{props.model}</p>
				</div>
			</td>
			<td>
				<p className="p4 secondary no-margin">{props.status}</p>
			</td>
			<td>
				<p
					className={`p4 secondary no-margin ${
						days < 5 ? styles.green : styles.red
					}`}
				>
					{days} días - {hours}:{minutes}:{seconds}
				</p>
			</td>
			<td>
				<p className="p4 secondary no-margin">{props.date}</p>
			</td>
		</tr>
	);
};
