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

interface Props {
	fields: any;
}

const Card2 = (props: Props) => {
	const { User } = useContext(UserContext) as UserContextType;

	const { isLoading, data, isError, error } = useQuery({
		queryKey: [
			`sellsDashboard-Interest`,
			[User!.AgencyId, props.fields.refresh],
		],
		queryFn: () =>
			AgencyChartAPI.interest(
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
				<h4 className={`semi-bold`}> Leads por Modelo</h4>
			</div>
			<div className="row">
				{data.map((item: any, index: number) => (
					<div className="col-xs-12" key={index}>
						<StackedBarChartLabel
							title={item.title}
							models={item.models}
							amounts={item.amounts}
							percentages={item.percentages}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default Card2;
