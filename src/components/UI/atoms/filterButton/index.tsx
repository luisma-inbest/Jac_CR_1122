import React from "react";
import styles from "./FilterButton.module.css";
import { IconFilter } from "@/assets";

interface Props {
	func: () => void;
}

export const FilterButton = (props: Props) => {
	const secondaryColor = getComputedStyle(document.body).getPropertyValue(
		"--secondary-text"
	);
	return (
		<div className={`${styles.buttonContainer}`} onClick={props.func}>
			<p className="p3 secondary bold">Filtrar</p>
			<IconFilter color={secondaryColor} size="100%" />
		</div>
	);
};
