import React from "react";
import {Tabs} from "@/components/templates";
import {UsersTable} from "@/components/UI/organisms/usersTable";
import {Button} from "@/components/UI/atoms";
import {useNavigate} from "react-router-dom";

export interface UserRowProps {
	name: string;
	position: string;
	area: string;
	manager: string;
	email: string;
	role: string;
}

const getUsersMock = () => {
	const user1: UserRowProps = {
		name: "Nombre del colaborador",
		position: "Puesto del colaborador",
		area: "Nombre del área",
		manager: "Nombre del gerente",
		email: "nombreusuario@oag.com",
		role: "Administrador Maestro",
	};
	const user2: UserRowProps = {
		name: "Nombre del colaborador",
		position: "Puesto del colaborador",
		area: "Nombre del área",
		manager: "Nombre del gerente",
		email: "nombreusuario@oag.mx",
		role: "Administrador Maestro",
	};

	return [user1, user2];
};

export const Users = () => {
	const users = getUsersMock();
	const navigate = useNavigate();

	return (
		<div className="row">
			<div className="col-xs-12">
				<UsersTable users={users} />
			</div>
			<div className="col-xs-12 mt-5">
				<Button
					text="Registrar nuevo usuario"
					full={true}
					func={() => navigate("/admin/register")}
				/>
			</div>
		</div>
	);
};
