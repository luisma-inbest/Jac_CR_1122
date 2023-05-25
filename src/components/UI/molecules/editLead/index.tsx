import React, { useContext, useEffect, useReducer, useState } from "react";
import {
	StyledInputText,
	Button,
	Input,
	StyledInputSubmit,
	StyledTextArea,
	StyledInputSelect,
	StyledSelect,
	StyledFlotatingWindow,
	StyledFlotatingCard,
	ButtonFields,
	StyledMaterialInput,
} from "@/components/UI/atoms";
import { IconCross } from "@/assets";
import { LeadActivityType } from "@/models";
import { LeadAPI, LeadOriginAPI, ProductAPI } from "@/apis";
import { useMutation, useQuery } from "react-query";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";
import CurrentLeadContext, {
	CurrentLeadContextType,
} from "@/context/currentLeadContext/CurrentLeadContext";
import styles from "./EditLead.module.css";

interface Props {}

export const EditLead = (props: Props) => {
	const [page, setPage] = useState(1);
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;
	const { CurrentLead, DispatchCurrentLead } = useContext(
		CurrentLeadContext
	) as CurrentLeadContextType;
	const [val, setVal] = useState("");

	const red = getComputedStyle(document.documentElement).getPropertyValue(
		"--red"
	);
	const addLeadMutation = useMutation({
		mutationFn: () => LeadAPI.editInfo(CurrentLead),
		onSuccess(data, variables, context) {
			createAlert("success", "Exito", "El lead se editó correctamente");
		},
		onError(error) {
			console.log(error);
			createAlert(
				"error",
				"Error",
				"Hubo un error al crear la actividad"
			);
		},
	});

	function handlePhones() {
		DispatchCurrentLead({
			type: "addPhone",
			value: "",
		});
	}
	function handleEmails() {
		DispatchCurrentLead({
			type: "addEmail",
			value: "",
		});
	}
	function formHandler(e: any) {
		e.preventDefault();
		console.log("sumbmiting form...", CurrentLead);
		addLeadMutation.mutate();
	}

	return (
		<div className={`mt-2 ${styles.form}`}>
			<form action="" onSubmit={(e) => e.preventDefault()}>
				<Input
					placeholder="Nombre(s)"
					inputType="text"
					value={CurrentLead.leadFirstName}
					type="reducer"
					params={{
						dispatch: DispatchCurrentLead,
						dispType: "firstName",
					}}
				/>
				<Input
					placeholder="Apellidos"
					inputType="text"
					value={CurrentLead.leadLastName}
					type="reducer"
					params={{
						dispatch: DispatchCurrentLead,
						dispType: "lastName",
					}}
				/>
				{/* <StyledSelect
					customType="secondary"
					value={CurrentLead.LeadOrigin}
					onChange={(e) => 1}
					disabled={true}
				>
					<option value={0} disabled>
						-- Origen --
					</option>
					{/* {leadOrigins?.map((origin: any) => {
						return (
							<option key={origin.id} value={origin.id}>
								{origin.description}
							</option>
						);
					})} * /}
				</StyledSelect> */}
				{/* <Input
					placeholder="Origen de Lead"
					inputType="text"
					disabled={true}
					value={CurrentLead.LeadOrigin.description}
					type="reducer"
					params={{
						dispatch: DispatchCurrentLead,
						dispType: "",
					}}
				/> */}

				<div className="row mb-5 mt-2">
					{CurrentLead.leadPhones.map((phone, index) => {
						return (
							<div key={index} className="col-xs-12 noPadding">
								<StyledMaterialInput
									customType="white"
									placeholder="Número de contacto"
									type="number"
									value={CurrentLead.leadPhones[index].phone}
									onChange={(e) => {
										DispatchCurrentLead({
											type: "editPhone",
											value: {
												index: index,
												content: e.target.value,
											},
										});
									}}
								/>
							</div>
						);
					})}
					<ButtonFields text="Agregar Telefono" func={handlePhones} />
				</div>

				<div className="row">
					{CurrentLead.leadEmails.map((email, index) => {
						return (
							<div key={index} className="col-xs-12 noPadding">
								<StyledMaterialInput
									customType="white"
									placeholder="correo de contacto"
									type="text"
									value={CurrentLead.leadEmails[index].email}
									onChange={(e) => {
										DispatchCurrentLead({
											type: "editEmail",
											value: {
												index: index,
												content: e.target.value,
											},
										});
									}}
								/>
							</div>
						);
					})}
					<ButtonFields text="Agregar Correo" func={handleEmails} />
				</div>

				<StyledInputSubmit
					value="Actualizar"
					customType="primary"
					onClick={formHandler}
				/>
			</form>
		</div>
	);
};
