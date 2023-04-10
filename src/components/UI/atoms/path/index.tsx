import React from "react";
import styles from "./Path.module.css";
import { IconArrow } from "@/assets";

export const Path = () => {
	return (
		<ul className={styles.routeContainer}>
			<li>
				{/* <p className={`p3 semi-bold black no-margin`}>Home</p> */}
			</li>
			<li className={styles.iconContainer}>
				{/* <IconArrow color="#000" size="100%" rotate="0" /> */}
			</li>
		</ul>
	);
};
