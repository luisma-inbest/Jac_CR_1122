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

const Card4 = (props: Props) => {
	const { User } = useContext(UserContext) as UserContextType;

	const { isLoading, data, isError, error } = useQuery({
		queryKey: [
			`sellsDashboard-Status`,
			[User!.AgencyId, props.fields.refresh],
		],
		queryFn: () =>
			AgencyChartAPI.status(
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
					<h1 className="bold">{data.TotalLeads}Leads</h1>
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
