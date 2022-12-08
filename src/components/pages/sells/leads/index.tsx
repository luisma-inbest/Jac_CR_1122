import React, {useState} from "react";
import styles from "./Sells.module.css";
import {StyledInputText} from "@/components/UI/atoms";
import {LeadsTable} from "@/components/UI/molecules";
import {LeadData} from "@/components/UI/organisms";
import {Tabs} from "@/components/templates";
import {Link} from "react-router-dom";

export const Leads = () => {
	const liga = () => {
		return (
			<div>
				<Link to="/sells/leads/1">
					<h2>Liga</h2>
				</Link>
			</div>
		);
	};

	const PageTabs = ["Subasta", "1er Contacto", "Seguimiento", "Cierre"];
	const TabsComponents = [LeadsTable, liga, liga, liga];

	return (
		<div className={`contentVerticalPadding ${styles.mainContainer}`}>
			<div className="row">
				<div className={`col-xs-12`}>
					<Tabs
						tabs={PageTabs}
						components={TabsComponents}
						one={LeadData}
						full={true}
					/>
				</div>
			</div>
		</div>
	);
};
