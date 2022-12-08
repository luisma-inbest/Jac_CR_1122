import React, {useState} from "react";
import {IconArrow} from "@/assets";

import styles from "./CardFunnel.module.css";
import {Button} from "@/components/UI/atoms";

export const CardFunnel = () => {
	const [fullContainer, setFullContainer] = useState(false);

	function cardHandler() {
		console.log("cardHandler");
		setFullContainer(!fullContainer);
	}

	const sendWhats = () => {
		console.log("button activated..");
	};

	return (
		<div className={`${styles.card} ${fullContainer ? styles.fullCard : ""}`}>
			<div className={`mb-3 ${styles.cardContainer}`}>
				<p className="p4 no-margin bold">Enviar Whatsapp</p>
				<span
					className={`${styles.iconContainer} ${
						fullContainer ? styles.rotate : ""
					}`}
					onClick={() => cardHandler()}
				>
					<IconArrow size="100%" color="#000" />
				</span>
			</div>
			<div className={styles.cardContainer}>
				<p className="p3 link no-margin">Omitir</p>
				<Button text="Enviar Mensaje" func={sendWhats} />
			</div>
		</div>
	);
};
