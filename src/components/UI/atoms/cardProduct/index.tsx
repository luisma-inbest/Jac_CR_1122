import {carExample} from "@/assets";
import React from "react";

import styles from "./CardProduct.module.css";

//TODO: quitar los col-xs-12 y hacer flexbox para poder manejar la imagen
export const CardProduct = () => {
	return (
		<div className={`row ${styles.card}`}>
			<div className={`col-xs-4 ${styles.imageContainer}`}>
				<img src={carExample} alt="carro" className={`${styles.cardImage}`} />
			</div>
			<div className={`col-xs-8 ${styles.cardContent}`}>
				<h5 className="bold no-margin">Modelo</h5>
				<p className="p2 no-margin">Lorem, ipsum dolor.</p>
			</div>
		</div>
	);
};
