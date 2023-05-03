import React, { useReducer, useContext, useState } from "react";
import {
	Input,
	Button,
	CardFunnel,
	StyledInputSelect,
	StyledSelect,
} from "@/components/UI/atoms";
import styles from "./LeadFunnel.module.css";
//import { reducer, initial } from "./reducer";
import { IconCheck, IconWhatsapp } from "@/assets";
import { BasicBody } from "./Activities";
import { LeadDataType } from "@/models";
import { StyledInputRadio } from "@/components/UI/atoms";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";
import { useMutation } from "react-query";
import { LeadAPI } from "@/apis";

interface AuctionProps {
	leadData: LeadDataType;
}

export const ClosingSellsActivities = (props: AuctionProps) => {
	//const [fields, dispatch] = useReducer(reducer, initial);
	const [radioValue, setRadioValue] = useState({
		nuevo: true,
		demo: false,
		seminuevo: false,
	});
	const [exchangeCar, setExchangeCar] = useState(false);
	const [digitalSell, setDigitalSell] = useState(false);
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;

	const [editVin, setEditVin] = useState(false);
	const [vin, setVin] = useState("");
	const [metodoPago, setMetodoPago] = useState("0");
	const [seguroFinanciado, setSeguroFinanciado] = useState("0");
	const [aseguradora, setAseguradora] = useState("0");

	const editVINFunc = useMutation({
		mutationFn: () =>
			LeadAPI.editInfo(String(props.leadData.id), {
				data: {
					rfc: vin,
				},
			}),
		onSuccess(data, variables, context) {
			console.log(data);
			createAlert("success", "Venta actualizada", "El VIN se actualizó");
		},
		onError(error, variables, context) {
			console.log(error);
			createAlert("error", "Error", "Hubo un error al actualizar");
		},
	});

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
									<input
										className={styles.input}
										placeholder="VIN"
										value={vin!}
										disabled={!editVin}
										type="text"
										onChange={(e) => setVin(e.target.value)}
									/>
									<Button
										text={editVin ? "Guardar" : "Editar"}
										func={() => {
											if (editVin) {
												console.log("llamo backend");
												editVINFunc.mutate();
											}
											setEditVin(!editVin);
										}}
										full={false}
									/>
								</div>
							}
						/>

						<CardFunnel
							mainText="Tipo de Venta"
							icon={<IconCheck size="100%" color="#000" />}
							cardContent={
								<div className={styles.cardContainerChecklist}>
									<div>
										<p className="p4 bold secondary">
											Nuevo
										</p>
										<StyledInputRadio
											checked={radioValue.nuevo}
											onChange={() => {
												setRadioValue({
													nuevo: true,
													demo: false,
													seminuevo: false,
												});
											}}
										/>
									</div>

									<div>
										<p className="p4 bold secondary">
											Demo
										</p>
										<StyledInputRadio
											checked={radioValue.demo}
											onChange={() => {
												setRadioValue({
													nuevo: false,
													demo: true,
													seminuevo: false,
												});
											}}
										/>
									</div>

									<div>
										<p className="p4 bold secondary">
											Seminuevo
										</p>
										<StyledInputRadio
											checked={radioValue.seminuevo}
											onChange={() => {
												setRadioValue({
													nuevo: false,
													demo: false,
													seminuevo: true,
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
									value={metodoPago}
									onChange={(e) => {
										setMetodoPago(e.target.value);
									}}
								>
									<option value={0} disabled>
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
									value={seguroFinanciado}
									onChange={(e) => {
										setSeguroFinanciado(e.target.value);
									}}
								>
									<option value={"0"} disabled>
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
									value={aseguradora}
									onChange={(e) => {
										setAseguradora(e.target.value);
									}}
								>
									<option value={"0"} disabled>
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
							return;
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
					func={() => console.log("actualizar lead info")}
				/>
			</div>
		</>
	);
};
