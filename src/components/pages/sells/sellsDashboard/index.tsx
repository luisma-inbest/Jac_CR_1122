import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {BarChart, PieChart, StyledInputText} from "@/components/UI/atoms";
import {Tabs} from "@/components/templates";
import styles from "./Sells.module.css";

export const SellsDashboard = () => {
	return (
		<div className={`contentVerticalPadding ${styles.mainContainer}`}>
			<div className="row">
				{/* col */}
				<div className={`col-xs-12 col-md-6 ${styles.cardContainer}`}>
					<div className={`globalPadding ${styles.card}`}>
						<PieChart />
					</div>
				</div>

				{/* col */}
				<div className={`col-xs-12 col-md-6 ${styles.cardContainer}`}>
					<div className={`globalPadding ${styles.card}`}>
						<h1>Aquí van las gráficas </h1>
						{/* <Bar data={chartData} /> */}
						<BarChart />
					</div>
				</div>

				{/* col */}
				<div className={`col-xs-12 ${styles.cardContainer}`}>
					<div className={`globalPadding ${styles.card}`}>
						<h1>Aquí van las gráficas </h1>
					</div>
				</div>
			</div>
		</div>
	);
};
