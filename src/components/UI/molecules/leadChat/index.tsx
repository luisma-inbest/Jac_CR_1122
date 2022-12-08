import React from "react";
import styles from "./LeadChat.module.css";

export const LeadChat = () => {
	return (
		<div className={styles.frameContainer}>
			<iframe className={styles.frame} src="https://web.whatsapp.com/"></iframe>
		</div>
	);
};
