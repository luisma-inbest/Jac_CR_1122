import React, { useContext, useEffect, useState } from "react";
import styles from "./LeadsTable.module.css";
import { IconUnfold } from "@/assets";
import { LeadRow } from "@/components/UI/molecules";
import { LeadAPI } from "@/apis";
import { useQuery } from "react-query";
import { Loader } from "../../atoms";
import UserContext, { UserContextType } from "@/context/UserContext";

interface Props {
	type: number;
	refresh?: boolean;
}

const statusArray = ["subasta", "1er-contacto", "seguimiento", "en-cierre"];
const arraySelector = [
	"subastaLeads",
	"firstContactLeads",
	"followUpLeads",
	"closingLeads",
];

export const LeadsTable = (props: Props) => {
	const { User } = useContext(UserContext) as UserContextType;
	const highlight = getComputedStyle(
		document.documentElement
	).getPropertyValue("--highlight-text");
	const [page, setPage] = useState<number>(1);
	const [maxPage, setMaxPage] = useState<number>(1);

	function generateLeadNickname(firstName: string, lastName: string) {
		return firstName.split(" ")[0] + " " + lastName.split(" ")[0];
	}

	function getUser(userToVerify: any) {
		if (userToVerify != null) {
			return userToVerify.nickname;
		}
		return "-";
	}

	const {
		isLoading,
		data: leads,
		isError,
		error,
	} = useQuery({
		queryKey: [
			`leads-${User!.AgencyId}-${statusArray[props.type]}`,
			[page, props.refresh],
		],
		queryFn: () =>
			LeadAPI.getAll(statusArray[props.type], User!.AgencyId, page),
		onSuccess: (data) => {
			setMaxPage(data.pages);
			console.log(data);
		},
		staleTime: 5 * (60 * 1000), // 5 mins
		cacheTime: 10 * (60 * 1000), // 10 mins
	});

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
		<div className="row">
			<div className={`col-xs-12 ${styles.tableContainer}`}>
				<table className={`${styles.table}`}>
					<thead>
						<tr className={styles.tableHeader}>
							<th className="p4 highlight">Nombre</th>
							<th className="p4 highlight">Asesor</th>
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
						{leads.data.map((lead: any) => {
							return (
								<LeadRow
									key={lead.id || ""}
									id={lead.id || ""}
									name={
										generateLeadNickname(
											lead.firstName,
											lead.lastName
										) || ""
									}
									user={getUser(lead.User) || ""}
									model={lead.model || ""}
									status=""
									color={props.type || 0}
									createdAt={lead.createdAt || ""}
									updatedAt={lead.updatedAt || ""}
								/>
							);
						})}
					</tbody>
				</table>

				{/* pagination */}
				<div className={styles.paginationContainer}>
					<div className={styles.pagination}>
						{page > 1 && (
							<h5 onClick={() => setPage(page - 1)}> &#8678; </h5>
						)}
						<h5> {page} </h5>
						{page < maxPage && (
							<h5 onClick={() => setPage(page + 1)}>&#8680;</h5>
						)}
					</div>
				</div>
				{/* pagination */}
			</div>
		</div>
	);
};