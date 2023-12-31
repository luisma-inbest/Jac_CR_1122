import React, { useContext, useEffect, useState } from "react";
import styles from "./LeadsTable.module.css";
import { IconUnfold } from "@/assets";
import { LeadRow } from "@/components/UI/molecules";
import { LeadAPI } from "@/apis";
import { useQuery } from "react-query";
import { Loader } from "../../atoms";
import UserContext, { UserContextType } from "@/context/UserContext";

//COmponent Props
interface Props {
	type: number;
	data: {
		AgencyId: string;
		UserId: string;
		ProductId: string;
		search: string;
		refresh: boolean;
		startDate: string;
		endDate: string;
	};
	dispatch: any;
}

// Phases Arrays for the table and query
const statusArray = ["subasta", "1er-contacto", "seguimiento", "en-cierre"];
const arraySelector = [
	"subastaLeads",
	"firstContactLeads",
	"followUpLeads",
	"closingLeads",
];

//Main Component
export const LeadsTable = (props: Props) => {
	//Comopnent Variables
	const { User } = useContext(UserContext) as UserContextType;
	const highlight = getComputedStyle(
		document.documentElement
	).getPropertyValue("--highlight-text");
	const [page, setPage] = useState<number>(1);
	const [maxPage, setMaxPage] = useState<number>(1);
	const [reload, setReload] = useState<boolean>(false);
	// const UserId = getUserId();

	//Component Functions
	//This function gives the userId Value given the role
	// function getUserId() {
	// 	if (props.type == 0) {
	// 		return "";
	// 	}
	// 	if (
	// 		User!.permissions[1] == "coordinator" ||
	// 		User!.permissions[1] == "bdc" ||
	// 		User!.permissions[1] == "adviser-digital" ||
	// 		User!.permissions[1] == "adviser-floor" ||
	// 		User!.permissions[1] == "adviser-hybrid"
	// 	) {
	// 		props.dispatch({ type: "UserId", value: User!.id });
	// 		return String(User!.id);
	// 	}
	// 	return "";
	// }
	//This Function generates the nickname for the lead
	function generateLeadNickname(firstName: string, lastName: string) {
		return firstName.split(" ")[0] + " " + lastName.split(" ")[0];
	}
	//This function gets the user nickname if exists
	function getUser(userToVerify: any) {
		return userToVerify == null ? "-" : userToVerify.nickname;
	}

	const {
		isLoading,
		data: leads,
		isError,
		error,
	} = useQuery({
		queryKey: [
			`leads-${User!.AgencyId}-${statusArray[props.type]}-page`,
			[page, props.data.refresh, reload],
		],
		queryFn: () =>
			LeadAPI.getAll({
				agency: User!.AgencyId,
				phase: statusArray[props.type],
				UserId: props.data.UserId,
				page: page,
				ProductId: props.data.ProductId,
				search: props.data.search,
				RequestantId: User!.id,
				startDate: props.data.startDate,
				endDate: props.data.endDate,
			}),
		onSuccess: (data) => {
			setMaxPage(data.pages);
			//console.log(data);
		},
		// staleTime: 5 * (60 * 1000), // 5 mins
		// cacheTime: 10 * (60 * 1000), // 10 mins
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
					<h5>Ha ocurrido un error</h5>
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
							<th className="p4 highlight">Contacto</th>
							<th className="p4 highlight">Ult. Contacto</th>
							<th className="p4 highlight">Estado</th>
							<th className="p4 highlight">Asesor</th>
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
						{leads.data.map((lead: any, index: number) => {
							return (
								<LeadRow
									// key={lead.id}
									key={lead.id}
									id={lead.id || ""}
									name={
										generateLeadNickname(
											lead.firstName,
											lead.lastName
										) || ""
									}
									user={lead.User.firstAndLastName || "-"}
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
