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

const Card1 = () => {
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
		<>
			<div className={`${styles.titleContainer}`}>
				<div className={styles.iconContainer}>
					<IconSells size="100%" color="#000" />
				</div>
				<h2 className={`semi-bold`}>Funnel Ventas</h2>
			</div>
			<div className="row">
				<div className="col">
					<p className={``}>
						Lorem ipsum dolor sit amet consectetur. Volutpat integer
						dictum curabitur elementum. Orci senectus posuere id sed
						vulputate ipsum molestie sit adipiscing. Facilisis arcu
						et quis odio sit.
					</p>
				</div>
			</div>

			{/* Starts the charts and data  */}
			{/* chart row  */}
			<div className="row">
				<div className="col-xs-12 col-md-6">
					<PieChartLabel
						labels={salesData.labels}
						amounts={salesData.amounts}
					/>
				</div>

				{/* data row */}
				<div className="col-xs-12 col-md-6">
					<div className="row">
						<div className="col-xs-12 col-sm-8 col-lg-6">
							<div className={`${styles.infoContainer}`}>
								<h6 className={`highlight`}>
									Cantidad de ventas
								</h6>
								<h1 className={`bold`}>$12</h1>
								<p className={`p3 secondary`}>Rango de fecha</p>
							</div>
						</div>
						<div className="col-xs-12 col-md-8 col-lg-7">
							<div className={`${styles.infoContainer}`}>
								<h6 className={`highlight`}>Total de ventas</h6>
								<h1 className={`bold`}>$12,000,000</h1>
								<p className={`p3 secondary`}>Rango de fecha</p>
							</div>
						</div>
						<div className="col-xs-12 col-md-6">
							<div className={`${styles.infoContainer}`}>
								<h6 className={`highlight`}>Mis Leads</h6>
								<h1 className={`bold`}>12</h1>
								<p className={`p3 secondary`}>Rango de fecha</p>
							</div>
						</div>
						<div className="col-xs-12 col-md-6">
							<div className={`${styles.infoContainer}`}>
								<h6 className={`highlight`}>
									Tiempo de primer contacto
								</h6>
								<h1 className={`bold`}>12</h1>
								<p className={`p3 secondary`}>Rango de fecha</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card1;
