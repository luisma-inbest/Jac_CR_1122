import React from "react";
import styles from "./LeadRow.module.css";

export const LeadRow = () => {
	return (
		<tr className={styles.tableRow}>
			<td className={styles.nameColumn}>
				<div className={styles.leadColor}></div>
				<div>
					<p className="p3 semi-bold no-margin">Jorge Salgado</p>
					<p className="p4 no-margin">J7</p>
				</div>
			</td>
			<td>Llamada</td>
			<td>10-02-2022</td>
		</tr>
	);
};
