import React, { useContext, useEffect, useState } from "react";
import { UsersTable } from "@/components/UI/organisms/";
import { Button, Loader } from "@/components/UI/atoms";
import { useQuery } from "react-query";
import { LeadAPI, UserAPI } from "@/apis";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";
import styles from "./SearchLeads.module.css";
import { IconUnfold } from "@/assets";
import { LeadRow } from "@/components/UI/molecules";
import { useSearchParams } from "react-router-dom";

export const SearchLeads = () => {
	const [params, setParams] = useSearchParams();

	const highlight = getComputedStyle(
		document.documentElement
	).getPropertyValue("--highlight-text");

	const [page, setPage] = useState<number>(1);
	const [maxPage, setMaxPage] = useState<number>(1);
	const [phase, setPhase] = useState<string>("");

	useEffect(() => {
		console.log("corre useEffect");
		setPhase(params.get("leadPhase") as string);
	}, [params]);

	//This Function generates the nickname for the lead
	function generateLeadNickname(firstName: string, lastName: string) {
		return firstName.split(" ")[0] + " " + lastName.split(" ")[0];
	}
	//This function gets the user nickname if exists
	function getUser(userToVerify: any) {
		return userToVerify == null ? "-" : userToVerify.nickname;
	}

	// futura-venta

	const { isLoading, data, isError, error } = useQuery({
		queryKey: [`leads-search`, [page, phase]],
		queryFn: () => LeadAPI.search(phase, "14", "", page),
		onSuccess: (data) => {
			setMaxPage(data.pages);
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
	if (isError) {
		return (
			<div className="row">
				<div className={`col-xs-12 loaderContainer`}>
					<h2>Hubo un Error</h2>
				</div>
			</div>
		);
	}

	// console.log(data);

	return (
		<div className="row">
			<div className={`col-xs-12 ${styles.tableContainer}`}>
				<table className={`${styles.table}`}>
					<thead>
						<tr className={styles.tableHeader}>
							<th className="p4 highlight">Contacto</th>
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
						{data.data.map((lead: any) => {
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
									color={0}
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
