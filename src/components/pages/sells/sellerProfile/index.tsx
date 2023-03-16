import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	BarChart,
	CardProduct,
	ComparativeBarChart,
} from "@/components/UI/atoms";
import {
	PieChartLabel,
	SalesInfoCard,
	StackedBarChartLabel,
} from "@/components/UI/molecules";
import { Tabs } from "@/components/templates";
import styles from "./SellerProfile.module.css";
import { IconSells } from "@/assets";
import { PieChartLabelProps } from "@/components/UI/molecules/pieChartLabel";
import { AgendaPreview } from "@/components/UI/organisms";

const getTitleElement = (titleText: string) => {
	return (
		<div className="row">
			<div className="col">
				<div className={`box ${styles.titleContainer}`}>
					<div className={styles.iconContainer}>
						<IconSells size="100%" color="black" />
					</div>
					<h2 className={styles.title}>{titleText}</h2>
				</div>
			</div>
		</div>
	);
};

export const SellerProfile = () => {
	const salesData: PieChartLabelProps = {
		labels: [
			"Primer Contacto",
			"Datos Confirmados",
			"Seguimiento",
			"En Venta",
		],
		amounts: [14, 25, 30, 12],
	};

	return (
		<div className={`contentVerticalPadding ${styles.mainContainer}`}>
			{/* col */}
			<div className={` ${styles.cardContainer} ${styles.card1}`}>
				<div className={`globalPadding ${styles.card} `}>
					{getTitleElement("Ventas")}
				</div>
			</div>

			{/* col */}
			<div
				className={` ${styles.cardContainer} ${styles.sideBar} ${styles.card2}`}
			>
				<div className={`globalPadding ${styles.card}`}>
					{getTitleElement("Agenda")}
					<AgendaPreview />
				</div>
			</div>

			{/* col */}
			<div className={` ${styles.cardContainer} ${styles.card3}`}>
				<div className={`globalPadding ${styles.card}`}>
					{getTitleElement("Lorem ipsum dolor")}
				</div>
			</div>

			{/* col */}
			<div className={` ${styles.cardContainer} ${styles.card4}`}>
				<div className={`globalPadding ${styles.card}`}>
					{getTitleElement("Lorem ipsum dolor")}
				</div>
			</div>

			{/* Fin */}
		</div>
	);
};
