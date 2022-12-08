import React, {useState} from "react";
import styles from "./Sells.module.css";
import {StyledInputText} from "@/components/UI/atoms";
import {LeadData} from "@/components/UI/organisms";
import {Tabs} from "@/components/templates";

export const LeadDashboard = () => {
	const PageTabs = ["Datos", "Funnel", "Chat", "Historial"];
	const TabsComponents = [LeadData, LeadData, LeadData, LeadData];

	return (
		<div className={`contentVerticalPadding ${styles.mainContainer}`}>
			<div className="row">
				<div className={`col-xs-12 col-md-6 ${styles.userData}`}>
					<LeadData />
				</div>
				<div className={`col-xs-12  col-md-6`}>
					<Tabs
						tabs={PageTabs}
						components={TabsComponents}
						one={LeadData}
						full={false}
					/>
				</div>
			</div>
		</div>
	);
};
