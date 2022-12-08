import React from "react";
import {useNavigate} from "react-router-dom";
import styles from "./LeadRow.module.css";

interface Props {
	id: string;
	name: string;
	model: string;
	color: number;
	status: string;
	date: string;
}

export const LeadRow = (props: Props) => {
	const navigate = useNavigate();
	const colors = [styles.leadCold, styles.leadTracing, styles.leadHot];

	return (
		<tr className={styles.tableRow} onClick={() => navigate("1")}>
			<td className={styles.nameColumn}>
				<div className={`${styles.leadColor} ${colors[props.color]}`}></div>
				<div>
					<p className="p3 semi-bold no-margin">{props.name}</p>
					<p className="p4 secondary no-margin">{props.model}</p>
				</div>
			</td>
			<td>
				<p className="p4 secondary no-margin">{props.status}</p>
			</td>
			<td>
				<p className="p4 secondary no-margin">{props.date}</p>
			</td>
		</tr>
	);
};
