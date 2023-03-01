import React, { useState } from "react";
import styles from "./Input.module.css";

type StateProps = {
	setValue: (value: string) => void;
};
type ReducerProps = {
	dispatch: any;
	dispType: string;
};

type ConditionalProps =
	| { type: "state"; params: StateProps }
	| { type: "reducer"; params: ReducerProps };

type Props = {
	placeholder: string;
	value: string;
	inputType: string;
} & ConditionalProps;

export const Input = (props: Props) => {
	function handleChane(e: any) {
		switch (props.type) {
			case "reducer":
				props.params.dispatch({
					type: props.params.dispType,
					value: e.target.value,
				});
				break;
			default:
				props.params.setValue!(e.target.value);
				break;
		}
	}

	return (
		<div className={styles.inputContain}>
			<input
				className={styles.input}
				type={props.inputType}
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
