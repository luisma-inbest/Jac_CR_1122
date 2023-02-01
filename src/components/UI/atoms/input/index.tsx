import React, {useState} from "react";
import styles from "./Input.module.css";

interface Props {
	placeholder: string;
	value: string;
	setValue: (value: string) => void;
}

export const Input = (props: Props) => {
	return (
		<div className={styles.inputContain}>
			<input
				className={styles.input}
				type="text"
				id="fname"
				value={props.value}
				onChange={(e) => props.setValue(e.target.value)}
				name="fname"
				autoComplete="off"
			/>
			<label className={styles.placeholderText}>
				<div className={styles.text}> {props.placeholder} </div>
			</label>
		</div>
	);
};
