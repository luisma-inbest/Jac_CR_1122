import React from "react";

import { UserRow } from "@/components/UI/molecules";
import { UserRowProps } from "@/components/UI/molecules/userRow";

interface UsersTableProps {
    users: UserRowProps[];
}

export const UsersTable: React.FunctionComponent<UsersTableProps> = (props) => {
    const userRowElements = props.users.map(user => <UserRow
        name={user.name}
        position={user.position}
        area={user.area}
        manager={user.manager}
        email={user.email}
        role={user.role}
    />);

    return <table>
        <thead>
            <tr>
                <th>
                    Nombre y Puesto
                </th>
                <th>
                    Área y Gerente
                </th>
                <th>
                    Correo
                </th>
                <th>
                    Rol de Usuario
                </th>
            </tr>
        </thead>
        <tbody>
            {userRowElements}
        </tbody>
    </table>;
};
