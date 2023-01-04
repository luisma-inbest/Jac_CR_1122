import React, {useState, useContext} from "react";
import styles from "./Sells.module.css";
import {StyledInputText} from "@/components/UI/atoms";
import {LeadData, LeadChat, LeadFunnel, LeadHistory} from "@/components/UI/molecules";
import {Tabs} from "@/components/templates";
import {RegisterActivity} from "@/components/UI/molecules";
import {CurrentLeadProvider} from "@/context/CurrentLeadContext";

export const LeadDashboard = () => {
	const [leadView, setLeadView] = useState(false);
	const [lead, seadLead] = useState(null);

	const windowHandler = () => {
		if (!leadView) {
			window.scrollTo({top: 0, left: 0, behavior: "smooth"});
		}
		setLeadView(!leadView);
	};

	const PageTabs = ["Datos", "Funnel", "Chat", "Historial"];
	const TabOne = <LeadData />;
	const TabTwo = <LeadFunnel func={windowHandler} />;
	const TabThree = <LeadChat />;
	const TabFour = <LeadHistory func={windowHandler}/>;
	const TabsComponents = [TabOne, TabTwo, TabThree, TabFour];

	return (
		<CurrentLeadProvider>
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
			{leadView ? <RegisterActivity func={windowHandler} /> : <></>}
		</CurrentLeadProvider>
	);
};
