import React, {useState} from "react";
import styles from "./Sells.module.css";
import {StyledInputText} from "@/components/UI/atoms";
import {LeadData} from "@/components/UI/organisms";
import {Tabs} from "@/components/templates";
import {Link} from "react-router-dom";

export const SellsDashboard = () => {
	return (
		<div className={`contentVerticalPadding ${styles.mainContainer}`}>
			<div className="row">
				<div className={`col-xs-12 col-md-6 ${styles.userData}`}>
					<h1>Aquí van las gráficas t</h1>

					<Link to="/sells/leads">
						<h2>Leads</h2>
					</Link>
				</div>
			</div>
		</div>
	);
};
