import React from "react";
import {CardFunnel} from "@/components/UI/atoms";

import styles from "./LeadFunnel.module.css";

export const LeadFunnel = () => {
	return (
		<div className={styles.funnelTab}>
			<p className="p3 secondary ">1er Contacto</p>
			<CardFunnel />
		</div>
	);
};
