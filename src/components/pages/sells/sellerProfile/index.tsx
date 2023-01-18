import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BarChart, PieChart, StyledInputText } from "@/components/UI/atoms";
import { PieChartLabel, SalesInfoCard } from "@/components/UI/molecules";
import { Tabs } from "@/components/templates";
import styles from "./Sells.module.css";
import { IconSells } from "@/assets";

export const SellerProfile = () => {
	return (
		<div className={`contentVerticalPadding ${styles.mainContainer}`}>
			{/* col */}
			<div className={` ${styles.cardContainer} ${styles.card1}`}>
				<div className={`globalPadding ${styles.card} `}>
					<div className={styles.title}>
						<div className={styles.iconContainer}>
							<IconSells size="100%" color="black" />
						</div>
						<h1>
							Ventas
						</h1>
					</div>
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
								<PieChartLabel />
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
					<div className={styles.title}>
						<div className={styles.iconContainer}>
							<IconSells size="100%" color="black" />
						</div>
						<h1>Modelos</h1>
					</div>
					{/* <Bar data={chartData} /> */}
					<div className="row">
						<div className="col-xs-12">
							<BarChart axis="y" />
						</div>
					</div>
				</div>
			</div>

			{/* col */}
			<div className={` ${styles.cardContainer} ${styles.card3}`}>
				<div className={`globalPadding ${styles.card}`}>
					<div className={styles.title}>
						<div className={styles.iconContainer}>
							<IconSells size="100%" color="black" />
						</div>
						<h1>Lorem ipsum dolor</h1>
					</div>
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
						<div className="col-xs-12">
							<BarChart axis="x" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
