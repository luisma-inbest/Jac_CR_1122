import React from "react";
import styles from "./UserRow.module.css";
import { UserRowProps } from "@/models";

export const UserRow: React.FunctionComponent<UserRowProps> = (props) => {
	const active = true;

	return (
		<tr className={styles.row} key={props.email}>
			<td className={styles.firstColumn}>
				<div
					className={`${styles.status} ${
						active ? styles.active : styles.unactive
					}`}
				></div>
				<div>
					<p className="p3 semi-bold no-margin">{props.nickname}</p>
				</div>
				<br />
				<span className="p4 secondary no-margin">{props.position}</span>
			</td>
			<td className={``}>
				<span className="p3 semi-bold no-margin">{props.area}</span>
				<br />
				<span className="p4 secondary no-margin">{props.manager}</span>
			</td>
			<td className={``}>
				<span className="p4 secondary no-margin">{props.email}</span>
			</td>
			<td className={``}>
				<span className="p4 secondary no-margin">
					{props.UserRole.description}
				</span>
			</td>
		</tr>
	);
};
