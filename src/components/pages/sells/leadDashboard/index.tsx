import React, {useState} from "react";
import styles from "./Sells.module.css";
import {StyledInputText} from "@/components/UI/atoms";
import {LeadData, LeadChat, LeadFunnel} from "@/components/UI/molecules";
import {Tabs} from "@/components/templates";

export const LeadDashboard = () => {
	const PageTabs = ["Datos", "Funnel", "Chat", "Historial"];
	const TabOne = <LeadData />;
	const TabTwo = <LeadFunnel />;
	const TabThree = <LeadChat />;
	const TabFour = <LeadData />;
	const TabsComponents = [TabOne, TabTwo, TabThree, TabFour];

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
