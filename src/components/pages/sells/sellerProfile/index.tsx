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

export const SellerProfile = () => {
	const salesData: PieChartLabelProps = {
		labels: [
			"Primer Contacto",
			"Datos Confirmados",
			"Seguimiento",
			"En Venta",
		],
		amounts: [14, 25, 30, 12],
		percentages: [14, 25, 30, 12],
		colors: ["#8dbdec", "#eeeeee", "#0d9d00", "#ff0000"],
	};

	return (
		<div className={`${styles.mainContainer}`}>
			{/* col */}
			<div className={` ${styles.cardContainer} ${styles.card1}`}>
				<div className={`globalPadding card `}>
					<h2>Ventas</h2>
				</div>
			</div>

			{/* col */}
			<div
				className={` ${styles.cardContainer} ${styles.sideBar} ${styles.card2}`}
			>
				<AgendaPreview />
			</div>

			{/* col */}
			<div className={` ${styles.cardContainer} ${styles.card3}`}>
				<div className={`globalPadding card`}>
					<h2>Ventas</h2>
				</div>
			</div>

			{/* col */}
			<div className={` ${styles.cardContainer} ${styles.card4}`}>
				<div className={`globalPadding card`}>
					<h2>Ventas</h2>
				</div>
			</div>

			{/* Fin */}
		</div>
	);
};
