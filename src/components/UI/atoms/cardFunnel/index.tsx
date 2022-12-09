import React, {useState} from "react";
import {IconArrow} from "@/assets";

import styles from "./CardFunnel.module.css";

import {
	iconSelector,
	textSelector,
	buttonHandler,
	buttonTextHandler,
	dropHandler,
} from "./functions";

interface Props {
	type: string;
	drop: boolean;
}

export const CardFunnel = (props: Props) => {
	const [fullContainer, setFullContainer] = useState(false);
	function cardHandler() {
		if (props.drop) {
			setFullContainer(!fullContainer);
		}
	}

	return (
		<div className={`${styles.card} ${fullContainer ? styles.fullCard : ""}`}>
			<div className={`mb-3 ${styles.cardContainer}`}>
				<div className={styles.left} onClick={() => cardHandler()}>
					<span
						className={`${styles.iconContainer} `}
						onClick={() => cardHandler()}
					>
						{iconSelector(props.type)}
					</span>
					<p className="p4 no-margin bold">{textSelector(props.type)}</p>
				</div>
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
				{dropHandler(props.drop, props.type)}
			</div>
		</div>
	);
};
