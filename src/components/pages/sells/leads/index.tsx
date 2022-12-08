import React, {useState} from "react";
import styles from "./Sells.module.css";
import {StyledInputText} from "@/components/UI/atoms";
import {LeadData, LeadsTable} from "@/components/UI/molecules";
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

	const PageTabs = ["Subasta", "Contacto", "Seguimiento", "Cierre"];
	const TabOne = <LeadsTable type={3} />;
	const TabTwo = <LeadsTable type={0} />;
	const TabThree = <LeadsTable type={1} />;
	const TabFour = <LeadsTable type={2} />;
	const TabsComponents = [TabOne, TabTwo, TabThree, TabFour];

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
