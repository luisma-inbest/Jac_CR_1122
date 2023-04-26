import React, { useContext, useEffect, useReducer, useState } from "react";
import styles from "./RegisterActivity.module.css";
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
import activitytypes from "./activitiyTypes";
import CurrentLeadContext, {
	CurrentLeadContextType,
} from "@/context/CurrentLeadContext";

interface Props {}

export const RegisterActivity = (props: Props) => {
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;
	const [fields, dispatch] = useReducer(reducer, initial);
	const { CurrentLead, SetCurrentLead } = useContext(
		CurrentLeadContext
	) as CurrentLeadContextType;

	const red = getComputedStyle(document.documentElement).getPropertyValue(
		"--red"
	);

	const addLeadMutation = useMutation({
		mutationFn: () => LeadAPI.addActivity(fields),
		onSuccess(data, variables, context) {
			createAlert(
				"success",
				"Actividad Creada",
				"La actividad se creo correctamente"
			);
			SetCurrentLead({
				...CurrentLead,
				LeadActivities: [fields, ...CurrentLead.LeadActivities],
			});
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

	function formHandler(e: any) {
		e.preventDefault();

		console.log("sumbmiting form...", fields);
		dispatch({ type: "date", value: new Date() });
		addLeadMutation.mutate();
	}

	useEffect(() => {
		dispatch({ type: "date", value: new Date() });
		dispatch({ type: "LeadId", value: CurrentLead.id });
	}, []);

	return (
		<form
			className={`mt-2 ${styles.form}`}
			action=""
			onSubmit={(e) => e.preventDefault()}
		>
			<h2>El id es: {CurrentLead.id}</h2>
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
					*-- Tipo --
				</option>
				{activitytypes.map((type: any) => (
					<option value={type.slug} key={type.slug}>
						{type.description}
					</option>
				))}
			</StyledSelect>

			<Input
				placeholder="Titulo"
				inputType="text"
				type="reducer"
				value={fields.title}
				params={{
					dispatch: dispatch,
					dispType: "title",
				}}
			/>

			<StyledTextArea
				placeholder="Comentarios"
				value={fields.comments}
				onChange={(e) =>
					dispatch({
						type: "commentsActivity",
						value: e.target.value,
					})
				}
			></StyledTextArea>

			<StyledSelect
				customType="secondary"
				defaultValue="1"
				onChange={(e) =>
					dispatch({ type: "status", value: e.target.value })
				}
			>
				<option value="1" disabled>
					-- Estado --
				</option>
				<option value={0}>Exitoso</option>
				<option value={1}>Fallido</option>
			</StyledSelect>

			<StyledInputSubmit
				value="Registrar"
				customType="primary"
				onClick={formHandler}
			/>
		</form>
	);
};
