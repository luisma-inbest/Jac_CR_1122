import React from "react";
import {Tabs} from "@/components/templates";
import {UsersTable} from "@/components/UI/organisms/usersTable";
import {UserRowProps} from "@/components/UI/molecules/userRow";

const getUsersMock = () => {
	const user: UserRowProps = {
		name: "Nombre del colaborador",
		position: "Puesto del colaborador",
		area: "Nombre del área",
		manager: "Nombre del gerente",
		email: "nombreusuario@oag.com",
		role: "Administrador Maestro",
	};

	return [user, user, user, user];
};

export const Users = () => {
	const users = getUsersMock();

	return (
		<div className="row">
			<div className="col-xs">
				<div className="box">
					<UsersTable users={users} />,
				</div>
			</div>
			{/* <div className="col-xs-6">
				botones y espacio en blanco
			</div> */}
		</div>
	);
};
