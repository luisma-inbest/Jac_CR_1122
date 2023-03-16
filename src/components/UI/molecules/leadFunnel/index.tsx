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

interface Props {
	activityHandler: () => void;
	leadPhase: string;
	leadData: LeadDataType;
}
export const LeadFunnel = (props: Props) => {
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;

	function nextPhaseLead() {
		LeadAPI.nextPhase(props.leadData.id)
			.then((res) => {
				createAlert("success", "Fase actualizada", "El ha cambiado");
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
		subasta: "Atender Lead",
		"1er-contacto": "Confirmación Datos",
		seguimiento: "Seguimiento",
		"en-cierre": "Cierre de Venta",
	};
	const phases: any = {
		all: (
			<Activities
				leadData={props.leadData}
				activityHandler={props.activityHandler}
			/>
		),
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
				activityHandler={props.activityHandler}
				nextPhaseLead={nextPhaseLead}
			/>
		),
		"en-cierre": <ClosingSellsActivities leadData={props.leadData} />,
	};

	return (
		<div className={styles.funnelTab}>
			<p className="p3 secondary bold">{titles[props.leadPhase] || ""}</p>
			{phases[props.leadPhase]}
			<p className="p3 secondary bold">Contacto</p>
			{phases.all}
			<p className="p3 secondary bold">Comentarios</p>
			<CardFunnel
				mainText="Nueva Actividad"
				icon={<IconFeedback size="100%" color="#000" />}
				cardContent={
					<BasicBody
						buttonText="Crear Actividad"
						buttonFunc={() => props.activityHandler()}
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
						buttonFunc={() => console.log("")}
						alternativeText="Futura Compra"
						alternativeFunc={() => console.log("")}
					/>
				}
			/>
		</div>
	);
};
