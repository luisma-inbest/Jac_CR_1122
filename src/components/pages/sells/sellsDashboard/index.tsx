import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {BarChart, PieChart, StyledInputText} from "@/components/UI/atoms";
import {Tabs} from "@/components/templates";
import styles from "./Sells.module.css";
import {IconSells} from "@/assets";

export const SellsDashboard = () => {
	return (
		<div className={`contentVerticalPadding ${styles.mainContainer}`}>
			{/* col */}
			<div className={` ${styles.cardContainer} ${styles.card1}`}>
				<div className={`globalPadding ${styles.card} `}>
					<div className={styles.title}>
						<div className={styles.iconContainer}>
							<IconSells size="100%" color="black" />
						</div>
						<h1>Leads</h1>
					</div>
					<div className="row">
						<div className={`col-xs-12 col-md-6`}>
							<div className={`${styles.chart1}`}>
								<PieChart />
							</div>
						</div>

						<div className={`col-xs-12 col-md-6 row`}>
							<div className={`col-xs-12 col-md-6 ${styles.customColumn}`}>
								<div className={styles.box}>
									<p className="p2 bold secondary text-center">
										Cantidad de Ventas
									</p>
									<h1 className="text-center">756</h1>
								</div>
								<div className={styles.box}>
									<p className="p2 bold secondary text-center">Leads</p>
									<h1 className="text-center">2,924</h1>
								</div>
							</div>
							<div className={`col-xs-12 col-md-6 ${styles.customColumn}`}>
								<div className={styles.box}>
									<p className="p2 bold secondary text-center">
										Cantidad de Ventas
									</p>
									<h1 className="text-center">756</h1>
								</div>

								<div className={styles.box}>
									<p className="p2 bold secondary text-center">
										Tiempo de primer contacto
									</p>
									<h1 className="text-center">12 mins</h1>
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
						<h1>vehiculos </h1>
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
						<h1>ventas </h1>
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
