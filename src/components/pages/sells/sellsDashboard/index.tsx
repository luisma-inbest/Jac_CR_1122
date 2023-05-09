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
import styles from "./SellsDashboard.module.css";
import { IconSells } from "@/assets";
import Card1 from "./card1";

const getTitleElement = (titleText: string) => {
	return (
		<div className={`${styles.titleContainer}`}>
			<div className={styles.iconContainer}>
				<IconSells size="100%" color="#000" />
			</div>
			<h2 className={styles.title}>{titleText}</h2>
		</div>
	);
};

export const SellsDashboard = () => {
	return (
		<div className={`contentVerticalPadding ${styles.mainContainer}`}>
			{/* col */}
			<div className={` ${styles.cardContainer} ${styles.card1}`}>
				<div className={`globalPadding ${styles.card} `}>
					<Card1 />
				</div>
			</div>

			{/* col */}
			<div
				className={` ${styles.cardContainer} ${styles.sideBar} ${styles.card2}`}
			>
				<div className={`globalPadding ${styles.card}`}></div>
			</div>

			{/* col */}
			<div className={` ${styles.cardContainer} ${styles.card3}`}>
				<div className={`globalPadding ${styles.card}`}></div>
			</div>

			{/* col */}
			<div className={` ${styles.cardContainer} ${styles.card4}`}>
				<div className={`globalPadding ${styles.card}`}></div>
			</div>
		</div>
	);
};
