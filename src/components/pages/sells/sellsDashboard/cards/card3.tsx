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
import { AgencyChartAPI } from "@/apis";
import { useQuery } from "react-query";
import UserContext, { UserContextType } from "@/context/UserContext";
import { initial, reducer } from "../reducer";

interface Props {
	fields: any;
}

const Card3 = (props: Props) => {
	const { User } = useContext(UserContext) as UserContextType;

	const { isLoading, data, isError, error } = useQuery({
		queryKey: [
			`sellsDashboard-Origins`,
			[User!.AgencyId, props.fields.refresh],
		],
		queryFn: () =>
			AgencyChartAPI.origins(
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
	return (
		<>
			<div className={`${styles.titleContainer}`}>
				<div className={styles.iconContainer}>
					<IconSells size="100%" color="#000" />
				</div>
				<h4 className={`semi-bold`}>Origenes Leads</h4>
			</div>
			<div className={`row ${styles.paragraphSeparator}`}>
				<div className="col">
					<div className="box">
						<p className={styles.paragraph}>
							Gráfica comparativa sobre el origen de los leads con
							respecto al mes pasado
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-md-12">
					<div className="box">
						<ComparativeBarChart
							labels={data.labels}
							data1={data.data1}
							data2={data.data2}
						/>
					</div>
				</div>

				{/* <div className="col-xs-12 col-md-6">
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
				</div> */}
			</div>
		</>
	);
};

export default Card3;
