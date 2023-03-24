import React, { useContext, useEffect, useReducer, useState } from "react";
import styles from "./CreateEvent.module.css";
import {
	StyledInputText,
	Button,
	Input,
	StyledInputSubmit,
	ButtonFields,
	StyledSelect,
	StyledTextArea,
	StyledInputDate,
	StyledInputTime,
} from "@/components/UI/atoms";
import { IconCross } from "@/assets";
import { reducer, initial } from "./reducer";
import { Lead } from "@/models";
import { useMutation, useQuery } from "react-query";
import { LeadAPI, LeadOriginAPI } from "@/apis";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";
import UserContext, { UserContextType } from "@/context/UserContext";

interface Props {
	func: () => void;
	leadId?: number;
}

export const CreateAgendaEvent = (props: Props) => {
	const red = getComputedStyle(document.documentElement).getPropertyValue(
		"--red"
	);
	const [fields, dispatch] = useReducer(reducer, initial);
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;
	const [currentLead, setCurrentLead] = useState(props.leadId || null);

	// const addLeadMutation = useMutation({
	// 	mutationFn: () => LeadAPI.create(fields),
	// 	onSuccess(data, variables, context) {
	// 		console.log(data);
	// 		createAlert(
	// 			"success",
	// 			"Lead Creado",
	// 			"El lead se creo correctamente"
	// 		);
	// 	},
	// 	onError(error, variables, context) {
	// 		console.log(error);
	// 		createAlert("error", "Error", "Hubo un error al crear el lead");
	// 	},
	// });

	function formHandler(e: any) {
		e.preventDefault();
		console.log("sumbmiting form...", fields);

		// addLeadMutation.mutate();
	}

	useEffect(() => {
		// dispatch({ type: "AgencyId", value: Number(User!.AgencyId) });
	}, []);

	return (
		<div id="back" className={`${styles.window}`}>
			<div className={`content-side ${styles.card}`}>
				<h5 className="bold mb-0">Crear Nuevo Evento</h5>
				<span className={styles.iconContainer} onClick={props.func}>
					<IconCross color={red} size="100%" />
				</span>
				<form action="" onSubmit={(e) => e.preventDefault()}>
					<Input
						placeholder="Titulo"
						inputType="text"
						value={fields.title}
						type="reducer"
						params={{
							dispatch: dispatch,
							dispType: "firstName",
						}}
					/>
					<StyledTextArea
						placeholder="Comentarios"
						value={fields.comments}
						onChange={(e) =>
							dispatch({
								type: "comments",
								value: e.target.value,
							})
						}
					/>

					{currentLead ? (
						<StyledInputText
							placeholder="Lead"
							value={String(props.leadId)}
							disabled={true}
							customType="secondary"
						/>
					) : (
						<></>
					)}

					<div className={styles.datePicker}>
						<StyledInputDate
							customType="secondary"
							onChange={(e) =>
								dispatch({
									type: "date",
									value: new Date(e.target.value),
								})
							}
						/>
						<StyledInputTime
							customType="secondary"
							onChange={(e) =>
								dispatch({
									type: "date",
									value: new Date(e.target.value),
								})
							}
						/>
					</div>

					<StyledInputSubmit
						value="Crear"
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
