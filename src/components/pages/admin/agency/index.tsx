import React, {useState, useContext} from "react";
import {Button, StyledInputText} from "@/components/UI/atoms";
import {
	LeadData,
	LeadChat,
	LeadFunnel,
	LeadHistory,
} from "@/components/UI/molecules";
import {Tabs} from "@/components/templates";
import {RegisterActivity} from "@/components/UI/molecules";
import {CurrentLeadProvider} from "@/context/CurrentLeadContext";
import styles from "./Agency.module.css";
import {
	AgencyGeneral,
	AgencyLocation,
	AgencySocial,
	AgencyUsers,
} from "@/components/UI/organisms";

export const Agency = () => {
	const [leadView, setLeadView] = useState(false);
	const [lead, seadLead] = useState(null);

	const PageTabs = ["General", "Ubicación", "Colaboradores", "Redes"];
	const TabOne = <AgencyGeneral />;
	const TabTwo = <AgencyLocation />;
	const TabThree = <AgencyUsers />;
	const TabFour = <AgencySocial />;
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
