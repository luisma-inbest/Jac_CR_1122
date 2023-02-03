import React from "react";
import styles from "./UserRow.module.css";
import {UserRowProps} from "@/models";

export const UserRow: React.FunctionComponent<UserRowProps> = (props) => {
	return (
		<tr className={styles.row} key={props.email}>
			<td className={``}>
				<span className="p3 semi-bold no-margin">{props.name}</span>
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
				<span className="p4 secondary no-margin">{props.role}</span>
			</td>
		</tr>
	);
};
