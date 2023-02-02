import {AgencyRowProps} from "@/models/crmTypes";
import React from "react";
import {useNavigate} from "react-router-dom";
import styles from "./AgencyRow.module.css";

export const AgencyRow: React.FunctionComponent<AgencyRowProps> = (props) => {
	const navigate = useNavigate();
	function goToAgencie() {
		navigate(`1`);
		// navigate(`${ props.id }`);
	}

	return (
		<tr className={styles.row} key={props.email} onClick={() => goToAgencie()}>
			<td className={``}>
				<span className="p3 secondary no-margin">Solana</span>
			</td>
			<td className={``}>
				<span className="p4 secondary no-margin">Jalisco</span>
			</td>
			<td className={``}>
				<span className="p4 secondary no-margin">LuisMa</span>
			</td>
			<td className={``}>
				<span className="p4 secondary no-margin">+523387563489</span>
			</td>
			<td className={``}>
				<span className="p4 secondary no-margin">sola@jac.mx</span>
			</td>
		</tr>
	);
};
