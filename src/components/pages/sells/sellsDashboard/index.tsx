import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {BarChart, PieChart, StyledInputText} from "@/components/UI/atoms";
import {Tabs} from "@/components/templates";
import styles from "./Sells.module.css";

export const SellsDashboard = () => {
	return (
		<div className={`contentVerticalPadding ${styles.mainContainer}`}>
			{/* col */}
			<div className={` ${styles.cardContainer} ${styles.card1}`}>
				<div className={`globalPadding ${styles.card}`}>
					<PieChart />
				</div>
			</div>

			{/* col */}
			<div
				className={` ${styles.cardContainer} ${styles.sideBar} ${styles.card2}`}
			>
				<div className={`globalPadding ${styles.card}`}>
					<h1>Aquí van las gráficas </h1>
					{/* <Bar data={chartData} /> */}
					<BarChart axis="y" />
				</div>
			</div>

			{/* col */}
			<div className={` ${styles.cardContainer} ${styles.card3}`}>
				<div className={`globalPadding ${styles.card}`}>
					<h1>Aquí van las gráficas </h1>
					<BarChart axis="x" />
				</div>
			</div>
		</div>
	);
};
