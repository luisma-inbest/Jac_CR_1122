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

	const red = getComputedStyle(document.documentElement).getPropertyValue(
		"--red"
	);

	function nextPage() {
		setPage(page + 1);
	}
	function previousPage() {
		setPage(page - 1);
	}

	return (
		<div className={`mt-2 ${styles.form}`}>
			{page == 1 ? (
				<First pageHandler={nextPage} />
			) : (
				<>
					{page == 2 ? (
						<Second pageHandler={previousPage} />
					) : (
						<span></span>
					)}
				</>
			)}
		</div>
	);
};

//TODO: desacoplar componentes
interface FirstProps {
	pageHandler: () => void;
}
const First = (props: FirstProps) => {
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
		<>
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
				<StyledInputSubmit
					value="Editar Interes"
					customType="primary"
					onClick={props.pageHandler}
				/>
			</form>
		</>
	);
};

interface SecondProps {
	pageHandler: () => void;
}
const Second = (props: SecondProps) => {
	const [val, setVal] = useState("");
	const { CurrentLead, DispatchCurrentLead } = useContext(
		CurrentLeadContext
	) as CurrentLeadContextType;
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;
	const [colors, setColors] = useState([]);

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
		},
		onError: (error) => {
			createAlert(
				"error",
				"Error de carga",
				"No se pudo cargar la información"
			);
		},
	});

	if (isLoading) return <p>Loading...</p>;

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

	function formHandler(e: any) {
		e.preventDefault();
		console.log("sumbmiting form...", CurrentLead);
		addLeadMutation.mutate();
	}

	function findPositionById(id: number) {
		for (let i = 0; i < products.length; i++) {
			if (products[i].id === id) {
				return i; // Return the index if the id is found
			}
		}
		return -1; // Return -1 if the id is not found
	}

	return (
		<>
			<form onSubmit={(e) => e.preventDefault()}>
				<StyledSelect
					customType="secondary"
					value={CurrentLead.LeadInterests[0].Product.id}
					onChange={(e) => {
						console.log(e.target.value);
						DispatchCurrentLead({
							type: "productId",
							value: e.target.value,
						});
						setColors(
							products[findPositionById(Number(e.target.value))]
								.ProductColors
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
					value={CurrentLead.LeadInterests[0].ProductColorId}
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
					defaultValue=""
					value={
						CurrentLead.LeadInterests[0].quantity > 1
							? "flotilla"
							: "retail"
					}
					disabled={true}
					onChange={(e) => {
						DispatchCurrentLead({
							type: "buyType",
							value: e.target.value,
						});
						e.target.value === "retail"
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
					<option value="retail"> Retail </option>
					<option value="flotilla">Flotilla</option>
				</StyledSelect>
				<Input
					// disabled={CurrentLead.buyType === "flotilla" ? false : true}
					disabled={true}
					placeholder="Unidades"
					inputType="number"
					value={String(CurrentLead.LeadInterests[0].quantity)}
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
		</>
	);
};
