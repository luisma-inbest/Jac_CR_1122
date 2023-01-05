import {carExample, IconArrow} from "@/assets";
import React from "react";

import styles from "./ButtonProduct.module.css";

export const ButtonProduct = () => {
	return (
		<div className={` ${styles.card}`}>
			<div className={` ${styles.cardContent}`}>
				<p className="p2 bold no-margin">Lorem, ipsum dolor.</p>
				<p className="p3 secondary no-margin">Lorem, ipsum dolor.</p>
			</div>
			<div className={`${styles.iconContainer}`}>
				<IconArrow color="#000" size="100%" rotate="0" />
			</div>
		</div>
	);
};
