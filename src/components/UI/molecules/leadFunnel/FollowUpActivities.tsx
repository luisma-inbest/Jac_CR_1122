import React, { useContext, useEffect, useState } from "react";
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
import LeadWindowContext, { LeadWindowContextType } from "@/context/LeadWindow";
import { RegisterActivity } from "../registerActivity";
import { RegisterTestDrive } from "../registerTestDrive";

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
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;
	const { ShowLeadWindow, SetShowLeadWindow, SetLeadWindow } = useContext(
		LeadWindowContext
	) as LeadWindowContextType;

	const cotizaciones = [
		{
			title: "Cotización Contado",
			buttonText: "Cotizar",
			function: goTo(
				"https://jac-crm-pdf.s3.amazonaws.com/Formato_de_cotizacio%CC%81n.pdf"
			),
			// function: goTo(
			// 	"https://cck.creditoclick.com.mx/users-web/auth/cck/login?backTo=https://cck.creditoclick.com.mx/credimagen/josso_security_check"
			// ),
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
			title: "Motivadores de Compra",
			buttonText: "ir",
			function: goTo(
				"https://jac-crm-pdf.s3.amazonaws.com/Deteccio%CC%81n_de_motivadores_de_compra.pdf"
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
	const [dataSheet, setDataSheet] = useState(false);
	const [dataSheetInput, setDataSheetInput] = useState(false);
	const [galery, setGalery] = useState(false);
	const [galeryInput, setGaleryInput] = useState(false);

	const editRFCFunc = useMutation({
		mutationFn: () =>
			LeadAPI.updateFields(String(props.leadData.id), {
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

	function addActivitie() {
		let promises = [];
		if (!dataSheet && dataSheetInput) {
			console.log("en este caso si debería de guardar actividiad ficha");
			promises.push({
				activityType: "envio-de-fichas-tecnicas",
				activityText: "ficha técnica",
			});
		}
		if (!galery && galeryInput) {
			console.log(
				"en este caso si debería de guardar actividiad galeria"
			);
			promises.push({
				activityType: "muestra-galeria",
				activityText: "galería de imagenes",
			});
		}
		// console.log("promises", promises);
		promises.forEach((promise) => {
			LeadAPI.addActivity({
				LeadId: CurrentLead.id,
				leadActivityType: promise.activityType,
				title: `Se envió la ${promise.activityText}`,
				comments: "",
				status: "1",
				date: new Date(),
			})
				.then((response) => {
					console.log(response);
					createAlert(
						"success",
						"Exito",
						"Se actualizó la información"
					);
				})
				.catch((error) => {
					createAlert(
						"error",
						"Error",
						"Hubo un error al actualizar"
					);
				});
		});
	}

	useEffect(() => {
		console.log(CurrentLead.LeadActivities);
		CurrentLead.LeadActivities.forEach((activity) => {
			if (activity.LeadActivityType.slug === "envio-de-fichas-tecnicas") {
				// console.log("hay ficha");
				setDataSheet(true);
				setDataSheetInput(true);
			}
			if (activity.LeadActivityType.slug === "muestra-galeria") {
				// console.log("hay galeria");
				setGalery(true);
				setGaleryInput(true);
			}
		});
	}, []);

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
							<input
								type="checkbox"
								name="scales"
								checked={dataSheetInput}
								disabled={dataSheet}
								onChange={() => {
									setDataSheetInput(!dataSheetInput);
								}}
							/>
						</div>
						<div>
							<p className="p4 bold secondary">
								Muestra de Galería
							</p>
							{/* <input type="checkbox" name="scales" checked={true} /> */}
							<input
								type="checkbox"
								name="scales"
								checked={galeryInput}
								disabled={galery}
								onChange={() => {
									setGaleryInput(!galeryInput);
								}}
							/>
						</div>
						<div>
							{dataSheet && galery ? (
								<></>
							) : (
								<Button
									text="Actualizar"
									full={true}
									func={addActivitie}
								/>
							)}
						</div>
					</div>
				}
			/>
			<CardFunnel
				mainText="Prueba de Manejo"
				icon={<IconCheck size="100%" color="#000" />}
				cardContent={
					<BasicBody
						buttonText="Agendar"
						buttonFunc={() => {
							SetLeadWindow(
								"Agendar Prueba de Manejo",
								<RegisterTestDrive />
							);
						}}
						alternativeText=""
						alternativeFunc={() => console.log("")}
					/>
				}
			/>
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
