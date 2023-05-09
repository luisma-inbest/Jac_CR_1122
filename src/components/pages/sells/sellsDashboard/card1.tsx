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
						<div className="col-xs-12 col-md-6">
							<div className={`${styles.boxSeparator}`}>
								<SalesInfoCard
									title="Cantidad de ventas"
									amount="12"
									percentage="+2.5%"
									dateRange="Rango de fecha"
								/>
							</div>
						</div>
						<div className="col-xs-12 col-md-6">
							<div className={`box ${styles.boxSeparator}`}>
								<SalesInfoCard
									title="Total en Ventas"
									amount="$27632"
									percentage="+2.5%"
									dateRange="Rango de fecha"
								/>
							</div>
						</div>
						<div className="col-xs-12 col-md-6">
							<div className="box">
								<SalesInfoCard
									title="Mis Leads"
									amount="16"
									percentage="+2.5%"
									dateRange="Rango de fecha"
								/>
							</div>
						</div>
						<div className="col-xs-12 col-md-6">
							<div className="box">
								<SalesInfoCard
									title="Tiempo de primer contacto"
									amount="12 min"
									percentage="+2.5%"
									dateRange="Rango de fecha"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card1;
