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

const Card3 = () => {
	return (
		<>
			<div className={`${styles.titleContainer}`}>
				<div className={styles.iconContainer}>
					<IconSells size="100%" color="#000" />
				</div>
				<h2 className={styles.title}>No sé</h2>
			</div>
			<div className={`row ${styles.paragraphSeparator}`}>
				<div className="col">
					<div className="box">
						<p className={styles.paragraph}>
							Lorem ipsum dolor sit amet consectetur. Volutpat
							integer dictum curabitur elementum. Orci senectus
							posuere id sed vulputate ipsum molestie sit
							adipiscing. Facilisis arcu et quis odio sit.
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-md-6">
					<div className="box">
						<ComparativeBarChart
							labels={["Lorem", "Lorem", "Lorem", "Lorem"]}
							data1={[100, 50, 80, 85]}
							data2={[65, 90, 55, 35]}
						/>
					</div>
				</div>

				<div className="col-xs-12 col-md-6">
					<div className="box">
						<div className="row">
							<div className="col-xs-12">
								<div className="box">
									<h3 className={styles.subTitle}>
										Orci senectus posuere id
									</h3>
									<p className={styles.paragraph}>
										Lorem ipsum dolor sit amet consectetur.
										Volutpat integer dictum curabitur
										elementum. Orci senectus posuere id
									</p>
								</div>
							</div>
							<div className="col-xs-12">
								<div className="box">
									<h3 className={styles.subTitle}>
										Orci senectus posuere id
									</h3>
									<p className={styles.paragraph}>
										Lorem ipsum dolor sit amet consectetur.
										Volutpat integer dictum curabitur
										elementum. Orci senectus posuere id
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card3;
