import React, {useState} from "react";
import styles from "./Input.module.css";

interface Props {
	placeholder: string;
	value: string;
	setValue?: (value: string) => void;
	type?: string;
	dispatch?: any;
	dispType?: string;
}

export const Input = (props: Props) => {
	function handleChane(e: any) {
		switch (props.type) {
			case "reducer":
				props.dispatch({type: props.dispType, value: e.target.value});
				break;
			default:
				props.setValue!(e.target.value);
				break;
		}
	}

	return (
		<div className={styles.inputContain}>
			<input
				className={styles.input}
				type="text"
				value={props.value}
				onChange={(e) => handleChane(e)}
				name="fname"
				autoComplete="on"
			/>
			<label className={styles.placeholderText}>
				<div className={styles.text}> {props.placeholder} </div>
			</label>
		</div>
	);
};
