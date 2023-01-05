import {carExample} from "@/assets";
import React from "react";

import styles from "./CardProduct.module.css";

export const CardProduct = () => {
	return (
		<div className={` ${styles.card}`}>
			<div className={`${styles.imageContainer}`}>
				<img src={carExample} alt="carro" className={`${styles.cardImage}`} />
			</div>
			<div className={` ${styles.cardContent}`}>
				<h5 className="bold no-margin">Modelo</h5>
				<p className="p2 no-margin">Lorem, ipsum dolor.</p>
			</div>
		</div>
	);
};
