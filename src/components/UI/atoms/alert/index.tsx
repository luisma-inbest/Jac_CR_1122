import React from "react";
import styles from "./Alert.module.css";

interface Props {
	type: "success" | "error" | "info" | "warning";
	title: string;
	text: string;
}

export const Alert = (props: Props) => {
	return (
		<div className={styles.wrapper}>
			<div className={`${styles.toast} ${styles.success}`}>
				<div className={styles.container1}>
					<i className="fas fa-check-circle"></i>
				</div>
				<div className={styles.container2}>
					<p>Exito</p>
					<p>Your changes are saved successfully</p>
				</div>
				<button>&times;</button>
			</div>
			<div className={`${styles.toast} ${styles.error}`}>
				<div className={styles.container1}>
					<i className="fas fa-times-circle"></i>
				</div>
				<div className={styles.container2}>
					<p>Error</p>
					<p>Error has occured while saving changes.</p>
				</div>
				<button>&times;</button>
			</div>
			<div className={`${styles.toast} ${styles.info}`}>
				<div className={styles.container1}>
					<i className="fas fa-info-circle"></i>
				</div>
				<div className={styles.container2}>
					<p>Info</p>
					<p>New settings available on your account.</p>
				</div>
				<button>&times;</button>
			</div>
			<div className={`${styles.toast} ${styles.warning}`}>
				<div className={styles.container1}>
					<i className="fas fa-exclamation-circle"></i>
				</div>
				<div className={styles.container2}>
					<p>Alerta</p>
					<p>Username you have entered is invalid.</p>
				</div>
				<button>&times;</button>
			</div>
		</div>
	);
};
