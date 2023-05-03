import React, { useReducer, useContext, useState, useEffect } from "react";
import {
	Input,
	Button,
	CardFunnel,
	StyledInputSelect,
	StyledSelect,
} from "@/components/UI/atoms";
import styles from "./../LeadFunnel.module.css";
//import { reducer, initial } from "./reducer";
import { IconCheck, IconWhatsapp } from "@/assets";
import { BasicBody } from "../Activities";
import { LeadDataType } from "@/models";
import { StyledInputRadio } from "@/components/UI/atoms";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";
import { useMutation } from "react-query";
import { LeadAPI } from "@/apis";
import { reducer, initial } from "./reducer";
import CurrentLeadContext, {
	CurrentLeadContextType,
} from "@/context/currentLeadContext/CurrentLeadContext";

interface AuctionProps {
	leadData: LeadDataType;
}

export const ClosingSellsActivities = (props: AuctionProps) => {
	//const [fields, dispatch] = useReducer(reducer, initial);
	const [radioValue, setRadioValue] = useState({
		nuevo: true,
		demo: false,
	});
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;
	const { CurrentLead } = useContext(
		CurrentLeadContext
	) as CurrentLeadContextType;
	const [fields, dispatch] = useReducer(reducer, initial);

	function nextPhaseLead() {
		LeadAPI.nextPhase(CurrentLead.id)
			.then((res) => {
				createAlert(
					"success",
					"Fase actualizada",
					"El estatus del lead ha cambiado"
				);
			})
			.catch((err) => {
				createAlert(
					"error",
					"Error al actualizar fase",
					"Hubo un error"
				);
			});
	}

	useEffect(() => {
		//TODO: falta razón social y situación fiscal
		dispatch({
			type: "all",
			value: {
				id: CurrentLead.Sales[0].id,
				vins: CurrentLead.Sales[0].SaleVINs,
				condition: CurrentLead.Sales[0].SaleCondition,
				PaymentMethod: CurrentLead.Sales[0].SalePayment,
				bank: CurrentLead.Sales[0].SaleBank,
				insuranceCarrier: CurrentLead.Sales[0].insuranceCarrier,
				takeCarInExange: CurrentLead.Sales[0].SaleTakeCarInExange,
			},
		});
	}, []);

	return (
		<>
			<CardFunnel
				mainText="Datos de Venta"
				icon={<IconCheck size="100%" color="#000" />}
				cardContent={
					<>
						<CardFunnel
							mainText="Unidad VIN"
							icon={<IconCheck size="100%" color="#000" />}
							cardContent={
								<div className={styles.cardContainerClasic}>
									{CurrentLead.Sales[0].SaleVINs.map(
										(vin: any, index: any) => (
											<Input
												placeholder="VIN"
												inputType="text"
												value={vin}
												type="reducer"
												params={{
													dispatch: dispatch,
													dispType: "firstName",
												}}
											/>
										)
									)}
								</div>
							}
						/>

						<CardFunnel
							mainText="Condición de Venta"
							icon={<IconCheck size="100%" color="#000" />}
							cardContent={
								<div className={styles.cardContainerChecklist}>
									<div>
										<p className="p4 bold secondary">
											Nuevo
										</p>
										<StyledInputRadio
											name="condition"
											onChange={() => {
												dispatch({
													type: "condition",
													value: "new",
												});
											}}
										/>
									</div>

									<div>
										<p className="p4 bold secondary">
											Demo
										</p>
										<StyledInputRadio
											name="condition"
											onChange={() => {
												dispatch({
													type: "condition",
													value: "demo",
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
									value={fields.paymentMethod}
									onChange={(e) => {
										dispatch({
											type: "paymentMethod",
											value: e.target.value,
										});
									}}
								>
									<option value="0" disabled>
										-- Método de Pago --
									</option>
									<option value="cash"> Contado </option>
									<option value="credit">Crédito</option>
									<option value="leasing">Leasing</option>
								</StyledSelect>
							}
						/>

						<CardFunnel
							mainText="Banco"
							icon={<IconCheck size="100%" color="#000" />}
							cardContent={
								<StyledSelect
									customType="secondary"
									value={fields.bank}
									onChange={(e) => {
										dispatch({
											type: "bank",
											value: e.target.value,
										});
									}}
								>
									<option value="0" disabled>
										-- Banco --
									</option>
									<option value="contado">CONTADO</option>
									<option value="cetelem">CETELEM</option>
									<option value="solufi">SOLUFI</option>
									<option value="otro">OTRO</option>
								</StyledSelect>
							}
						/>

						<CardFunnel
							mainText="Aseguradora"
							icon={<IconCheck size="100%" color="#000" />}
							cardContent={
								<StyledSelect
									customType="secondary"
									value={fields.insuranceCarrier}
									onChange={(e) => {
										dispatch({
											type: "insuranceCarrier",
											value: e.target.value,
										});
									}}
								>
									<option value="0" disabled>
										-- Aseguradora --
									</option>
									<option value="bbva">BBVA</option>
									<option value="banorte">BANORTE</option>
									<option value="qualitas">QUALITAS</option>
									<option value="ana">A.N.A</option>
									<option value="gnp">GNP</option>
									<option value="axa">AXA</option>
									<option value="hdi">HDI</option>
									<option value="chubb">CHUBB</option>
									<option value="aig">AIG</option>
									<option value="hsbc">HSBC</option>
									<option value="afirme">AFIRME</option>
									<option value="agroasemex">
										AGROASEMEX
									</option>
									<option value="sura">SURA</option>
									<option value="zurich">ZURICH</option>
									<option value="inbursa">INBURSA</option>
									<option value="mapfre">MAPFRE</option>
									<option value="citibanamex">
										CITIBANAMEX
									</option>
									<option value="otro">OTRO</option>
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
											name="exchangeCar"
											onChange={() => {
												dispatch({
													type: "exchangeCar",
													value: true,
												});
											}}
										/>
									</div>

									<div>
										<p className="p4 bold secondary">No</p>
										<StyledInputRadio
											name="exchangeCar"
											onChange={() => {
												dispatch({
													type: "exangeCar",
													value: false,
												});
											}}
										/>
									</div>
								</div>
							}
						/>
					</>
				}
			/>

			<CardFunnel
				mainText="Entrega"
				icon={<IconCheck size="100%" color="#000" />}
				cardContent={
					<div className={styles.cardContainerChecklist}>
						{/* task */}
						<div>
							<p className="p4 bold secondary">
								Verificación de Inventario
							</p>
							{/* <input type="checkbox" name="scales" checked={true} /> */}
							<input type="checkbox" name="scales" />
						</div>
						{/* task */}
						<div>
							<p className="p4 bold secondary">
								Programacion de entrega
							</p>
							{/* <input type="checkbox" name="scales" checked={true} /> */}
							<input type="checkbox" name="scales" />
						</div>
						{/* task */}
						<div>
							<p className="p4 bold secondary">
								Programación de documentos
							</p>
							{/* <input type="checkbox" name="scales" checked={true} /> */}
							<input type="checkbox" name="scales" />
						</div>
						{/* task */}
						<div>
							<p className="p4 bold secondary">
								Explicación y firma de seguro, garantía plan de
								seguros
							</p>
							{/* <input type="checkbox" name="scales" checked={true} /> */}
							<input type="checkbox" name="scales" />
						</div>
						{/* task */}
						<div>
							<p className="p4 bold secondary">Develación</p>
							{/* <input type="checkbox" name="scales" checked={true} /> */}
							<input type="checkbox" name="scales" />
						</div>
						{/* task */}
						<div>
							<p className="p4 bold secondary">
								Explicación final de las funciones del vehículo
							</p>
							{/* <input type="checkbox" name="scales" checked={true} /> */}
							<input type="checkbox" name="scales" />
						</div>
					</div>
				}
			/>

			<CardFunnel
				mainText="Cerrar Venta"
				icon={<IconCheck size="100%" color="#000" />}
				cardContent={
					<BasicBody
						buttonText="Cerrar Venta"
						buttonFunc={() => {
							nextPhaseLead();
						}}
						alternativeText=""
						alternativeFunc={() => {
							return;
						}}
					/>
				}
			/>

			<div className="mt-2">
				<Button
					text="Guardar"
					full={true}
					func={() => {
						console.log("actualizar lead info");
						console.log(fields);
					}}
				/>
			</div>
		</>
	);
};
