import { useContext, useEffect, useReducer, useState } from "react";
import {
	Button,
	Input,
	StyledSelect,
	StyledInputRadio,
} from "@/components/UI/atoms";
import { AgencyAPI, UserAPI } from "@/apis";
//contexts
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";
import UserContext, { UserContextType } from "@/context/UserContext";
import CurrentAgencyContext, {
	CurrentAgencyContextType,
} from "@/context/currentAgencyContext/CurrentAgencyContext";
//styles
import styles from "./AgencyGeneral.module.css";
import { useMutation } from "react-query";

interface Props {}

export const AgencyGeneral = (props: Props) => {
	//TODO: borrar todo lo de arriba
	const [dataSellers, setDataSellers] = useState<any>([]);
	const { User } = useContext(UserContext) as UserContextType;
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;
	const { CurrentAgency, DispatchCurrentAgency } = useContext(
		CurrentAgencyContext
	) as CurrentAgencyContextType;

	const editAgencyMutation = useMutation({
		mutationFn: () => AgencyAPI.update(CurrentAgency),
		onSuccess(data, variables, context) {
			createAlert(
				"success",
				"Exito!",
				"La información se ha actualizado"
			);
		},
		onError(error, variables, context) {
			console.log(error);
			createAlert("error", "Error", "Hubo un error");
		},
	});

	const handleFormSubmit = (event: any) => {
		event.preventDefault();
		console.log(CurrentAgency);
		editAgencyMutation.mutate();
	};

	useEffect(() => {
		UserAPI.filterSellers(String(CurrentAgency.id), [
			"coordinator",
			"bdc",
			"hostess",
			"adviser-digital",
			"adviser-floor",
			"adviser-hybrid",
		])
			.then((res) => {
				// console.log("sellers:", res);
				setDataSellers(res);
			})
			.catch((err) => {
				console.log("sellers err:", err);
			});

		if (CurrentAgency.AgencyIncomingLeadRuleId == "2") {
			DispatchCurrentAgency({
				type: "AgencyIncomingLeadRuleId",
				value: "2",
			});
		}
	}, []);

	return (
		<>
			<div className="row">
				<div className="col-xs-12 mb-2">
					<h2>Información General</h2>
				</div>
				<div className="col-xs-12 col-md-6 ">
					<Input
						placeholder="Nombre comercial"
						inputType="text"
						value={CurrentAgency.name}
						type="reducer"
						params={{
							dispatch: DispatchCurrentAgency,
							dispType: "name",
						}}
					/>
				</div>
				<div className="col-xs-12 col-md-6 ">
					<Input
						placeholder="Razón social"
						inputType="text"
						value={CurrentAgency.businessName}
						type="reducer"
						params={{
							dispatch: DispatchCurrentAgency,
							dispType: "businessName",
						}}
					/>
				</div>
				<div className="col-xs-12 col-md-4 ">
					<Input
						placeholder="Logo"
						inputType="text"
						value={CurrentAgency.picLogo!}
						type="reducer"
						params={{
							dispatch: DispatchCurrentAgency,
							dispType: "picLogo",
						}}
					/>
				</div>
				<div className="col-xs-12 col-md-4 ">
					<Input
						placeholder="Logo Dark"
						inputType="text"
						value={CurrentAgency.picLogoDark!}
						type="reducer"
						params={{
							dispatch: DispatchCurrentAgency,
							dispType: "picLogoDark",
						}}
					/>
				</div>
				<div className="col-xs-12 col-md-4">
					<Input
						placeholder="URL"
						inputType="text"
						value={CurrentAgency.urlSite!}
						type="reducer"
						params={{
							dispatch: DispatchCurrentAgency,
							dispType: "urlSiteurlSite",
						}}
					/>
				</div>
				<div className="col-xs-12 col-md-6">
					<Input
						placeholder="Vista 360"
						inputType="url"
						value={CurrentAgency.url360View!}
						type="reducer"
						params={{
							dispatch: DispatchCurrentAgency,
							dispType: "url360View",
						}}
					/>
				</div>
				<div className="col-xs-12 col-md-6">
					<Input
						placeholder="URL Google Maps"
						inputType="text"
						value={CurrentAgency.urlGoogleMaps!}
						type="reducer"
						params={{
							dispatch: DispatchCurrentAgency,
							dispType: "urlGoogleMaps",
						}}
					/>
				</div>
				<div className="col-xs-12 col-md-6">
					<Input
						placeholder="SICOP"
						inputType="text"
						value={CurrentAgency.sicop!}
						type="reducer"
						params={{
							dispatch: DispatchCurrentAgency,
							dispType: "sicop",
						}}
					/>
				</div>
				<div className="col-xs-12 col-md-6">
					<Input
						placeholder="Código de transferencia"
						inputType="text"
						value={CurrentAgency.transferCode!}
						type="reducer"
						params={{
							dispatch: DispatchCurrentAgency,
							dispType: "transferCode",
						}}
					/>
				</div>
			</div>

			<div className="row mt-4">
				<div className="col-xs-12">
					<h2>Servicios de Seller</h2>
				</div>
				<div className="col-xs-12">
					<div className={styles.cardContainerChecklist}>
						<div>
							<StyledInputRadio
								name="condition"
								checked={CurrentAgency.hasService}
								onChange={() => {
									DispatchCurrentAgency({
										type: "hasService",
										value: true,
									});
								}}
							/>
							<p className="p4 bold secondary">
								Cuenta con Servicio
							</p>
						</div>

						<div>
							<StyledInputRadio
								name="condition"
								checked={!CurrentAgency.hasService}
								onChange={() => {
									DispatchCurrentAgency({
										type: "hasService",
										value: false,
									});
								}}
							/>
							<p className="p4 bold secondary">
								No Cuenta con Servicio
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="row mt-4">
				<div className="col-xs-12">
					<h2>Asignación de Leads</h2>
				</div>

				<div className="col-xs-12 col-md-6">
					<StyledSelect
						customType="secondary"
						value={CurrentAgency.AgencyIncomingLeadRuleId}
						onChange={(e) => {
							DispatchCurrentAgency({
								type: "AgencyIncomingLeadRuleId",
								value: e.target.value,
							});
						}}
					>
						<option value="" disabled>
							-- Tipo de asignación --
						</option>
						<option value="1">Subasta</option>
						<option value="2">Usuario Asignado</option>
					</StyledSelect>
				</div>

				{CurrentAgency.AgencyIncomingLeadRuleId == "2" ? (
					<div className="col-xs-12 col-md-6">
						<StyledSelect
							customType="secondary"
							value={CurrentAgency.LeadOwnerId}
							onChange={(e: any) => {
								DispatchCurrentAgency({
									type: "LeadOwnerId",
									value: e.target.value,
								});
								console.log(e.target.value);
							}}
						>
							<option value="" disabled>
								-- Asignar Usuario --
							</option>
							{dataSellers.map((seller: any) => {
								return (
									<option value={seller.id} key={seller.id}>
										{seller.nickname}
									</option>
								);
							})}
						</StyledSelect>
					</div>
				) : (
					<></>
				)}
			</div>

			<div className="row mt-4">
				<div className="col-xs-12">
					<h2>Contacto(s)</h2>
				</div>
				<div className="col-xs-12 col-md-6">
					<Input
						placeholder="Nombre del contacto"
						inputType="text"
						disabled={true}
						value={CurrentAgency.name!}
						type="reducer"
						params={{
							dispatch: DispatchCurrentAgency,
							dispType: "",
						}}
					/>
				</div>
				<div className="col-xs-12 col-md-6">
					<Input
						placeholder="Puesto"
						inputType="text"
						disabled={true}
						value={CurrentAgency.name!}
						type="reducer"
						params={{
							dispatch: DispatchCurrentAgency,
							dispType: "",
						}}
					/>
				</div>
				<div className="col-xs-12 col-md-6">
					<Input
						placeholder="Correo"
						inputType="email"
						disabled={true}
						value={CurrentAgency.name!}
						type="reducer"
						params={{
							dispatch: DispatchCurrentAgency,
							dispType: "",
						}}
					/>
				</div>
				<div className="col-xs-12 col-md-6">
					<Input
						placeholder="Teléfono"
						inputType="number"
						disabled={true}
						value={CurrentAgency.name!}
						type="reducer"
						params={{
							dispatch: DispatchCurrentAgency,
							dispType: "",
						}}
					/>
				</div>
				{/* <div className="col-xs-12">
					<span>Mostrar agentes en formularios de citas</span>
				</div> */}
				<div className="col-xs-12">
					<Button
						text="Actualizar"
						func={(even: any) => handleFormSubmit(event)}
						full={true}
					/>
				</div>
			</div>

			{/* <div className="row"></div> */}
		</>
	);
};
