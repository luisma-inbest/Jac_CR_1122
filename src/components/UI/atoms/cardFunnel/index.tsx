import React, { useState } from "react";
import { IconArrow } from "@/assets";

import styles from "./CardFunnel.module.css";

import { Button } from "../button";

interface Props {
	type: "clasic" | "ClasicWithText" | "checklist";
	mainText: string;
	buttonText: string;
	twoButtons: boolean;
	icon: any;
	func?: () => void;
}

//TODO: para la pop up voy a necesitar un estado global

export const CardFunnel = (props: Props) => {
	const [fullContainer, setFullContainer] = useState(false);
	function cardHandler() {
		setFullContainer(!fullContainer);
	}

	function contentPicker(type: string) {
		switch (type) {
			case "clasic":
				return (
					<div className={styles.cardContainerClasic}>
						<p className="p3 link no-margin">Registrar</p>
						<Button
							text={props.buttonText}
							func={props.func}
							full={false}
						/>
					</div>
				);
			case "ClasicWithText":
				return (
					<div className={styles.cardContainerClasic}>
						<p className="p3 link no-margin">Registrar</p>
						<Button
							text={props.buttonText}
							func={props.func}
							full={false}
						/>
					</div>
				);
			case "checklist":
				return (
					<div className={styles.cardContainerChecklist}>
						<div>
							<p className="p4 bold secondary">
								Envío de fichas técnicas
							</p>
							{/* <input type="checkbox" name="scales" checked={true} /> */}
							<input type="checkbox" name="scales" />
						</div>
						<div>
							<p className="p4 bold secondary">
								Muestra de Galería
							</p>
							{/* <input type="checkbox" name="scales" checked={true} /> */}
							<input type="checkbox" name="scales" />
						</div>
						<div>
							<p className="p3 link no-margin">Omitir</p>
						</div>
					</div>
				);
			default:
				return;
		}
	}

	return (
		<div
			className={`${styles.card} ${fullContainer ? styles.fullCard : ""}`}
		>
			{/* header  */}
			<div className={`mb-3 ${styles.cardContainer}`}>
				<div className={styles.left} onClick={() => cardHandler()}>
					<span
						className={`${styles.iconContainer} `}
						onClick={() => cardHandler()}
					>
						{props.icon}
					</span>
					<p className="p4 no-margin bold">{props.mainText}</p>
				</div>
				<span
					className={`${styles.iconContainer} ${
						fullContainer ? styles.rotate : ""
					}`}
					onClick={() => cardHandler()}
				>
					<IconArrow size="100%" color="#000" rotate="0" />
				</span>
			</div>
			{/* body  */}
			{contentPicker(props.type)}
		</div>
	);
};
