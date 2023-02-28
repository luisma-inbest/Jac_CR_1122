import React, { useEffect, useState } from "react";
import styles from "./LeadsTable.module.css";
import { IconUnfold } from "@/assets";
import { LeadRow } from "@/components/UI/molecules";

interface Props {
	type?: number;
}

const leads = [
	{
		id: 1,
		name: "Jorge Salgado",
		model: "J7",
		status: "Lllamada",
		date: "10-01-2023",
		color: 0,
	},
	{
		id: 2,
		name: "Jorge Salgado",
		model: "J7",
		status: "Lllamada",
		date: "12-01-2023",
		color: 3,
	},
	{
		id: 3,
		name: "Jorge Salgado",
		model: "J7",
		status: "Lllamada",
		date: "17-01-2023",
		color: 3,
	},
	{
		id: 4,
		name: "Jorge Salgado",
		model: "J7",
		status: "Lllamada",
		date: "19-01-2023",
		color: 3,
	},
	{
		id: 5,
		name: "Jorge Salgado",
		model: "J7",
		status: "Lllamada",
		date: "22-01-2023",
		color: 3,
	},
];

export const LeadsTable = (props: Props) => {
	const highlight = getComputedStyle(
		document.documentElement
	).getPropertyValue("--highlight-text");
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
					<th className="p4 highlight">Ult. Contacto</th>
					<th className={`p4 highlight `}>
						Fecha
						<span className={`${styles.iconContainer}`}>
							<IconUnfold
								size="100%"
								color={highlight}
								rotate="0"
							/>
						</span>
					</th>
				</tr>
			</thead>
			<tbody>
				{leads.map((lead) => {
					return (
						<LeadRow
							key={lead.id}
							id={lead.id}
							name={lead.name}
							model={lead.model}
							status={lead.status}
							date={lead.date}
							color={typeLeads[lead.color]}
						/>
					);
				})}
			</tbody>
		</table>
	);
};
