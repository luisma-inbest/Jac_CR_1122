import React from "react";

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
        <td>
            <span className="row">{props.name}</span>
            <span className="row">{props.position}</span>
        </td>
        <td>
            <span className="row">{props.area}</span>
            <span className="row">{props.manager}</span>
        </td>
        <td>
            <span className="row">{props.email}</span>
        </td>
        <td>
            <span className="row">{props.role}</span>
        </td>
    </tr>;
};
