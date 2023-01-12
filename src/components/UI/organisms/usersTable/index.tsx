import React from "react";

import { UserRow } from "@/components/UI/molecules";
import { UserRowProps } from "@/components/UI/molecules/userRow";
import styles from "./UsersTable.module.css";

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

    return <table className= {styles.table}>
        <thead>
            <tr>
                <th className={`p4 highlight ${styles.center}`}>
                 Nombre y Puesto
                </th>
                <th className={`p4 highlight ${styles.center}`}>
                    Área y Gerente
                </th>
                <th className={`p4 highlight ${styles.center}`}>
                    Correo
                </th>
                <th className={`p4 highlight ${styles.center}`}>
                    Rol de Usuario
                </th>
            </tr>
        </thead>
        <tbody className= {styles.tableRow}>
            
            {userRowElements}
            
        </tbody>
    </table>;
};
