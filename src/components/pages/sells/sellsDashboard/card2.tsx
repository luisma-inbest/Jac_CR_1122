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
				<h2 className={styles.title}>Modelos</h2>
			</div>
			<div className="row">
				<div className="col-xs-12">
					<div className="box">
						<StackedBarChartLabel
							title="Eléctricos"
							data={[25, 35, 40, 100]}
						/>
					</div>
				</div>
				<div className="col-xs-12">
					<div className="box">
						<StackedBarChartLabel
							title="Comerciales"
							data={[25, 50, 75, 100]}
						/>
					</div>
				</div>
				<div className="col-xs-12">
					<div className="box">
						<StackedBarChartLabel
							title="SUV’s"
							data={[25, 50, 55, 100]}
						/>
					</div>
				</div>
			</div>
			<div className={`row ${styles.carListContainer}`}>
				<div className="col-xs-12">
					<div className="box">
						<h3 className={styles.subTitle}>
							Orci senectus posuere id
						</h3>
					</div>
				</div>
				{Array.from(Array(4)).map(() => {
					return (
						<div className="col-xs-12">
							<div className="box">
								<CardProduct />
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Card2;
