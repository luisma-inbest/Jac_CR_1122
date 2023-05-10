import { IconAdd } from "@/assets";
import React from "react";
import styles from "./ButtonFields.module.css";

interface Props {
	text: string;
	func: any;
}

export const ButtonFields = (props: Props) => {
	const highlight = getComputedStyle(
		document.documentElement
	).getPropertyValue("--highlight");
	return (
		<button
			className={styles.fullButton}
			type="button"
			onClick={() => props.func()}
		>
			<IconAdd size="90%" color={highlight} />
			{props.text}
		</button>
	);
};
