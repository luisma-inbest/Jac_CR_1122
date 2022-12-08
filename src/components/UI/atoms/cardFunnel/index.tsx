import React, {useState} from "react";
import {IconArrow} from "@/assets";

import styles from "./CardFunnel.module.css";

export const CardFunnel = () => {
	const [rotate, setRotate] = useState("0");

	function cardHandler() {
		console.log("cardHandler");
		setRotate("90");
	}

	return (
		<div className={`${styles.card}`} onClick={() => cardHandler()}>
			<div className={styles.cardContainer}>
				<p className="p4 no-margin">Enviar Whatsapp</p>
				<span className={styles.iconContainer}>
					<IconArrow size="100%" color="#000" rotate={rotate} />
				</span>
			</div>
			<div className={styles.cardContainer}>
				<p className="p3 link no-margin">Omitir</p>
				<div className="p3 no-margin">Enviar Mensaje</div>
			</div>
		</div>
	);
};
