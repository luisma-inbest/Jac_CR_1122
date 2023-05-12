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

const Card2 = () => {
	return (
		<>
			<div className={`${styles.titleContainer}`}>
				<div className={styles.iconContainer}>
					<IconSells size="100%" color="#000" />
				</div>
				<h2 className={`semi-bold`}> Leads por Modelo</h2>
			</div>
			<div className="row">
				<div className="col-xs-12">
					<StackedBarChartLabel
						title="Auto"
						models={["modelo1", "modelo2", "modelo3", "modelo4"]}
						amounts={[25, 50, 55, 100]}
						percentages={[5, 15, 25, 30]}
					/>
				</div>
				<div className="col-xs-12">
					<StackedBarChartLabel
						title="SUV’s"
						models={[
							"modelo1",
							"modelo2",
							"modelo3",
							"modelo4",
							"modelo5",
						]}
						amounts={[25, 50, 55, 70, 80]}
						percentages={[5, 15, 25, 30, 20]}
					/>
				</div>
				<div className="col-xs-12">
					<StackedBarChartLabel
						title="Electricos"
						models={["modelo1", "modelo2", "modelo3", "modelo4"]}
						amounts={[25, 50, 55, 100]}
						percentages={[5, 15, 25, 30]}
					/>
				</div>
				<div className="col-xs-12">
					<StackedBarChartLabel
						title="Pickups"
						models={["modelo1", "modelo2", "modelo3", "modelo4"]}
						amounts={[25, 50, 55, 100]}
						percentages={[5, 15, 25, 30]}
					/>
				</div>
				<div className="col-xs-12">
					<StackedBarChartLabel
						title="Chasis Cabina"
						models={["modelo1", "modelo2", "modelo3", "modelo4"]}
						amounts={[25, 50, 55, 100]}
						percentages={[5, 15, 25, 30]}
					/>
				</div>
				<div className="col-xs-12">
					<StackedBarChartLabel
						title="VAN"
						models={["modelo1", "modelo2", "modelo3", "modelo4"]}
						amounts={[25, 50, 55, 100]}
						percentages={[5, 15, 25, 30]}
					/>
				</div>
			</div>
		</>
	);
};

export default Card2;
