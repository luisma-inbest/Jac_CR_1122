import React, { useState, useContext, useEffect } from "react";
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
import { useParams } from "react-router-dom";
import { LeadAPI } from "@/apis";
import { useMutation, useQuery } from "react-query";
import { LeadDataType } from "@/models";
import { initial } from "../createLead/reducer";
import { FlotatingWindow } from "@/components/UI/molecules/FLotatingWIndow";
import UserContext, { UserContextType } from "@/context/UserContext";
import CurrentLeadContext, {
	CurrentLeadProvider,
	CurrentLeadContextType,
} from "@/context/CurrentLeadContext";

import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";

import LeadWindowContext, { LeadWindowContextType } from "@/context/LeadWindow";

export const Body = () => {
	let { leadId } = useParams();
	const [refresh, setRefresh] = useState(false);
	const [runEffect, setRunEffect] = useState(false);
	const { User } = useContext(UserContext) as UserContextType;
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;

	const {
		ShowLeadWindow,
		SetShowLeadWindow,
		FLotatingWindowContent,
		SetFLotatingWindowContent,
	} = useContext(LeadWindowContext) as LeadWindowContextType;

	const { CurrentLead, SetCurrentLead } = useContext(
		CurrentLeadContext
	) as CurrentLeadContextType;

	function verifyLead() {
		return (
			CurrentLead.leadPhase.slug === "subasta" &&
			(User?.permissions.includes("coordinator") ||
				User?.permissions.includes("bdc") ||
				User?.permissions.includes("adviser-digital") ||
				User?.permissions.includes("adviser-floor") ||
				User?.permissions.includes("adviser-hybrid") ||
				User?.permissions.includes("adviser-telefonica") ||
				User?.permissions.includes("adviser-telefonica"))
		);
	}

	function updateLead() {
		console.log("actualizando lead");
		// asignar el lead al usuario y refrescar
		LeadAPI.updateSeller(leadId!, {
			data: {
				UserId: User!.id,
			},
		})
			.then((res) => {
				console.log("exito", res);
				createAlert(
					"success",
					"Exito",
					"El lead se ha asignado correctamente"
				);
				LeadAPI.nextPhase(CurrentLead.id)
					.then((res) => {
						createAlert(
							"success",
							"Fase actualizada",
							"El estatus del lead ha cambiado"
						);
						setRefresh(!refresh);
					})
					.catch((err) => {
						createAlert(
							"error",
							"Error al actualizar fase",
							"Hubo un error"
						);
					});
			})
			.catch((err) => {
				console.log("error", err);
				createAlert(
					"error",
					"Error",
					"Hubo un error al asignar el lead"
				);
			});
	}
	useEffect(() => {
		// console.log("useEffect", CurrentLead.leadPhase.slug);
		if (verifyLead()) {
			console.log("es subasta");
			updateLead();
		}
	}, [runEffect]);

	const { isLoading, data, isError, error } = useQuery({
		queryKey: [`lead-${leadId}`, [refresh]],
		queryFn: () => LeadAPI.getLead(String(leadId)),
		onSuccess: (data) => {
			console.log("exito", data);

			SetCurrentLead({
				id: data.id,
				leadName: data.firstAndLastName,
				leadEmails: data.LeadEmails || [""],
				leadPhones: data.LeadPhones || [""],
				LeadActivities: data.LeadActivities,
				leadPhase: data.LeadPhase,
				LeadInterests: data.LeadInterests,
				LeadOrigin: data.LeadOrigin,
				createdAt: data.createdAt,
				updatedAt: data.updatedAt,
				UserId: data.UserId,
				rfc: data.rfc,
			});

			setRunEffect(true);
			console.log("actividades", data.LeadActivities);
		},
		onError: (error) => {
			console.log("error", error);
		},
		// staleTime: 10 * (60 * 1000), // 10 mins
		// cacheTime: 15 * (60 * 1000), // 15 mins
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

	// const PageTabs = ["Datos", "Funnel", "Chat", "Historial"];
	const PageTabs = ["Datos", "Funnel", "Chat", "Historial"];
	const TabOne = <LeadData lead={CurrentLead} />;
	const TabTwo = (
		<LeadFunnel
			leadPhase={CurrentLead.leadPhase.slug}
			leadData={CurrentLead}
			refresher={setRefresh}
			refresh={refresh}
		/>
	);
	const TabThree = <LeadChat />;
	const TabFour = <LeadHistory activities={CurrentLead.LeadActivities} />;
	const TabsComponents = [TabOne, TabTwo, TabThree, TabFour];

	return (
		<>
			<div className={`contentVerticalPadding ${styles.mainContainer}`}>
				<div className="row">
					<div className={`col-xs-12 col-md-6 ${styles.userData}`}>
						<LeadData lead={CurrentLead} />
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
			{ShowLeadWindow ? <FlotatingWindow /> : <></>}
		</>
	);
};
