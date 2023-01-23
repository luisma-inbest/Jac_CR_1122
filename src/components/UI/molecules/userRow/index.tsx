import React from "react";
import styles from "./UserRow.module.css"
export interface UserRowProps {
    name: string;
    position: string;
    area: string;
    manager: string;
    email: string;
    role: string;
}

export const UserRow: React.FunctionComponent<UserRowProps> = (props) => {
    return <tr>
        <td className={styles.center}>
            <span className="p3 semi-bold no-margin">{props.name}</span>
            <br />
            <span className="p4 secondary no-margin">{props.position}</span>
        </td>
        <td className={styles.center}>
            <span className="p3 semi-bold no-margin">{props.area}</span>
            <br />
            <span className="p4 secondary no-margin">{props.manager}</span>
        </td>
        <td className={styles.center}>
            <span className="p4 secondary no-margin">{props.email}</span>
        </td>
        <td className={styles.center}>
            <span className="p4 secondary no-margin">{props.role}</span>
        </td>
    </tr>;
};
