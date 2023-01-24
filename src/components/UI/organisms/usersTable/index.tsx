import React, {useContext} from "react";

import { UserRow } from "@/components/UI/molecules";
import { UserRowProps } from "@/components/UI/molecules/userRow";
import styles from "./UsersTable.module.css";
import { Button } from "@/components/UI/atoms";


interface UsersTableProps {
    users: UserRowProps[];
    text: string;
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
                <th className={`p4 highlight text-center`}>
                 Nombre y Puesto
                </th>
                <th className={`p4 highlight text-center`}>
                    Área y Gerente
                </th>
                <th className={`p4 highlight text-center`}>
                    Correo
                </th>
                <th className={`p4 highlight text-center`}>
                    Rol de Usuario
                </th>
            </tr>
        </thead>
        <tbody className= {styles.tableRow}>
            
            {userRowElements}
            
        </tbody>
        <div className={styles.fullButton}>
        < Button text="test" full={false} func={()=>console.log(":)")}/>  
        </div>
    </table>;
};
