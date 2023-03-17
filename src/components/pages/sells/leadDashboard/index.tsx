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
import { LeadDataType } from "@/models";
import { initial } from "../createLead/reducer";

let initialData: LeadDataType = {
	id: -1,
	leadName: "",
	leadEmails: [],
	leadPhones: [],
	leadPhase: {
		id: -1,
		description: "",
		slug: "",
		createdAt: "",
		updatedAt: "",
	},
	LeadInterests: [],
	LeadOrigin: "",
	createdAt: new Date(),
};

export const LeadDashboard = () => {
	let { leadId } = useParams();
	const [leadView, setLeadView] = useState(false);
	const [leadData, setLeadData] = useState<LeadDataType>(initialData);

	const { isLoading, data, isError, error } = useQuery({
		queryKey: [`lead-${leadId}`],
		queryFn: () => LeadAPI.getLead(String(leadId)),
		onSuccess: (data) => {
			console.log("exito", data);
			setLeadData({
				id: data.id,
				leadName: data.firstAndLastName,
				leadEmails: data.LeadEmails,
				leadPhones: data.LeadPhones,
				leadPhase: data.LeadPhase,
				LeadInterests: data.LeadInterests,
				LeadOrigin: data.LeadOrigin,
				createdAt: data.createdAt,
			});
			console.log("actividades", data.LeadActivities);
		},
		onError: (error) => {
			console.log("error", error);
		},

		// staleTime: 5 * (60 * 1000), // 5 mins
		// cacheTime: 10 * (60 * 1000), // 10 mins
	});
	if (isLoading) {
		return (
			<div className="row">
				<div className={`col-xs-12 loaderContainer`}>
					<Loader />
				</div>
			</div>
		);
	}
	if (isError) {
		return (
			<div className="row">
				<div className={`col-xs-12 loaderContainer`}>
					<Loader />
				</div>
			</div>
		);
	}

	const windowHandler = () => {
		if (!leadView) {
			window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		}
		setLeadView(!leadView);
	};

	const PageTabs = ["Datos", "Funnel", "Chat", "Historial"];
	const TabOne = <LeadData lead={leadData} />;
	const TabTwo = (
		<LeadFunnel
			activityHandler={windowHandler}
			leadPhase={leadData.leadPhase.slug}
			leadData={leadData}
		/>
	);
	const TabThree = <LeadChat />;
	const TabFour = <LeadHistory activities={data.LeadActivities} />;
	const TabsComponents = [TabOne, TabTwo, TabThree, TabFour];

	return (
		<>
			<div className={`contentVerticalPadding ${styles.mainContainer}`}>
				<div className="row">
					<div className={`col-xs-12 col-md-6 ${styles.userData}`}>
						<LeadData lead={leadData} />
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
			{leadView ? (
				<RegisterActivity func={windowHandler} LeadId={leadData.id} />
			) : (
				<></>
			)}
		</>
	);
};
