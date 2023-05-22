import React, { useContext, useEffect, useReducer, useState } from "react";
import styles from "./CreateLead.module.css";
import {
	StyledInputText,
	Button,
	Input,
	StyledInputSubmit,
	ButtonFields,
	StyledSelect,
} from "@/components/UI/atoms";
import { IconCross } from "@/assets";
import { reducer, initial } from "./reducer";
import { Lead } from "@/models";
import { useMutation, useQuery } from "react-query";
import { LeadAPI, LeadOriginAPI, ProductAPI } from "@/apis";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";
import UserContext, { UserContextType } from "@/context/UserContext";

interface Props {
	func: () => void;
	refreshFunc: (val: boolean) => void;
	refresh: boolean;
}

export const CreateLead = (props: Props) => {
	const [page, setPage] = useState(1);
	const { User, SetUser } = useContext(UserContext) as UserContextType;
	const red = getComputedStyle(document.documentElement).getPropertyValue(
		"--red"
	);
	const [fields, dispatch] = useReducer(reducer, initial);
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;

	const addLeadMutation = useMutation({
		mutationFn: () => LeadAPI.create(fields),
		onSuccess(data, variables, context) {
			console.log(data);
			createAlert(
				"success",
				"Lead Creado",
				"El lead se creo correctamente"
			);
			setTimeout(() => {
				props.refreshFunc(!props.refresh);
			}, 1000);
		},
		onError(error, variables, context) {
			console.log(error);
			createAlert("error", "Error", "Hubo un error al crear el lead");
		},
	});

	function nextPage() {
		setPage(page + 1);
	}
	function previousPage() {
		setPage(page - 1);
	}

	function formHandler(e: any) {
		e.preventDefault();

		console.log("sumbmiting form...", fields);

		//TODO: verify the mutation is not comented
		addLeadMutation.mutate();

		props.func();
	}

	useEffect(() => {
		dispatch({ type: "AgencyId", value: Number(User!.AgencyId) });
	}, []);

	return (
		<div id="back" className={`${styles.window}`}>
			<div className={`content-side ${styles.card}`}>
				<h5 className="bold mb-0">Agregar Nuevo Lead</h5>
				<p className="p3 secondary mt-0">{page} de 2</p>
				<span className={styles.iconContainer} onClick={props.func}>
					<IconCross color={red} size="100%" />
				</span>
				{page == 1 ? (
					<First
						func={props.func}
						pageHandler={nextPage}
						fields={fields}
						dispatch={dispatch}
					/>
				) : (
					<>
						{page == 2 ? (
							<Second
								func={props.func}
								pageHandler={previousPage}
								submit={formHandler}
								fields={fields}
								dispatch={dispatch}
							/>
						) : (
							<span></span>
						)}
					</>
				)}
			</div>
		</div>
	);
};

//TODO: desacoplar componentes
interface FirstProps {
	func: () => void;
	pageHandler: () => void;
	fields: Lead;
	dispatch: React.Dispatch<any>;
}
const First = (props: FirstProps) => {
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;
	const [val, setVal] = useState("");

	const {
		isLoading,
		isError,
		error,
		data: leadOrigins,
	} = useQuery({
		queryKey: "leadOrigins",
		queryFn: () => LeadOriginAPI.getOrigins(),
		staleTime: 20 * (60 * 1000), // 20 mins
		cacheTime: 25 * (60 * 1000), // 25 mins
		onError: (error) => {
			createAlert(
				"error",
				"Error de carga",
				"No se encontraron origenes Lead"
			);
		},
	});

	if (isLoading) return <p>Loading...</p>;

	return (
		<>
			<form action="" onSubmit={(e) => e.preventDefault()}>
				<Input
					placeholder="Nombre(s)"
					inputType="text"
					value={props.fields.firstName}
					type="reducer"
					params={{ dispatch: props.dispatch, dispType: "firstName" }}
				/>
				<Input
					placeholder="Apellidos"
					inputType="text"
					value={props.fields.lastName}
					type="reducer"
					params={{ dispatch: props.dispatch, dispType: "lastName" }}
				/>
				<StyledSelect
					customType="secondary"
					value={props.fields.LeadOriginId}
					onChange={(e) =>
						props.dispatch({
							type: "LeadOriginId",
							value: e.target.value,
						})
					}
				>
					<option value={0} disabled>
						-- Origen --
					</option>
					{leadOrigins?.map((origin: any) => {
						return (
							<option key={origin.id} value={origin.id}>
								{origin.description}
							</option>
						);
					})}
				</StyledSelect>
				<Input
					placeholder="Número de contacto"
					inputType="number"
					value={props.fields.leadPhones[0]}
					type="reducer"
					params={{
						dispatch: props.dispatch,
						dispType: "leadPhones",
					}}
				/>

				<Input
					placeholder="Correo de contacto"
					inputType="text"
					value={props.fields.leadEmails[0]}
					type="reducer"
					params={{
						dispatch: props.dispatch,
						dispType: "leadEmails",
					}}
				/>

				<StyledInputSubmit
					value="siguiente"
					customType="primary"
					onClick={props.pageHandler}
				/>
			</form>
			<span className="buttonContainer">
				<Button func={props.func} text="cancelar" full={false} />
			</span>
		</>
	);
};

interface SecondProps {
	func: () => void;
	pageHandler: () => void;
	submit: (e: any) => void;
	fields: Lead;
	dispatch: React.Dispatch<any>;
}
const Second = (props: SecondProps) => {
	const [val, setVal] = useState("");
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
		onError: (error) => {
			createAlert(
				"error",
				"Error de carga",
				"No se encontraron origenes Lead"
			);
		},
	});

	if (isLoading) return <p>Loading...</p>;

	return (
		<>
			<form onSubmit={props.submit}>
				<StyledSelect
					customType="secondary"
					defaultValue=""
					onChange={(e) => {
						props.dispatch({
							type: "productId",
							value: products[e.target.value].id,
						});
						setColors(products[e.target.value].ProductColors);
					}}
				>
					<option value="" disabled>
						-- Producto --
					</option>
					{products?.map((product: any, index: any) => {
						return (
							<option key={product.id} value={index}>
								{product.name} {product.version}
							</option>
						);
					})}
				</StyledSelect>
				<StyledSelect
					customType="secondary"
					defaultValue=""
					onChange={(e) =>
						props.dispatch({
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
					onChange={(e) => {
						props.dispatch({
							type: "buyType",
							value: e.target.value,
						});
						e.target.value === "retail"
							? props.dispatch({
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
					disabled={
						props.fields.buyType === "flotilla" ? false : true
					}
					placeholder="Unidades"
					inputType="number"
					value={String(props.fields.leadInterests[0].quantity)}
					type="reducer"
					params={{ dispatch: props.dispatch, dispType: "units" }}
				/>
				<StyledInputSubmit value="Crear" customType="primary" />
			</form>
			<span className="buttonContainer">
				<Button func={props.pageHandler} text="atras" full={false} />
			</span>
		</>
	);
};
