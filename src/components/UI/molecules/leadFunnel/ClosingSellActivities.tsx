import React from "react";
import { Button, CardFunnel } from "@/components/UI/atoms";
import styles from "./FunnelComponents.module.css";
import { IconWhatsapp } from "@/assets";
import { BasicBody } from "./Activities";
import { LeadDataType } from "@/models";

interface AuctionProps {
	leadData: LeadDataType;
}

export const ClosingSellsActivities = (props: AuctionProps) => {
	return (
		<>
			<CardFunnel
				mainText="Tomar"
				icon={<IconWhatsapp size="100%" color="#000" />}
				cardContent={
					<BasicBody
						buttonText="tomar"
						buttonFunc={() => {
							return;
						}}
						alternativeText=""
						alternativeFunc={() => {
							return;
						}}
					/>
				}
			/>
		</>
	);
};
