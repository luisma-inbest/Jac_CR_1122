import React, { useState, useContext } from "react";
import { Button, Loader, StyledInputText } from "@/components/UI/atoms";
import { LeadData } from "@/components/UI/molecules";
import { Tabs } from "@/components/templates";
import { RegisterActivity } from "@/components/UI/molecules";
import CurrentLeadContext, {
	CurrentLeadContextType,
	CurrentLeadProvider,
} from "@/context/currentLeadContext/CurrentLeadContext";
import styles from "./Agency.module.css";
import {
	AgencyGeneral,
	AgencyLocation,
	AgencySocial,
	AgencyUsers,
} from "@/components/UI/organisms";
import { Domain } from "@/constants";
import { useLocation, useParams } from "react-router-dom";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";
import { useQuery } from "react-query";
import { AgencyAPI } from "@/apis";
import CurrentAgencyContext, {
	CurrentAgencyContextType,
} from "@/context/currentAgencyContext/CurrentAgencyContext";

export const AgencyBody = () => {
	const { agencyId } = useParams();
	//Tabs
	const PageTabs = ["General", "Ubicación", "Colaboradores", "Redes"];
	const TabOne = <AgencyGeneral />;
	const TabTwo = <AgencyLocation />;
	const TabThree = <AgencyUsers agencyId={String(agencyId)} />;
	// const TabFour = <AgencySocial />;
	const TabFour = <AgencyGeneral />;
	const TabsComponents = [TabOne, TabTwo, TabThree, TabFour];

	//Context's
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;
	const { CurrentAgency, DispatchCurrentAgency } = useContext(
		CurrentAgencyContext
	) as CurrentAgencyContextType;

	const { isLoading, data, isError, error } = useQuery({
		queryKey: [`agency-${agencyId}`, []],
		queryFn: () => AgencyAPI.getAgency(String(agencyId)),
		onSuccess: (data) => {
			console.log("exito", data);
			DispatchCurrentAgency({
				type: "all",
				value: {
					id: data.id,
					name: data.name,
					businessName: data.businessName,

					picLogo: data.picLogo,
					picLogoDark: data.picLogoDark,
					urlSite: data.urlSite,

					url360: data.url360,
					urlGoogleMaps: data.urlGoogleMaps,

					hasService: data.hasService,

					street: data.street,
					exteriorNumber: data.exteriorNumber,
					interiorNumber: data.interiorNumber,
					state: data.State.slug,
					transferCode: data.transferCode,
					city: data.City.name,
					suburb: data.Suburb.name,
					postalCode: data.PostalCode.code,
					municipality: data.municipality,
					deputation: data.deputation,
					sicop: data.sicop,

					active: data.active,
					AgencySocialMedia: data.AgencySocialMedia,

					AgencyIncomingLeadRuleId: String(
						data.AgencyIncomingLeadRuleId
					),
					LeadOwnerId: data.LeadOwnerId,

					Manager: data.Manager,
					Users: data.Users,
				},
			});

			// console.log("actividades", data.LeadActivities);
		},
		onError: (error) => {
			console.log("error", error);
		},
		// staleTime: 15 * (60 * 1000), // 15 mins
		// cacheTime: 20 * (60 * 1000), // 20 mins
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
					<h1>Error al cargar</h1>
				</div>
			</div>
		);
	}

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
