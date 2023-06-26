import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import {
	BarChart,
	CardProduct,
	ComparativeBarChart,
	Loader,
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
import { useQuery } from "react-query";
import { AgencyChartAPI } from "@/apis";
import UserContext, { UserContextType } from "@/context/UserContext";
import { initial, reducer } from "../reducer";

interface Props {
	fields: any;
}

const Card1 = (props: Props) => {
	const { User } = useContext(UserContext) as UserContextType;

	const { isLoading, data, isError, error } = useQuery({
		queryKey: [
			`sellsDashboard-Funnel`,
			[User!.AgencyId, props.fields.refresh],
		],
		queryFn: () =>
			AgencyChartAPI.funnel(
				User!.AgencyId,
				props.fields.startDate,
				props.fields.endDate,
				props.fields.UserId
			),
		onSuccess: (data) => {
			console.log(data);
		},
		// staleTime: 5 * (60 * 1000), // 5 mins
		// cacheTime: 10 * (60 * 1000), // 10 mins
	});

	if (isLoading) {
		return (
			<div className="row">
				<div className={`col-xs-12 loaderContainer`}>
					<Loader />
				</div>
			</div>
		);
	}
	if (isError) {
		return (
			<div className="row">
				<div className={`col-xs-12 loaderContainer`}>
					<h5>Ha ocurrido un error</h5>
				</div>
			</div>
		);
	}

	const salesData: PieChartLabelProps = {
		labels: data.labels,
		amounts: data.amounts,
		percentages: data.percentages,
		colors: ["#0d9d00", "#8dbdec", "#e07d08", "#e9525d"],
	};

	return (
		<>
			<div className={`${styles.titleContainer}`}>
				<div className={styles.iconContainer}>
					<IconSells size="100%" color="#000" />
				</div>
				<h4 className={`semi-bold`}>Funnel Ventas</h4>
			</div>
			<div className="row mb-3">
				<div className="col">
					<p className={``}>Graficas Funnel de Ventas</p>
				</div>
			</div>

			{/* Starts the charts and data  */}
			{/* chart row  */}
			<div className="row">
				<div className="col-xs-12 col-md-6">
					<PieChartLabel
						labels={salesData.labels}
						amounts={salesData.amounts}
						percentages={salesData.percentages}
						colors={salesData.colors}
					/>
				</div>

				{/* data row */}
				<div className="col-xs-12 col-md-6">
					<div className={`${styles.detailsCard}`}>
						<div
							className={`${styles.infoContainer} ${styles.detailsComponent}`}
						>
							<h6 className={`highlight`}>Cantidad de ventas</h6>
							<h1 className={`bold`}>{data.TotalVentas}</h1>
							{/* <p className={`p3 secondary`}>Rango de fecha</p> */}
						</div>
						{/* <div
							className={` ${styles.infoContainer} ${styles.detailsComponent}`}
						>
							<h6 className={`highlight`}>Total de ventas</h6>
							<h1 className={`bold`}>$12,000,000</h1>
							<p className={`p3 secondary`}>Rango de fecha</p>
						</div> */}
						<div
							className={` ${styles.infoContainer} ${styles.detailsComponent}`}
						>
							<h6 className={`highlight`}>Mis Leads</h6>
							<h1 className={`bold`}>{data.TotalLeads}</h1>
							{/* <p className={`p3 secondary`}>Rango de fecha</p> */}
						</div>
						<div
							className={` ${styles.infoContainer} ${styles.detailsComponent}`}
						>
							<h6 className={`highlight`}>
								Tiempo de primer contacto
							</h6>
							<h1 className={`bold`}>{data.Time} -</h1>
							{/* <p className={`p3 secondary`}>Rango de fecha</p> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card1;
