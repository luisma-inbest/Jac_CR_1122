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

export const ModifyInterest = (props: Props) => {
	const [val, setVal] = useState("");
	const { CurrentLead, DispatchCurrentLead } = useContext(
		CurrentLeadContext
	) as CurrentLeadContextType;
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;
	const [colors, setColors] = useState([]);

	const addLeadMutation = useMutation({
		mutationFn: () => LeadAPI.modifyInterest(CurrentLead),
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

	const {
		isLoading,
		isError,
		error,
		data: products,
	} = useQuery({
		queryKey: "products",
		queryFn: () => ProductAPI.getAll(2),
		staleTime: 20 * (60 * 1000), // 20 mins
		cacheTime: 25 * (60 * 1000), // 25 mins
		onSuccess: (data) => {
			console.log("data", data);
			console.log("currentlead", CurrentLead);
			if (
				CurrentLead.LeadInterests[0] !== undefined &&
				CurrentLead.LeadInterests[0].ProductId !== undefined
			) {
				// console.log(
				// 	"CurrentLead",
				// 	CurrentLead.LeadInterests[0].ProductId
				// );
				let tempColors =
					data[
						findPositionById(
							data,
							CurrentLead.LeadInterests[0].Product.id
						)
					];

				tempColors =
					tempColors != undefined ? tempColors.ProductColors : [];

				setColors(tempColors);
			}
		},
		onError: (error) => {
			createAlert(
				"error",
				"Error de carga",
				"No se pudo cargar la información"
			);
		},
	});

	function formHandler(e: any) {
		e.preventDefault();
		console.log("sumbmiting form...", CurrentLead);
		addLeadMutation.mutate();
	}

	function findPositionById(arr: any, id: number) {
		if (id == null || id == undefined) {
			console.log("id is null");
			return 0;
		}
		for (let i = 0; i < arr.length; i++) {
			if (arr[i].id === id) {
				return i; // Return the index if the id is found
			}
		}
		return -1; // Return -1 if the id is not found
	}

	if (isLoading) return <p>Loading...</p>;
	if (isError) return <p>Error al cargar productos</p>;

	return (
		<div className={`mt-2 ${styles.form}`}>
			<form onSubmit={(e) => e.preventDefault()}>
				<StyledSelect
					customType="secondary"
					value={
						CurrentLead.LeadInterests[0] != null
							? CurrentLead.LeadInterests[0].ProductId || ""
							: ""
					}
					onChange={(e) => {
						console.log(e.target.value);
						DispatchCurrentLead({
							type: "productId",
							value: e.target.value,
						});
						setColors(
							products[
								findPositionById(
									products,
									Number(e.target.value)
								)
							].ProductColors
						);
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
					value={
						CurrentLead.LeadInterests[0] != null
							? CurrentLead.LeadInterests[0].ProductColorId || ""
							: ""
					}
					onChange={(e) =>
						DispatchCurrentLead({
							type: "colorId",
							value: e.target.value,
						})
					}
				>
					<option value="" disabled>
						-- Color --
					</option>
					{colors?.map((color: any) => {
						return (
							<option key={color.id} value={color.id}>
								{color.name}
							</option>
						);
					})}
				</StyledSelect>
				<StyledSelect
					customType="secondary"
					value={CurrentLead.buyType}
					onChange={(e) => {
						DispatchCurrentLead({
							type: "buyType",
							value: e.target.value,
						});
						e.target.value === "Retail"
							? DispatchCurrentLead({
									type: "units",
									value: 1,
							  })
							: "true";
					}}
				>
					<option value="" disabled>
						-- Tipo de Compra --
					</option>
					<option value="Retail"> Retail </option>
					<option value="Flotilla">Flotilla</option>
				</StyledSelect>
				<Input
					disabled={CurrentLead.buyType === "Flotilla" ? false : true}
					placeholder="Unidades"
					inputType="number"
					value={
						CurrentLead.LeadInterests[0] != null
							? String(CurrentLead.LeadInterests[0].quantity)
							: ""
					}
					type="reducer"
					params={{
						dispatch: DispatchCurrentLead,
						dispType: "units",
					}}
				/>
				<StyledInputSubmit
					value="Actualizar interes"
					customType="primary"
					onClick={formHandler}
				/>
			</form>
		</div>
	);
};

interface SecondProps {
	pageHandler: () => void;
}
const Second = (props: SecondProps) => {
	return <></>;
};
