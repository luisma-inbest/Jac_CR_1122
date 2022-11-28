import React from "react";
import styles from "./Input.module.css";

export const Input = () => {
	return (
		<div className={styles.inputContain}>
			<input
				className={styles.input}
				type="text"
				id="fname"
				name="fname"
				autoComplete="off"
				value=""
			/>
			<label className={styles.placeholderText}>
				<div className={styles.text}>PLaceholder Text</div>
			</label>
		</div>
	);
};
