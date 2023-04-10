import {carExample} from "@/assets";
import {ProductRowProps} from "@/models/crmTypes";
import React from "react";
import {useNavigate} from "react-router-dom";
import styles from "./ProductRow.module.css";

export const ProductRow: React.FunctionComponent<ProductRowProps> = (props) => {
	const navigate = useNavigate();

	function goToAgencie() {
		navigate(`details/1`);
		// navigate(`${ props.id }`);
	}

	return (
		<tr className={styles.row} key={props.name} onClick={() => goToAgencie()}>
			<td className={styles.firstColumn}>
				<div
					className={`${styles.productStatus} ${
						props.active ? styles.active : styles.unactive
					}`}
				></div>
				<img src={carExample} alt="carro" className={`${styles.imagePrev}`} />
				<p className="p3 semi-bold no-margin">{props.name}</p>
			</td>
			<td className={``}>
				<p className="p4 secondary no-margin">{props.version}</p>
			</td>
			<td className={``}>
				<p className="p4 secondary no-margin">{props.model}</p>
			</td>
			<td className={``}>
				<p className="p4 secondary no-margin">{props.price}</p>
			</td>
		</tr>
	);
};
