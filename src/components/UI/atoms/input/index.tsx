import React, {useState} from "react";
import styles from "./Input.module.css";

interface Props {
	placeholder: string;
}

export const Input = (props: Props) => {
	const [value, setValue] = useState("");
	return (
		<div className={styles.inputContain}>
			<input
				className={styles.input}
				type="text"
				id="fname"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				name="fname"
				autoComplete="off"
			/>
			<label className={styles.placeholderText}>
				<div className={styles.text}> {props.placeholder} </div>
			</label>
		</div>
	);
};
