import React, { useState } from "react";
import { IconArrow } from "@/assets";

import styles from "./CardFunnel.module.css";

import { Button } from "../button";

interface Props {
	mainText: string;
	icon: any;
	cardContent: any;
}

export const CardFunnel = (props: Props) => {
	const [fullContainer, setFullContainer] = useState(false);
	function cardHandler() {
		setFullContainer(!fullContainer);
	}

	return (
		<div
			className={`${styles.card} ${fullContainer ? styles.fullCard : ""}`}
		>
			{/* header  */}
			<div className={`mb-3 ${styles.cardContainer}`}>
				<div className={styles.left} onClick={() => cardHandler()}>
					<span
						className={`${styles.iconContainer} `}
						onClick={() => cardHandler()}
					>
						{props.icon}
					</span>
					<p className="p4 no-margin bold">{props.mainText}</p>
				</div>
				<span
					className={`${styles.iconContainer} ${
						fullContainer ? styles.rotate : ""
					}`}
					onClick={() => cardHandler()}
				>
					<IconArrow size="100%" color="#000" rotate="0" />
				</span>
			</div>
			{/* body from component */}
			{props.cardContent}
		</div>
	);
};
