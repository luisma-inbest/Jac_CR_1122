import React from "react";
import {CardFunnel} from "@/components/UI/atoms";

import styles from "./LeadFunnel.module.css";

export const LeadFunnel = () => {
	return (
		<div className={styles.funnelTab}>
			<p className="p3 secondary bold">1er Contacto</p>
			<CardFunnel type="whats" drop={true} />
			<CardFunnel type="phone" drop={true} />
			<CardFunnel type="check" drop={false} />
			<CardFunnel type="feedback" drop={false} />
		</div>
	);
};
