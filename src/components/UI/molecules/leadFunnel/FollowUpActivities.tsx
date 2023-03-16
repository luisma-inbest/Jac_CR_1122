import React from "react";
import { Button, CardFunnel } from "@/components/UI/atoms";
import styles from "./LeadFunnel.module.css";
import { IconCheck, IconWhatsapp } from "@/assets";
import { BasicBody } from "./Activities";
import { LeadDataType } from "@/models";

const goTo = (url: string) => () => {
	window.open(url, "_blank");
};

const cotizaciones = [
	{
		title: "Demo Cotización Credito",
		function: goTo("https://www.google.com"),
	},
	{
		title: "Cotización Contado",
		function: goTo("https://www.google.com"),
	},
	{
		title: "Solicitud Crédito",
		function: goTo("https://www.google.com"),
	},
	{
		title: "Apartado",
		function: goTo("https://www.google.com"),
	},
];

interface AuctionProps {
	leadData: LeadDataType;
	activityHandler: (activity: string) => void;
	nextPhaseLead: () => void;
}

export const FollowUpActivities = (props: AuctionProps) => {
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
							<p className="p3 link no-margin">Omitir</p>
						</div>
					</div>
				}
			/>
			<CardFunnel
				mainText="Prueba de Manejo"
				icon={<IconCheck size="100%" color="#000" />}
				cardContent={
					<BasicBody
						buttonText="Agenddar"
						buttonFunc={() => console.log("")}
						alternativeText="Historial"
						alternativeFunc={() => console.log("")}
					/>
				}
			/>
			<CardFunnel
				mainText="Cotización"
				icon={<IconCheck size="100%" color="#000" />}
				cardContent={
					<div>
						{cotizaciones.map((cotizacion) => {
							return (
								<>
									<p className="p4 no-margin secondary semi-bold">
										{cotizacion.title}
									</p>
									<div className={styles.cardContainerClasic}>
										<p
											className="p3 link no-margin"
											onClick={() => {
												return;
											}}
										>
											Omitir
										</p>
										<Button
											text="Crear Cotización"
											func={() => cotizacion.function()}
											full={false}
										/>
									</div>
								</>
							);
						})}
					</div>
				}
			/>
		</>
	);
};
