import React from "react";
import {CardFunnel} from "@/components/UI/atoms";

import styles from "./LeadFunnel.module.css";

export const LeadFunnel = () => {
	return (
		<div className={styles.funnelTab}>
			<p className="p3 secondary bold">1er Contacto</p>
			<CardFunnel type="whats" />
			<CardFunnel type="phone" />
			<CardFunnel type="check" />
			<CardFunnel type="feedback" />
		</div>
	);
};
