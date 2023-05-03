import React, { useContext, useState } from "react";
import { Button, CardFunnel, Input } from "@/components/UI/atoms";
import styles from "./LeadFunnel.module.css";
import { IconCheck, IconWhatsapp } from "@/assets";
import { BasicBody } from "./Activities";
import { LeadDataType } from "@/models";
import { useMutation } from "react-query";
import { LeadAPI } from "@/apis";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";
import CurrentLeadContext, {
	CurrentLeadContextType,
} from "@/context/currentLeadContext/CurrentLeadContext";

const goTo = (url: string) => () => {
	window.open(url, "_blank");
};

interface AuctionProps {
	leadData: LeadDataType;
	nextPhaseLead: () => void;
}

export const FollowUpActivities = (props: AuctionProps) => {
	const { CurrentLead } = useContext(
		CurrentLeadContext
	) as CurrentLeadContextType;

	const cotizaciones = [
		{
			title: "Cotización Contado",
			buttonText: "Cotizar",
			function: goTo(
				"https://cck.creditoclick.com.mx/users-web/auth/cck/login?backTo=https://cck.creditoclick.com.mx/credimagen/josso_security_check"
			),
		},
		{
			title: "Demo Cotización Credito",
			buttonText: "Cotizar",
			function: goTo(
				"https://cck.creditoclick.com.mx/users-web/auth/cck/login?backTo=https://cck.creditoclick.com.mx/credimagen/josso_security_check"
			),
		},

		{
			title: "Solicitud Crédito",
			buttonText: "Solicitar",
			function: goTo(
				"https://cck.creditoclick.com.mx/users-web/auth/cck/login?backTo=https://cck.creditoclick.com.mx/credimagen/josso_security_check"
			),
		},
		{
			title: "Apartado",
			buttonText: "Apartar",
			function: props.nextPhaseLead,
		},
	];

	const [editRFC, setEditRFC] = useState(false);
	const [rfc, setRFC] = useState(props.leadData.rfc);
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;

	const editRFCFunc = useMutation({
		mutationFn: () =>
			LeadAPI.editInfo(String(props.leadData.id), {
				data: {
					rfc: rfc,
				},
			}),
		onSuccess(data, variables, context) {
			console.log(data);
			createAlert("success", "Lead Actualizado", "El RFC se actualizó");
		},
		onError(error, variables, context) {
			console.log(error);
			createAlert("error", "Error", "Hubo un error al actualizar");
		},
	});

	return (
		<>
			<CardFunnel
				mainText="Envió de Documentación"
				icon={<IconCheck size="100%" color="#000" />}
				cardContent={
					<div className={styles.cardContainerChecklist}>
						<div>
							<p className="p4 bold secondary">
								Envío de fichas técnicas
							</p>
							{/* <input type="checkbox" name="scales" checked={true} /> */}
							<input type="checkbox" name="scales" />
						</div>
						<div>
							<p className="p4 bold secondary">
								Muestra de Galería
							</p>
							{/* <input type="checkbox" name="scales" checked={true} /> */}
							<input type="checkbox" name="scales" />
						</div>
						<div>
							<Button
								text="Actualizar"
								full={true}
								func={() => console.log("actualizar lead info")}
							/>
						</div>
					</div>
				}
			/>
			{/* <CardFunnel
				mainText="Prueba de Manejo"
				icon={<IconCheck size="100%" color="#000" />}
				cardContent={
					<BasicBody
						buttonText="Agendar"
						buttonFunc={() => console.log("")}
						alternativeText=""
						alternativeFunc={() => console.log("")}
					/>
				}
			/> */}
			<CardFunnel
				mainText="RFC Cliente"
				icon={<IconCheck size="100%" color="#000" />}
				cardContent={
					<div className={styles.cardContainerClasic}>
						<input
							className={styles.input}
							placeholder="RFC"
							value={rfc!}
							disabled={!editRFC}
							type="text"
							onChange={(e) => setRFC(e.target.value)}
						/>
						<Button
							text={editRFC ? "Guardar" : "Editar"}
							func={() => {
								if (editRFC) {
									console.log("llamo backend");
									editRFCFunc.mutate();
								}
								setEditRFC(!editRFC);
							}}
							full={false}
						/>
					</div>
				}
			/>
			<CardFunnel
				mainText="Cotización"
				icon={<IconCheck size="100%" color="#000" />}
				cardContent={
					<div>
						{cotizaciones.map((cotizacion, index) => {
							return (
								<div key={index}>
									<p className="p4 no-margin secondary semi-bold">
										{cotizacion.title}
									</p>
									<div className={styles.cardContainerClasic}>
										<p
											className="p3 link no-margin"
											onClick={() => {
												return;
											}}
										></p>
										<Button
											text={cotizacion.buttonText}
											func={() => cotizacion.function()}
											full={false}
										/>
									</div>
								</div>
							);
						})}
					</div>
				}
			/>
		</>
	);
};
