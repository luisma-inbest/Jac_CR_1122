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
} from "@/components/UI/atoms";
import { IconCross } from "@/assets";
import { LeadActivityType } from "@/models";
import { LeadAPI } from "@/apis";
import { useMutation } from "react-query";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";
import { reducer, initial } from "./reducer";

interface Props {
	func: () => void;
	LeadId: number;
}

export const RegisterActivity = (props: Props) => {
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;
	const [fields, dispatch] = useReducer(reducer, initial);

	const red = getComputedStyle(document.documentElement).getPropertyValue(
		"--red"
	);

	const addLeadMutation = useMutation({
		mutationFn: () => LeadAPI.addActivity(props.LeadId, fields),
		onSuccess(data, variables, context) {
			console.log("exito papito", data);
			createAlert(
				"success",
				"Actividad Creada",
				"La actividad se creo correctamente"
			);
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
		dispatch({ type: "LeadId", value: props.LeadId });
	}, []);

	return (
		<div id="back" className={`${styles.window}`}>
			<div className={`content-side ${styles.card}`}>
				<h5 className="bold mb-0">Registrar Actividad</h5>
				<span className={styles.iconContainer} onClick={props.func}>
					<IconCross color={red} size="100%" />
				</span>
				<form
					className={`mt-2 ${styles.form}`}
					action=""
					onSubmit={(e) => e.preventDefault()}
				>
					<StyledSelect customType="secondary" defaultValue="">
						<option value="" disabled>
							*-- Tipo --
						</option>
						<option value="">Whatsapp</option>
						<option value="">Llamada</option>
						<option value="">Correo</option>
					</StyledSelect>

					<Input
						placeholder="Titulo"
						inputType="text"
						type="reducer"
						value={fields.leadActivityType}
						params={{
							dispatch: dispatch,
							dispType: "typeActivity",
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

					<StyledInputSelect
						value={fields.status}
						onChange={(e) =>
							dispatch({ type: "status", value: e.target.value })
						}
					>
						<option value="1" selected disabled>
							-- Estado --
						</option>
						<option value="success">Exitoso</option>
						<option value="fail">Fallido</option>
					</StyledInputSelect>
					<StyledInputSubmit
						value="Registrar"
						customType="primary"
						onClick={formHandler}
					/>
				</form>
				<span className="buttonContainer">
					<Button func={props.func} text="cancelar" full={false} />
				</span>
			</div>
		</div>
	);
};
