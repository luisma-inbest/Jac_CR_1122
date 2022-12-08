import React from "react";
import styles from "./LeadsTable.module.css";
import {IconUnfold} from "@/assets";
import {LeadRow} from "@/components/UI/atoms";

export const LeadsTable = () => {
	const highlight = getComputedStyle(document.documentElement).getPropertyValue(
		"--highlight-text"
	);
	return (
		<table className={`${styles.table}`}>
			<thead>
				<tr>
					<th className="p4 highlight">Nombre</th>
					<th className="p4 highlight">Estado</th>
					<th className="p4 highlight">
						Fecha
						<span className={`${styles.iconContainer}`}>
							<IconUnfold size="100%" color={highlight} />
						</span>
					</th>
				</tr>
			</thead>
			<tbody>
				<LeadRow />
			</tbody>
		</table>
	);
};
