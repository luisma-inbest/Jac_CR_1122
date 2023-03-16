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

export const AuctionActivities = (props: AuctionProps) => {
	return (
		<>
			<CardFunnel
				mainText="Tomar"
				icon={<IconCheck size="100%" color="#000" />}
				cardContent={
					<BasicBody
						buttonText="tomar"
						buttonFunc={() => props.nextPhaseLead()}
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
