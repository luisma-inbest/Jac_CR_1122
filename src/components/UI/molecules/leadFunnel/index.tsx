import React, {useState} from "react";
import {Button, CardFunnel} from "@/components/UI/atoms";
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
			<CardFunnel type="feedback" />

			<p className="p3 secondary bold mt-3">Confirmación Datos</p>
			<CardFunnel type="check" />

			<div className="mt-4">
				<Button text="Registrar Actividad" func={props.func} full={true} />
			</div>
		</div>
	);
};
