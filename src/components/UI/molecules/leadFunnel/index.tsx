import React, {useState} from "react";
import {CardFunnel} from "@/components/UI/atoms";
import {RegisterActivity} from "@/components/UI/molecules";
import styles from "./LeadFunnel.module.css";

interface Props {
	func: () => void;
}

export const LeadFunnel = (props: Props) => {
	return (
		<div className={styles.funnelTab}>
			<p className="p3 secondary bold">1er Contacto</p>
			<CardFunnel type="whats" />
			<CardFunnel type="phone" />
			<CardFunnel type="check" />
			<CardFunnel type="feedback" />
			<button onClick={props.func}>Click Me!</button>
		</div>
	);
};
