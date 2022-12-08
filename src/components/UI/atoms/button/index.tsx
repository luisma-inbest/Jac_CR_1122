import React from "react";
import styles from "./Button.module.css";

interface Props {
	text: string;
	func: any;
}

export const Button = (props: Props) => {
	return (
		<button className={styles.button} onClick={() => props.func()}>
			{props.text}
		</button>
	);
};
