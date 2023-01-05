import React, {useState} from "react";
import {Link} from "react-router-dom";
import {StyledInputText} from "@/components/UI/atoms";
import {Tabs} from "@/components/templates";
import styles from "./Sells.module.css";

export const SellsDashboard = () => {
	return (
		<div className={`contentVerticalPadding ${styles.mainContainer}`}>
			<div className="row">
				<div className={`col-xs-12 col-md-6 ${styles.userData}`}>
					<h1>Aquí van las gráficas </h1>

					<Link to="/sells/leads">
						<h2>Leads</h2>
					</Link>
				</div>
			</div>
		</div>
	);
};
