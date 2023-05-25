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
import { ClosingSellsActivities } from "./closingActivities/ClosingSellActivities";
import { LeadDataType } from "@/models";
import { HostessActivities } from "./HostessActivities";
import UserContext, { UserContextType } from "@/context/UserContext";
import LeadWindowContext, { LeadWindowContextType } from "@/context/LeadWindow";
import { RegisterActivity } from "../registerActivity";
import { RuleOutActivity } from "../ruleOutActivity";
import CurrentLeadContext, {
	CurrentLeadContextType,
} from "@/context/currentLeadContext/CurrentLeadContext";
import { EditLead } from "../editLead";

interface Props {
	refresher: (val: boolean) => void;
	refresh: boolean;
}
export const LeadFunnel = (props: Props) => {
	//TODO: aun quedan por eliminar el paso de props
	const { User } = useContext(UserContext) as UserContextType;
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;
	const { ShowLeadWindow, SetShowLeadWindow, SetLeadWindow } = useContext(
		LeadWindowContext
	) as LeadWindowContextType;
	const { CurrentLead, DispatchCurrentLead } = useContext(
		CurrentLeadContext
	) as CurrentLeadContextType;

	function nextPhaseLead() {
		LeadAPI.nextPhase(CurrentLead.id)
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
		all: <Activities leadData={CurrentLead} />,
		subasta: (
			<AuctionActivities
				leadData={CurrentLead}
				nextPhaseLead={nextPhaseLead}
			/>
		),
		"1er-contacto": (
			<FirstContactActivities
				leadData={CurrentLead}
				nextPhaseLead={nextPhaseLead}
			/>
		),
		seguimiento: (
			<FollowUpActivities
				leadData={CurrentLead}
				nextPhaseLead={nextPhaseLead}
			/>
		),
		"en-cierre": <ClosingSellsActivities leadData={CurrentLead} />,
	};

	return (
		<div className={styles.funnelTab}>
			<p className="p3 secondary bold">
				{titles[CurrentLead.leadPhase.slug] || ""}
			</p>
			{phases[CurrentLead.leadPhase.slug]}

			{User?.permissions[1] === "manager" ||
			User?.permissions[1] === "coordinator" ||
			User?.permissions[1] === "bdc" ||
			User?.permissions[1] === "hostess" ? (
				<HostessActivities leadData={CurrentLead} />
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
								<RegisterActivity />
							);
						}}
						alternativeText=""
						alternativeFunc={() => {
							return;
						}}
					/>
				}
			/>
			<p className="p3 secondary bold">Editar</p>
			<CardFunnel
				mainText="Editar"
				icon={<IconFeedback size="100%" color="#000" />}
				cardContent={
					<BasicBody
						buttonText="Editar Lead"
						buttonFunc={() => {
							SetLeadWindow("Eitar Lead", <EditLead />);
						}}
						alternativeText=""
						alternativeFunc={() => 1}
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
								<RuleOutActivity ruleOutType="freeze" />
							)
						}
						alternativeText="Futura Compra"
						alternativeFunc={() =>
							SetLeadWindow(
								"Lead Futura Compra",
								<RuleOutActivity ruleOutType="future-sell" />
							)
						}
					/>
				}
			/>
		</div>
	);
};
