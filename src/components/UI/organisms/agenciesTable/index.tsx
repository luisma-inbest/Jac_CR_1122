import React, {useContext} from "react";

import {AgencyRow} from "@/components/UI/molecules";
import styles from "./AgenciesTable.module.css";
import {AgencyRowProps} from "@/models";

interface UsersTableProps {
	agencies: AgencyRowProps[];
}

export const AgenciesTable = (props: UsersTableProps) => {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th className={`p4 highlight text-left`}>Nombre Agencia</th>
					<th className={`p4 highlight text-left`}>Razón Social</th>
					<th className={`p4 highlight text-left`}>Gerente General</th>
					<th className={`p4 highlight text-left`}>Teléfono</th>
					<th className={`p4 highlight text-left`}>Correo</th>
				</tr>
			</thead>
			<tbody className={styles.tableRow}>
				{/* Starts map with users */}
				{props.agencies.map((agency, index) => (
					<AgencyRow
						key={index}
						name={agency.name}
						state={agency.state}
						manager={agency.manager}
						email={agency.email}
						phone={agency.phone}
						active={agency.active}
						businessName={agency.businessName}
					/>
				))}
				{/* Ends map with users */}
			</tbody>
		</table>
	);
};
