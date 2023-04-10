import React from "react";
import { Button, CardFunnel } from "@/components/UI/atoms";
import styles from "./LeadFunnel.module.css";
import { IconCheck, IconWhatsapp } from "@/assets";
import { BasicBody } from "./Activities";
import { LeadDataType } from "@/models";

interface AuctionProps {
	leadData: LeadDataType;
	nextPhaseLead: () => void;
}

export const FirstContactActivities = (props: AuctionProps) => {
	return (
		<>
			<CardFunnel
				mainText="Confirmación de datos"
				icon={<IconCheck size="100%" color="#000" />}
				cardContent={
					<BasicBody
						buttonText="Confirmar"
						buttonFunc={props.nextPhaseLead}
						alternativeText="Editar"
						alternativeFunc={() => {
							return;
						}}
					/>
				}
			/>
		</>
	);
};
