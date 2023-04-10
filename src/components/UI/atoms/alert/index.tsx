import {
	IconAlertError,
	IconAlertInfo,
	IconAlertSuccess,
	IconAlertWarning,
} from "@/assets";
import React, { useEffect, useRef } from "react";
import styles from "./Alert.module.css";

interface Props {
	type: "success" | "error" | "info" | "warning";
	title: string;
	text: string;
}

function iconSelector(type: string) {
	switch (type) {
		case "success":
			return <IconAlertSuccess size={50} color="#04CC00" />;
		case "error":
			return <IconAlertError size={50} color="#D63944" />;
		case "info":
			return <IconAlertInfo size={50} color="#3086EB" />;
		case "warning":
			return <IconAlertWarning size={50} color="#FFC020" />;
		default:
			return;
	}
}

function pickStyle(type: string) {
	switch (type) {
		case "success":
			return styles.success;
		case "error":
			return styles.error;
		case "info":
			return styles.info;
		case "warning":
			return styles.warning;
		default:
			return;
	}
}

export const Alert = (props: Props) => {
	const myAlert = useRef<HTMLDivElement>(null);

	function kill() {
		myAlert.current!.remove();
	}

	useEffect(() => {
		const init = setTimeout(() => {
			// console.log("mostrando...");
			myAlert.current!.classList.add(styles.show);
		}, 100);
		const hide = setTimeout(() => {
			// console.log("escondiendo...");
			myAlert.current!.classList.remove(styles.show);
		}, 5000);
		const kill = setTimeout(() => {
			// console.log("eliminando...");
			myAlert.current!.remove();
		}, 5500);
	}, []);

	return (
		<div
			ref={myAlert}
			className={`${styles.toast} ${pickStyle(props.type)}`}
		>
			<div className={styles.alertContent}>
				{iconSelector(props.type)}
				<div className={styles.alertInfo}>
					<h5 className="bold no-margin">{props.title}</h5>
					<p className="no-margin">{props.text}</p>
				</div>
			</div>

			<button onClick={kill}>&times;</button>
		</div>
	);
};
