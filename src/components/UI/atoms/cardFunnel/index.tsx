import React, { useState } from "react";
import { IconArrow } from "@/assets";

import styles from "./CardFunnel.module.css";

import { Button } from "../button";

interface Props {
	type: "whats" | "phone" | "email" | "feedback" | "reject" | "check";
	mainText: string;
	buttonText: string;
	twoButtons: boolean;
	icon: any;
	func?: () => void;
}

//TODO: para la pop up voy a necesitar un estado global

export const CardFunnel = (props: Props) => {
	const [fullContainer, setFullContainer] = useState(false);
	function cardHandler() {
		setFullContainer(!fullContainer);
	}

	return (
		<div
			className={`${styles.card} ${fullContainer ? styles.fullCard : ""}`}
		>
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
			<div className={styles.cardContainer}>
				<p className="p3 link no-margin">Registrar</p>
				<Button
					text={props.buttonText}
					func={props.func}
					full={false}
				/>
			</div>
		</div>
	);
};
