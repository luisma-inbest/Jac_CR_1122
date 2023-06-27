import React, { useContext } from "react";

import { UserRow } from "@/components/UI/molecules";
import { UserRowProps } from "@/models";
import styles from "./UsersTable.module.css";

interface UsersTableProps {
	users: UserRowProps[];
}

export const UsersTable = (props: UsersTableProps) => {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th className={`p4 highlight text-left`}>
						Nombre y Puesto
					</th>
					<th className={`p4 highlight text-left`}>Área y Gerente</th>
					<th className={`p4 highlight text-left`}>Correo</th>
					<th className={`p4 highlight text-left`}>Rol de Usuario</th>
				</tr>
			</thead>
			<tbody className={styles.tableRow}>
				{/* Starts map with users */}
				{props.users.map((user, index) => (
					<UserRow
						key={index}
						nickname={user.nickname}
						position={user.position}
						area={user.area}
						manager={user.manager}
						email={user.email}
						role={user.role}
						UserRole={user.UserRole}
					/>
				))}
				{/* Ends map with users */}
			</tbody>
		</table>
	);
};
