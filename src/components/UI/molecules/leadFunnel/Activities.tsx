import React, { useContext } from "react";
import { Button, CardFunnel } from "@/components/UI/atoms";
import styles from "./LeadFunnel.module.css";
import { IconPhone, IconWhatsapp, IconMail, IconCheck } from "@/assets";
import { LeadDataType } from "@/models";
import LeadWindowContext, { LeadWindowContextType } from "@/context/LeadWindow";
import { RegisterActivity } from "../registerActivity";

interface AuctionProps {
	leadData: LeadDataType;
}

export const Activities = (props: AuctionProps) => {
	const { ShowLeadWindow, SetShowLeadWindow, SetLeadWindow } = useContext(
		LeadWindowContext
	) as LeadWindowContextType;

	const whatsFunction = (phone: string) => {
		window.open(`https://api.whatsapp.com/send?phone=${phone}`);
		SetLeadWindow("Registrar Nueva Actividad", <RegisterActivity />);
	};
	const phoneFunction = (phone: string) => {
		window.open(`tel:${phone}}`);
		SetLeadWindow("Registrar Nueva Actividad", <RegisterActivity />);
	};
	const emailFunction = (email: string) => {
		window.open(`mailto:${email}`);
		SetLeadWindow("Registrar Nueva Actividad", <RegisterActivity />);
	};
	const checkFunction = () => {
		console.log("check");
	};

	return (
		<>
			<CardFunnel
				mainText="Enviar Whatsapp"
				icon={<IconWhatsapp size="100%" color="#000" />}
				cardContent={
					<div>
						{props.leadData.leadPhones.map(
							(currentPhone: any, index: number) => {
								return (
									<div
										key={index}
										className={styles.cardContainerClasic}
									>
										<p
											className="p3 link no-margin"
											onClick={() =>
												whatsFunction(
													currentPhone.phone
												)
											}
										>
											{currentPhone.phone}
										</p>
										<Button
											text="Mensaje"
											func={() =>
												whatsFunction(
													currentPhone.phone
												)
											}
											full={false}
										/>
									</div>
								);
							}
						)}
					</div>
				}
			/>

			<CardFunnel
				mainText="Llamada Telefónica"
				icon={<IconPhone size="100%" color="#000" rotate="0" />}
				cardContent={
					<div>
						{props.leadData.leadPhones.map(
							(currentPhone: any, index: number) => {
								return (
									<div
										key={index}
										className={styles.cardContainerClasic}
									>
										<p
											className="p3 link no-margin"
											onClick={() =>
												phoneFunction(
													currentPhone.phone
												)
											}
										>
											{currentPhone.phone}
										</p>
										<Button
											text="Llamar"
											func={() =>
												phoneFunction(
													currentPhone.phone
												)
											}
											full={false}
										/>
									</div>
								);
							}
						)}
					</div>
				}
			/>

			<CardFunnel
				mainText="Enviar Correo"
				icon={<IconMail size="100%" color="#000" rotate="0" />}
				cardContent={
					<div>
						{props.leadData.leadEmails.map(
							(currentEmail: any, index: number) => {
								return (
									<div
										key={index}
										className={styles.cardContainerClasic}
									>
										<p
											className="p3 link no-margin"
											onClick={() =>
												emailFunction(
													currentEmail.email
												)
											}
										>
											{currentEmail.email}
										</p>
										<Button
											text="Correo"
											func={() =>
												emailFunction(
													currentEmail.email
												)
											}
											full={false}
										/>
									</div>
								);
							}
						)}
					</div>
				}
			/>

			{/* <CardFunnel
				mainText="Crear Recordatorio"
				icon={<IconCheck size="100%" color="#000" />}
				cardContent={
					<BasicBody
						buttonText="Registrar"
						buttonFunc={() => {
							return;
						}}
						alternativeText=""
						alternativeFunc={() => {
							return;
						}}
					/>
				}
			/> */}
		</>
	);
};

interface PropsBasic {
	buttonText: string;
	buttonFunc: () => void;
	alternativeText: string;
	alternativeFunc: () => void;
}
export const BasicBody = (props: PropsBasic) => {
	return (
		<div className={styles.cardContainerClasic}>
			<p className="p3 link no-margin" onClick={props.alternativeFunc}>
				{props.alternativeText}
			</p>
			<Button
				text={props.buttonText}
				func={props.buttonFunc}
				full={false}
			/>
		</div>
	);
};
