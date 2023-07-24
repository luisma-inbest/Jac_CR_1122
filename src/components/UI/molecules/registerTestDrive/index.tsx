import React, { useContext, useEffect, useReducer, useState } from "react";
import styles from "./RegisterTestDrive.module.css";
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
	StyledInputDate,
	StyledInputTime,
} from "@/components/UI/atoms";
import { IconCross } from "@/assets";
import { LeadActivityType } from "@/models";
import { LeadAPI, ProductAPI } from "@/apis";
import { useMutation, useQuery } from "react-query";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";
import { reducer, initial } from "./reducer";
import CurrentLeadContext, {
	CurrentLeadContextType,
} from "@/context/currentLeadContext/CurrentLeadContext";
import UserContext, { UserContextType } from "@/context/UserContext";

interface Props {}

export const RegisterTestDrive = (props: Props) => {
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;
	const [fields, dispatch] = useReducer(reducer, initial);
	const { CurrentLead, DispatchCurrentLead } = useContext(
		CurrentLeadContext
	) as CurrentLeadContextType;
	const { User, SetUser } = useContext(UserContext) as UserContextType;
	const red = getComputedStyle(document.documentElement).getPropertyValue(
		"--red"
	);
	const [colors, setColors] = useState([]);

	const addLeadMutation = useMutation({
		mutationFn: () =>
			LeadAPI.testDriveAppointment({
				date: new Date(Date.parse(`${fields.date}T${fields.time}:00`)),
				comments: "",
				UserId: fields.UserId,
				ProductId: fields.ProductId,
				LeadId: fields.LeadId,
				AgencyId: fields.AgencyId,
			}),
		onSuccess(data, variables, context) {
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
		addLeadMutation.mutate();
	}

	useEffect(() => {
		dispatch({ type: "LeadId", value: CurrentLead.id });
		dispatch({ type: "UserId", value: User!.id });
		/*
		? Bug: si se refresca la página por defecto cargará
		? en otra agencia por lo que se debería validar en el backend
		? o buscar otra solución
		*/
		dispatch({ type: "AgencyId", value: User!.AgencyId });
	}, []);

	const {
		isLoading,
		isError,
		error,
		data: products,
	} = useQuery({
		queryKey: "products",
		queryFn: () => ProductAPI.getAll(0),
		staleTime: 20 * (60 * 1000), // 20 mins
		cacheTime: 25 * (60 * 1000), // 25 mins
		onError: (error) => {
			createAlert(
				"error",
				"Error de carga",
				"No se encontraron productos"
			);
		},
	});

	if (isLoading) return <p>Loading...</p>;
	if (isError) return <p>Error</p>;

	return (
		<form
			className={`mt-2 ${styles.form}`}
			action=""
			onSubmit={(e) => e.preventDefault()}
		>
			<StyledSelect
				customType="secondary"
				defaultValue=""
				onChange={(e) => {
					console.log(e.target.value);
					dispatch({
						type: "ProductId",
						value: products[e.target.value].id,
					});
				}}
			>
				<option value="" disabled>
					-- Producto --
				</option>
				{products?.map((product: any, index: any) => {
					return (
						<option key={product.id} value={product.id}>
							{product.name} {product.version}
						</option>
					);
				})}
			</StyledSelect>

			<StyledSelect
				customType="secondary"
				defaultValue=""
				onChange={(e) => {
					console.log(e.target.value);
					dispatch({
						type: "ProductId",
						value: products[e.target.value].id,
					});
				}}
			>
				<option value="" disabled>
					-- Tipo --
				</option>
				<option value="1">Prueba de Menajo</option>
				<option value="1">Prueba Estática</option>
				<option value="1">Demo Showroom 360</option>
			</StyledSelect>

			<div className={styles.datePicker}>
				<StyledInputDate
					customType="secondary"
					onChange={(e) =>
						dispatch({
							type: "date",
							value: e.target.value,
						})
					}
				/>

				<StyledInputTime
					customType="secondary"
					onChange={(e) =>
						dispatch({
							type: "time",
							value: e.target.value,
						})
					}
				/>
			</div>

			<StyledInputSubmit
				value="Agendar"
				customType="primary"
				onClick={formHandler}
			/>
		</form>
	);
};
