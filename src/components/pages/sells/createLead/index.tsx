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
import { LeadAPI, LeadOriginAPI } from "@/apis";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";
import UserContext, { UserContextType } from "@/context/UserContext";

interface Props {
	func: () => void;
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

		addLeadMutation.mutate();
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
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");

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

	function handlePhones() {
		props.dispatch({
			type: "leadPhones",
			value: [...props.fields.leadPhones, `${phone}`],
		});
		setPhone("");
		console.log(props.fields);
	}
	function handleEmails() {
		props.dispatch({
			type: "leadEmails",
			value: [...props.fields.leadEmails, `${email}`],
		});
		setEmail("");
		console.log(props.fields);
	}

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
					placeholder="Números de contacto"
					inputType="number"
					value={phone}
					type="state"
					params={{ setValue: setPhone }}
				/>
				<ButtonFields text="Agregar Número" func={handlePhones} />

				<div className="mb-5">
					{props.fields.leadPhones.map((phone, index) => {
						return <h5 key={index}>{phone}</h5>;
					})}
				</div>

				<Input
					placeholder="Correos de contacto"
					inputType="text"
					value={email}
					type="state"
					params={{ setValue: setEmail }}
				/>
				<ButtonFields text="Agregar Correo" func={handleEmails} />

				{props.fields.leadEmails.map((email, index) => {
					return <h5 key={index}>{email}</h5>;
				})}

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
	return (
		<>
			<form onSubmit={props.submit}>
				<StyledSelect
					customType="secondary"
					defaultValue=""
					onChange={(e) =>
						props.dispatch({
							type: "productId",
							value: e.target.value,
						})
					}
				>
					<option value="" disabled>
						-- Producto --
					</option>
					<option value="man">Sei4 Pro</option>
					<option value="woman">J 7</option>
				</StyledSelect>

				<StyledSelect
					customType="secondary"
					defaultValue=""
					onChange={(e) =>
						props.dispatch({
							type: "buyType",
							value: e.target.value,
						})
					}
				>
					<option value="" disabled>
						-- Tipo de Compra --
					</option>
					<option value="man"> Debito </option>
					<option value="woman">Crédito</option>
				</StyledSelect>

				<Input
					placeholder="Unidades"
					inputType="number"
					value={props.fields!.units.toString()}
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
