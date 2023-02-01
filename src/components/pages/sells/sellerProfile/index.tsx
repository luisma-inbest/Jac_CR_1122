import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BarChart, CardProduct, ComparativeBarChart } from "@/components/UI/atoms";
import { PieChartLabel, SalesInfoCard, StackedBarChartLabel } from "@/components/UI/molecules";
import { Tabs } from "@/components/templates";
import styles from "./Sells.module.css";
import { IconSells } from "@/assets";
import { PieChartLabelProps } from "@/components/UI/molecules/pieChartLabel";

const getTitleElement = (titleText: string) => {
	return <div className="row">
		<div className="col">
			<div className={`box ${styles.titleContainer}`}>
				<div className={styles.iconContainer}>
					<IconSells size="100%" color="black" />
				</div>
				<h2 className={styles.title}>{titleText}</h2>
			</div>
		</div>
	</div>;
};

export const SellerProfile = () => {
	const salesData: PieChartLabelProps = {
		labels: [
			'Primer Contacto',
			'Datos Confirmados',
			'Seguimiento',
			'En Venta',
		],
		amounts: [14, 25, 30, 12],
	};

	return (
		<div className={`contentVerticalPadding ${styles.mainContainer}`}>
			{/* col */}
			<div className={` ${styles.cardContainer} ${styles.card1}`}>
				<div className={`globalPadding ${styles.card} `}>
					{
						getTitleElement('Ventas')
					}
					<div className="row">
						<div className="col">
							<div className="box">
								<p className={styles.paragraph}>
									Lorem ipsum dolor sit amet consectetur. Volutpat integer dictum curabitur elementum. Orci senectus posuere id sed vulputate ipsum molestie sit adipiscing. Facilisis arcu et quis odio sit.
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12 col-md-6">
							<div className="box">
								<PieChartLabel
									labels={salesData.labels}
									amounts={salesData.amounts}
								/>
							</div>
						</div>

						<div className="col-xs-12 col-md-6">
							<div className="box">
								<div className="row">
									<div className="col-xs-12 col-md-6">
										<div className={`box ${styles.boxSeparator}`}>
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
					</div>
				</div>
			</div>

			{/* col */}
			<div
				className={` ${styles.cardContainer} ${styles.sideBar} ${styles.card2}`}
			>
				<div className={`globalPadding ${styles.card}`}>
					{
						getTitleElement('Modelos')
					}
					{ }
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
								<h3 className={styles.subTitle}>Orci senectus posuere id</h3>
							</div>
						</div>
						{
							Array.from(Array(4)).map(() => {
								return (
									<div className="col-xs-12">
										<div className="box">
											<CardProduct />
										</div>
									</div>
								);
							})
						}
					</div>
				</div>
			</div>

			{/* col */}
			<div className={` ${styles.cardContainer} ${styles.card3}`}>
				<div className={`globalPadding ${styles.card}`}>
					{
						getTitleElement('Lorem ipsum dolor')
					}
					<div className={`row ${styles.paragraphSeparator}`}>
						<div className="col">
							<div className="box">
								<p className={styles.paragraph}>
									Lorem ipsum dolor sit amet consectetur. Volutpat integer dictum curabitur elementum. Orci senectus posuere id sed vulputate ipsum molestie sit adipiscing. Facilisis arcu et quis odio sit.
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12 col-md-6">
							<div className="box">
								<ComparativeBarChart
									labels={['Lorem', 'Lorem', 'Lorem', 'Lorem']}
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
											<h3 className={styles.subTitle}>Orci senectus posuere id</h3>
											<p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur. Volutpat integer dictum curabitur elementum. Orci senectus posuere id</p>
										</div>
									</div>
									<div className="col-xs-12">
										<div className="box">
											<h3 className={styles.subTitle}>Orci senectus posuere id</h3>
											<p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur. Volutpat integer dictum curabitur elementum. Orci senectus posuere id</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
