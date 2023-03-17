import React, { useState } from "react";
import {
	Button,
	CardFunnel,
	StyledInputSelect,
	StyledSelect,
} from "@/components/UI/atoms";
import styles from "./LeadFunnel.module.css";
import { IconCheck, IconWhatsapp } from "@/assets";
import { BasicBody } from "./Activities";
import { LeadDataType } from "@/models";
import { StyledInputRadio } from "@/components/UI/atoms";

interface AuctionProps {
	leadData: LeadDataType;
	activityHandler: (activity: string) => void;
}

export const ClosingSellsActivities = (props: AuctionProps) => {
	const [readioValue, setRadioValue] = useState({
		flotilla: false,
		demo: false,
		menudeo: true,
	});
	const [exchangeCar, setExchangeCar] = useState(false);
	const [digitalSell, setDigitalSell] = useState(false);
	return (
		<>
			<CardFunnel
				mainText="Unidad VIN"
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
			/>
			<CardFunnel
				mainText="RFC Cliente"
				icon={<IconCheck size="100%" color="#000" />}
				cardContent={
					<BasicBody
						buttonText="Modificar"
						buttonFunc={() => {
							return;
						}}
						alternativeText="RFC"
						alternativeFunc={() => {
							return;
						}}
					/>
				}
			/>

			<CardFunnel
				mainText="Tipo de Venta"
				icon={<IconCheck size="100%" color="#000" />}
				cardContent={
					<div className={styles.cardContainerChecklist}>
						<div>
							<p className="p4 bold secondary">Flotilla</p>
							<StyledInputRadio
								checked={readioValue.flotilla}
								onChange={() => {
									setRadioValue({
										flotilla: true,
										demo: false,
										menudeo: false,
									});
								}}
							/>
						</div>

						<div>
							<p className="p4 bold secondary">Demo</p>
							<StyledInputRadio
								checked={readioValue.demo}
								onChange={() => {
									setRadioValue({
										flotilla: false,
										demo: true,
										menudeo: false,
									});
								}}
							/>
						</div>

						<div>
							<p className="p4 bold secondary">Menudeo</p>
							<StyledInputRadio
								checked={readioValue.menudeo}
								onChange={() => {
									setRadioValue({
										flotilla: false,
										demo: false,
										menudeo: true,
									});
								}}
							/>
						</div>
					</div>
				}
			/>
			<CardFunnel
				mainText="Método de Pago"
				icon={<IconCheck size="100%" color="#000" />}
				cardContent={
					<StyledSelect
						customType="secondary"
						value={0}
						onChange={(e) => {
							return;
						}}
					>
						<option value={0} disabled>
							-- Método de Pago --
						</option>
					</StyledSelect>
				}
			/>

			<CardFunnel
				mainText="Seguro Financiado"
				icon={<IconCheck size="100%" color="#000" />}
				cardContent={
					<StyledSelect
						customType="secondary"
						value={0}
						onChange={(e) => {
							return;
						}}
					>
						<option value={0} disabled>
							-- Seguro Financiado --
						</option>
					</StyledSelect>
				}
			/>

			<CardFunnel
				mainText="Aseguradora"
				icon={<IconCheck size="100%" color="#000" />}
				cardContent={
					<StyledSelect
						customType="secondary"
						value={0}
						onChange={(e) => {
							return;
						}}
					>
						<option value={0} disabled>
							-- Aseguradora --
						</option>
					</StyledSelect>
				}
			/>

			<CardFunnel
				mainText="Tomaron auto a cambio"
				icon={<IconCheck size="100%" color="#000" />}
				cardContent={
					<div className={styles.cardContainerChecklist}>
						<div>
							<p className="p4 bold secondary">Si</p>
							<StyledInputRadio
								checked={exchangeCar}
								onChange={() => {
									setExchangeCar(true);
								}}
							/>
						</div>

						<div>
							<p className="p4 bold secondary">No</p>
							<StyledInputRadio
								checked={!exchangeCar}
								onChange={() => {
									setExchangeCar(false);
								}}
							/>
						</div>
					</div>
				}
			/>

			<CardFunnel
				mainText="Venta digital"
				icon={<IconCheck size="100%" color="#000" />}
				cardContent={
					<div className={styles.cardContainerChecklist}>
						<div>
							<p className="p4 bold secondary">Si</p>
							<StyledInputRadio
								checked={digitalSell}
								onChange={() => {
									setDigitalSell(true);
								}}
							/>
						</div>

						<div>
							<p className="p4 bold secondary">No</p>
							<StyledInputRadio
								checked={!digitalSell}
								onChange={() => {
									setDigitalSell(false);
								}}
							/>
						</div>
					</div>
				}
			/>
		</>
	);
};
