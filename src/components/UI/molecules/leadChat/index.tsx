import React from "react";
import styles from "./LeadChat.module.css";

export const LeadChat = () => {
	return (
		<div className={styles.frameContainer}>
			<iframe width={500} height={500} src="https://web.whatsapp.com/"></iframe>
		</div>
	);
};
