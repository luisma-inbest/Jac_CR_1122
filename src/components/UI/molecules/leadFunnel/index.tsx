import React, { useContext, useState } from "react";
import { Button, CardFunnel } from "@/components/UI/atoms";
import styles from "./LeadFunnel.module.css";
import {
	IconCheck,
	IconFeedback,
	IconMail,
	IconPhone,
	IconWhatsapp,
} from "@/assets";
import { useMutation } from "react-query";
import { LeadAPI } from "@/apis";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";
import { AuctionActivities } from "./AuctionActivities";
import { Activities, BasicBody } from "./Activities";
import { FirstContactActivities } from "./FirstContactActivities";
import { FollowUpActivities } from "./FollowUpActivities";
import { ClosingSellsActivities } from "./ClosingSellActivities";
import { LeadDataType } from "@/models";
import { HostessActivities } from "./HostessActivities";
import UserContext, { UserContextType } from "@/context/UserContext";
import LeadWindowContext, { LeadWindowContextType } from "@/context/LeadWindow";
import { RegisterActivity } from "../registerActivity";
import { RuleOutActivity } from "../ruleOutActivity";

interface Props {
	leadPhase: string;
	leadData: LeadDataType;
	refresher: (val: boolean) => void;
	refresh: boolean;
}
export const LeadFunnel = (props: Props) => {
	const { User } = useContext(UserContext) as UserContextType;
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;
	const { ShowLeadWindow, SetShowLeadWindow, SetLeadWindow } = useContext(
		LeadWindowContext
	) as LeadWindowContextType;

	function nextPhaseLead() {
		LeadAPI.nextPhase(props.leadData.id)
			.then((res) => {
				createAlert(
					"success",
					"Fase actualizada",
					"El estatus del lead ha cambiado"
				);
				props.refresher(!props.refresh);
			})
			.catch((err) => {
				createAlert(
					"error",
					"Error al actualizar fase",
					"Hubo un error"
				);
			});
	}

	const titles: any = {
		subasta: "",
		"1er-contacto": "Confirmación Datos",
		seguimiento: "Seguimiento",
		"en-cierre": "Cierre de Venta",
	};
	const phases: any = {
		all: <Activities leadData={props.leadData} />,
		subasta: (
			<AuctionActivities
				leadData={props.leadData}
				nextPhaseLead={nextPhaseLead}
			/>
		),
		"1er-contacto": (
			<FirstContactActivities
				leadData={props.leadData}
				nextPhaseLead={nextPhaseLead}
			/>
		),
		seguimiento: (
			<FollowUpActivities
				leadData={props.leadData}
				nextPhaseLead={nextPhaseLead}
			/>
		),
		"en-cierre": <ClosingSellsActivities leadData={props.leadData} />,
	};

	return (
		<div className={styles.funnelTab}>
			<p className="p3 secondary bold">{titles[props.leadPhase] || ""}</p>
			{phases[props.leadPhase]}

			{User?.permissions[1] === "manager" ||
			User?.permissions[1] === "coordinator" ||
			User?.permissions[1] === "bdc" ||
			User?.permissions[1] === "hostess" ? (
				<HostessActivities leadData={props.leadData} />
			) : (
				<></>
			)}

			<p className="p3 secondary bold">Contacto</p>
			{phases.all}
			<p className="p3 secondary bold">Comentarios</p>
			<CardFunnel
				mainText="Nueva Actividad"
				icon={<IconFeedback size="100%" color="#000" />}
				cardContent={
					<BasicBody
						buttonText="Crear Actividad"
						buttonFunc={() => {
							SetLeadWindow(
								"Registrar Nueva Actividad",
								<RegisterActivity></RegisterActivity>
							);
						}}
						alternativeText=""
						alternativeFunc={() => {
							return;
						}}
					/>
				}
			/>
			<p className="p3 secondary bold">Descartar</p>
			<CardFunnel
				mainText="Descarte"
				icon={<IconFeedback size="100%" color="#000" />}
				cardContent={
					<BasicBody
						buttonText="Congelar"
						buttonFunc={() =>
							SetLeadWindow(
								"Congelar Lead",
								<RuleOutActivity ruleOutType="freeze"></RuleOutActivity>
							)
						}
						alternativeText="Futura Compra"
						alternativeFunc={() =>
							SetLeadWindow(
								"Lead Futura Compra",
								<RuleOutActivity ruleOutType="future-sell"></RuleOutActivity>
							)
						}
					/>
				}
			/>
		</div>
	);
};
