import React, { useContext, useEffect, useReducer, useState } from "react";
import styles from "./RuleOutActivity.module.css";
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
} from "@/components/UI/atoms";
import { IconCross } from "@/assets";
import { LeadActivityType } from "@/models";
import { LeadAPI } from "@/apis";
import { useMutation } from "react-query";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";
import { reducer, initial } from "./reducer";
import CurrentLeadContext, {
	CurrentLeadContextType,
} from "@/context/currentLeadContext/CurrentLeadContext";
import { StyledInputDate } from "../../atoms/StyledInputs";
import { useSearchParams } from "react-router-dom";

interface Props {
	ruleOutType: string;
}

const frezzeLead = [
	"Los datos del lead son incorrectos",
	"Solo pidio informacion, no tiene interés de compra",
	"No se tiene el modelo enn inventario",
	"El modelo no cubre sus necesiddades",
	"El precio es alto",
	"ya compró en otra marca",
	"Oferta comercial poco atractiva",
	"Solicitud de crédito rechazada",
];

export const RuleOutActivity = (props: Props) => {
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;
	const [fields, dispatch] = useReducer(reducer, initial);
	const { CurrentLead } = useContext(
		CurrentLeadContext
	) as CurrentLeadContextType;

	const red = getComputedStyle(document.documentElement).getPropertyValue(
		"--red"
	);

	function ruleOutLead(phase: string) {
		let data = {
			newPhase: phase,
			comments: "comentario hardcodeado",
			reactivationDate: new Date(),
		};
		console.log(data);
		LeadAPI.ruleOut(CurrentLead.id, data)
			.then((res) => {
				createAlert(
					"success",
					"Lead descartado",
					"El estatus del lead ha cambiado"
				);
				// props.refresher(!props.refresh);
			})
			.catch((err) => {
				createAlert(
					"error",
					"Error al descartar lead",
					"Hubo un error"
				);
			});
	}
	// ruleOutLead("congelado");
	// ruleOutLead("futura-venta");

	function formHandler(e: any) {
		e.preventDefault();

		console.log("sumbmiting form...", fields);
		dispatch({ type: "date", value: new Date() });
		// addLeadMutation.mutate();
	}

	useEffect(() => {
		dispatch({ type: "date", value: new Date() });
		dispatch({ type: "LeadId", value: CurrentLead.id });
	}, []);

	if (props.ruleOutType === "freeze") {
		return (
			<form
				className={`mt-2 ${styles.form}`}
				action=""
				onSubmit={(e) => e.preventDefault()}
			>
				<StyledSelect
					customType="secondary"
					defaultValue=""
					onChange={(e) =>
						dispatch({
							type: "typeActivity",
							value: e.target.value,
						})
					}
				>
					<option value="" disabled>
						*-- Razón --
					</option>
					{frezzeLead.map((reason) => (
						<option value={reason}>{reason}</option>
					))}
				</StyledSelect>

				<StyledInputSubmit
					value="Congelar"
					customType="primary"
					onClick={() => ruleOutLead("congelado")}
				/>
			</form>
		);
	}

	if (props.ruleOutType === "future-sell") {
		return (
			<form
				className={`mt-2 ${styles.form}`}
				action=""
				onSubmit={(e) => e.preventDefault()}
			>
				<label className="p2">Fecha Tentativa de Compra:</label>
				<StyledInputDate customType="secondary" />

				<StyledInputSubmit
					value="Futura Compra"
					customType="primary"
					onClick={() => ruleOutLead("futura-venta")}
				/>
			</form>
		);
	}

	return <h2>Campo no valido</h2>;
};
