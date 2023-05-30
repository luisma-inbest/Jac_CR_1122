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
import styles from "./SellsCharts.module.css";
import { IconSells } from "@/assets";
import { PieChartLabelProps } from "@/components/UI/molecules/pieChartLabel";

const Card4 = () => {
	const salesData: PieChartLabelProps = {
		labels: ["Congelados", "Futura Venta", "Funnel"],
		amounts: [10, 14, 54],
		percentages: [15, 35, 50],
		colors: ["#8dbdec", "#eeeeee", "#0d9d00"],
	};
	return (
		<>
			<div className={`${styles.titleContainer}`}>
				<div className={styles.iconContainer}>
					<IconSells size="100%" color="#000" />
				</div>
				<h4 className={`semi-bold`}>Estados Leads</h4>
			</div>
			<div className="row">
				<div className={`col-xs-12`}>
					<h1 className="bold">578 Leads</h1>
				</div>
			</div>
			<div>
				<PieChartLabel
					labels={salesData.labels}
					amounts={salesData.amounts}
					percentages={salesData.percentages}
					colors={salesData.colors}
				/>
			</div>
		</>
	);
};

export default Card4;
