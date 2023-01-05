import React, {useEffect, useState} from "react";
import styles from "./LeadsTable.module.css";
import {IconUnfold} from "@/assets";
import {LeadRow} from "@/components/UI/atoms";

interface Props {
	type?: number;
}

export const LeadsTable = (props: Props) => {
	const highlight = getComputedStyle(document.documentElement).getPropertyValue(
		"--highlight-text"
	);
	const [typeLeads, setTypeLeads] = useState<number[]>([3, 3, 3, 3]);

	useEffect(() => {
		if (props.type == 1) {
			setTypeLeads([1, 1, 1, 1]);
		} else if (props.type == 2) {
			setTypeLeads([2, 2, 2, 2]);
		} else if (props.type == 0) {
			setTypeLeads([0, 0, 0, 0]);
		}
	}, []);

	return (
		<table className={`${styles.table}`}>
			<thead>
				<tr className={styles.tableHeader}>
					<th className="p4 highlight">Nombre</th>
					<th className="p4 highlight">Estado</th>
					<th className={`p4 highlight `}>
						Fecha
						<span className={`${styles.iconContainer}`}>
							<IconUnfold size="100%" color={highlight} rotate="0" />
						</span>
					</th>
				</tr>
			</thead>
			<tbody>
				<LeadRow
					id="1"
					name="Jorge Salgado"
					model="J7"
					status="Lllamada"
					date="10-02-22"
					color={typeLeads[0]}
				/>
				<LeadRow
					id="2"
					name="Demian Avila"
					model="Sei 6"
					status="Confirmación"
					date="10-02-22"
					color={typeLeads[1]}
				/>
				<LeadRow
					id="3"
					name="Daniel Sainz"
					model="J7"
					status="Demo"
					date="10-02-22"
					color={typeLeads[2]}
				/>
				<LeadRow
					id="4"
					name="Luis Nocedal"
					model="Frison T8"
					status="Cotización"
					date="10-02-22"
					color={typeLeads[3]}
				/>
			</tbody>
		</table>
	);
};
