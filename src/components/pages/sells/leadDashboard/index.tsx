import React, { useState, useContext } from "react";
import styles from "./Sells.module.css";
import { Loader, StyledInputText } from "@/components/UI/atoms";
import {
	LeadData,
	LeadChat,
	LeadFunnel,
	LeadHistory,
} from "@/components/UI/molecules";
import { Tabs } from "@/components/templates";
import { RegisterActivity } from "@/components/UI/molecules";
import { CurrentLeadProvider } from "@/context/CurrentLeadContext";
import { useParams } from "react-router-dom";
import { LeadAPI } from "@/apis";
import { useQuery } from "react-query";

export const LeadDashboard = () => {
	let { leadId } = useParams();
	const [leadView, setLeadView] = useState(false);
	const [lead, seadLead] = useState(null);

	const { isLoading, data, isError, error } = useQuery({
		queryKey: [`lead-${leadId}`],
		queryFn: () => LeadAPI.getLead(String(leadId)),
		onSuccess: (data) => {
			console.log("exito", data);
		},
		// staleTime: 5 * (60 * 1000), // 5 mins
		// cacheTime: 10 * (60 * 1000), // 10 mins
	});

	const windowHandler = () => {
		if (!leadView) {
			window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		}
		setLeadView(!leadView);
	};

	const PageTabs = ["Datos", "Funnel", "Chat", "Historial"];
	const TabOne = <LeadData />;
	const TabTwo = <LeadFunnel func={windowHandler} />;
	const TabThree = <LeadChat />;
	const TabFour = <LeadHistory />;
	const TabsComponents = [TabOne, TabTwo, TabThree, TabFour];

	if (isLoading) {
		return (
			<div className="row">
				<div className={`col-xs-12 loaderContainer`}>
					<Loader />
				</div>
			</div>
		);
	}

	return (
		<>
			<div className={`contentVerticalPadding ${styles.mainContainer}`}>
				<div className="row">
					<div className={`col-xs-12 col-md-6 ${styles.userData}`}>
						<LeadData />
					</div>
					<div className={`col-xs-12  col-md-6 `}>
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
		</>
	);
};
