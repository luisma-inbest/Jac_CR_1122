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
import { SaleAPI } from "@/apis/APISales";

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

	const SaleMutation = useMutation({
		mutationFn: () => SaleAPI.update(fields),
		onSuccess(data, variables, context) {
			console.log(data);
			createAlert(
				"success",
				"Venta modificada",
				"La información se subió correctamente"
			);
		},
		onError(error, variables, context) {
			console.log(error);
			createAlert(
				"error",
				"Error",
				"Hubo un error al modificar la venta"
			);
		},
	});

	useEffect(() => {
		dispatch({
			type: "all",
			value: {
				id: CurrentLead.Sales[0].id,
				leadId: CurrentLead.id,
				vins: CurrentLead.Sales[0].SaleVINs,
				condition: CurrentLead.Sales[0].SaleCondition.slug,
				payment: CurrentLead.Sales[0].SalePayment.slug,
				bank: CurrentLead.Sales[0].SaleBank.slug,
				insuranceCarrier: CurrentLead.Sales[0].SaleEnsurance.slug,
				takeCarInExange: CurrentLead.Sales[0].takeCarInExange,
				businessName: CurrentLead.Sales[0].BusinessName,
				taxRegime: CurrentLead.Sales[0].TaxRegime,
				saleType: CurrentLead.Sales[0].SaleType.description,
				digitalSale: false,
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
								<div
									className={styles.cardContainerAlternative}
								>
									{CurrentLead.Sales[0].SaleVINs.map(
										(vin: any, index: any) => (
											<Input
												key={index}
												placeholder="VIN"
												inputType="text"
												value={vin.VIN}
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
							mainText="Regimen Fiscal"
							icon={<IconCheck size="100%" color="#000" />}
							cardContent={
								<div className={styles.cardContainerClasic}>
									<Input
										placeholder="Regimen Fiscal"
										inputType="text"
										value={fields.taxRegime}
										type="reducer"
										params={{
											dispatch: dispatch,
											dispType: "taxRegime",
										}}
									/>
								</div>
							}
						/>
						<CardFunnel
							mainText="Razón social"
							icon={<IconCheck size="100%" color="#000" />}
							cardContent={
								<div className={styles.cardContainerClasic}>
									<Input
										placeholder="Razón Social"
										inputType="text"
										value={fields.businessName}
										type="reducer"
										params={{
											dispatch: dispatch,
											dispType: "businessName",
										}}
									/>
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
											checked={
												fields.condition === "nuevo"
											}
											onChange={() => {
												dispatch({
													type: "condition",
													value: "nuevo",
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
											checked={
												fields.condition === "demo"
											}
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
									value={fields.payment}
									onChange={(e) => {
										dispatch({
											type: "payment",
											value: e.target.value,
										});
									}}
								>
									<option value="0" disabled>
										-- Método de Pago --
									</option>
									<option value="contado"> Contado </option>
									<option value="credito">Crédito</option>
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
									<option value="a.n.a">A.N.A</option>
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
											checked={
												fields.takeCarInExange === true
											}
											onChange={() => {
												dispatch({
													type: "exangeCar",
													value: true,
												});
											}}
										/>
									</div>

									<div>
										<p className="p4 bold secondary">No</p>
										<StyledInputRadio
											name="exchangeCar"
											checked={
												fields.takeCarInExange === false
											}
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
						SaleMutation.mutate();
					}}
				/>
				<Button
					text="Imprimir"
					full={true}
					func={() => {
						console.log(fields);
					}}
				/>
			</div>
		</>
	);
};
