import React, { useContext, useState } from "react";
import { Button, CardFunnel } from "@/components/UI/atoms";
import styles from "./LeadFunnel.module.css";
import { IconCheck, IconFeedback, IconPhone, IconWhatsapp } from "@/assets";
import { useMutation } from "react-query";
import { LeadAPI } from "@/apis";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";

interface Props {
	func: () => void;
	leadPhase: string;
	leadId: number;
}
export const whatsFunction = () => {
	console.log("whats");
};
export const phoneFunction = () => {
	window.open("tel:900300400");
};
export const checkFunction = () => {
	console.log("check");
};
export const feedbackFunction = () => {
	console.log("feedback");
};

// const leadPhaseMutation = useMutation({
// 	mutationFn: () => LeadAPI.nextPhase(props.leadId),
// 	onSuccess(data, variables, context) {
// 		console.log("exito papito", data);
// 	},
// });

export const LeadFunnel = (props: Props) => {
	const nextPhase = async (leadId: number) => {
		console.log("nextPhase");

		LeadAPI.nextPhase(leadId)
			.then((response) => {
				console.log(response);
				createAlert("success", "Exito", "Lead modificado");
			})
			.catch((error) => {
				console.log("Hubo un error");
				console.log(error);
				createAlert("error", "Fallo", "Ha ocurrido un problema");
			});
	};
	const { Alerts, SetAlerts } = useContext(
		AlertsContext
	) as AlertsContextType;
	function createAlert(type: string, title: string, text: string) {
		let newAlert: any = {
			type: type,
			title: title,
			text: text,
		};
		SetAlerts([...Alerts, newAlert]);
	}

	const selectTabsPhase = (phase: string) => {
		switch (phase) {
			case "subasta":
				return (
					<>
						<p className="p3 secondary bold mt-3">Atender Lead</p>
						<CardFunnel
							type="check"
							mainText="Tomar"
							buttonText="Tomar"
							twoButtons={true}
							icon={<IconCheck size="100%" color="#000" />}
							func={() => nextPhase(props.leadId)}
						/>
					</>
				);
			case "1er-contacto":
				return (
					<>
						<p className="p3 secondary bold mt-3">
							Confirmación Datos
						</p>
						<CardFunnel
							type="check"
							mainText="Confirmación de datos"
							buttonText="Confirmar datos"
							twoButtons={true}
							icon={<IconCheck size="100%" color="#000" />}
							func={() => nextPhase(props.leadId)}
						/>
					</>
				);
			case "seguimiento":
				return (
					<>
						<p className="p3 secondary bold mt-3">Seguimiento</p>
						<CardFunnel
							type="check"
							mainText="Envió de Documentación"
							buttonText="Enviar info"
							twoButtons={true}
							icon={<IconCheck size="100%" color="#000" />}
						/>
						<CardFunnel
							type="check"
							mainText="Prueba de Manejo"
							buttonText="Agendar Prueba"
							twoButtons={true}
							icon={<IconCheck size="100%" color="#000" />}
						/>
						<CardFunnel
							type="check"
							mainText="Cotización"
							buttonText="Cotizar"
							twoButtons={true}
							icon={<IconCheck size="100%" color="#000" />}
						/>
					</>
				);
			case "en-cierre":
				return <></>;
			default:
				return;
		}
	};

	return (
		<div className={styles.funnelTab}>
			{selectTabsPhase(props.leadPhase)}

			<p className="p3 secondary bold">Contacto</p>
			<CardFunnel
				type="whats"
				mainText="Enviar Whatsapp"
				buttonText="Enviar Mensaje"
				twoButtons={true}
				icon={<IconWhatsapp size="100%" color="#000" />}
			/>
			<CardFunnel
				type="phone"
				mainText="Llamada Telefónica"
				buttonText="Lllamar ahora"
				twoButtons={true}
				icon={<IconPhone size="100%" color="#000" rotate="0" />}
			/>
			<CardFunnel
				type="email"
				mainText="Enviar Correo"
				buttonText="Enviar Mensaje"
				twoButtons={true}
				icon={<IconPhone size="100%" color="#000" rotate="0" />}
			/>

			<p className="p3 secondary bold">Descartar</p>
			<CardFunnel
				type="feedback"
				mainText="Descarte"
				buttonText="Futura Compra"
				twoButtons={true}
				icon={<IconFeedback size="100%" color="#000" />}
			/>

			<div className="mt-4">
				<Button
					text="Registrar Actividad"
					func={props.func}
					full={true}
				/>
			</div>
		</div>
	);
};
