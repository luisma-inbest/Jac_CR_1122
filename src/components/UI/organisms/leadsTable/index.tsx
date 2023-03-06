import React, { useEffect, useState } from "react";
import styles from "./LeadsTable.module.css";
import { IconUnfold } from "@/assets";
import { LeadRow } from "@/components/UI/molecules";
import { LeadAPI } from "@/apis";
import { useQuery } from "react-query";
import { Loader } from "../../atoms";

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

	const { isLoading, data, isError, error } = useQuery({
		queryKey: ["leads"],
		queryFn: LeadAPI.getAll,
		// staleTime: 5 * (60 * 1000), // 5 mins
		// cacheTime: 10 * (60 * 1000), // 10 mins
		onSuccess: (leads) => {
			console.log("success", leads);
		},
	});

	useEffect(() => {
		if (props.type == 1) {
			setTypeLeads([1, 1, 1, 1]);
		} else if (props.type == 2) {
			setTypeLeads([2, 2, 2, 2]);
		} else if (props.type == 0) {
			setTypeLeads([0, 0, 0, 0]);
		}
	}, []);

	if (isLoading) {
		return (
			<div className="row">
				<div className={`col-xs-12 loaderContainer`}>
					<Loader />
				</div>
			</div>
		);
	}

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
				{data.map((lead: any) => {
					return (
						<LeadRow
							key={lead.id}
							id={lead.id}
							name={lead.firstAndLastName}
							model={lead.model}
							status={lead.status}
							date={lead.date || "10-01-2023"}
							color={typeLeads[lead.color]}
						/>
					);
				})}
			</tbody>
		</table>
	);
};
