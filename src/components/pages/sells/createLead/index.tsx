import React, { useReducer, useState } from "react";
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

interface Props {
	func: () => void;
}

export const CreateLead = (props: Props) => {
	const [page, setPage] = useState(1);
	const red = getComputedStyle(document.documentElement).getPropertyValue(
		"--red"
	);
	const [fields, dispatch] = useReducer(reducer, initial);

	function nextPage() {
		setPage(page + 1);
	}
	function previousPage() {
		setPage(page - 1);
	}
	function formHandler(e: any) {
		e.preventDefault();
		console.log("sumbmiting form...");
	}

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
	const [val, setVal] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [emails, setEmails] = useState<string[]>([]);
	function handlePhones() {
		props.dispatch({
			type: "phones",
			value: [...props.fields.phones, `+52${phone}`],
		});
		setPhone("");
		console.log(props.fields);
	}
	function handleEmails() {
		props.dispatch({
			type: "emails",
			value: [...props.fields.emails, `${email}`],
		});
		setEmail("");
		console.log(props.fields);
	}
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
				<Input
					placeholder="Origen de Lead"
					inputType="text"
					value={props.fields.origin}
					type="reducer"
					params={{ dispatch: props.dispatch, dispType: "origin" }}
				/>
				<Input
					placeholder="Números de contacto"
					inputType="number"
					value={phone}
					type="state"
					params={{ setValue: setPhone }}
				/>
				<ButtonFields text="Agregar Número" func={handlePhones} />

				{props.fields.phones.map((phone, index) => {
					return <h5 key={index}>{phone}</h5>;
				})}

				<Input
					placeholder="Correos de contacto"
					inputType="text"
					value={email}
					type="state"
					params={{ setValue: setEmail }}
				/>
				<ButtonFields text="Agregar Correo" func={handleEmails} />

				{props.fields.emails.map((email, index) => {
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
				<Input
					placeholder="Tipo de Compra"
					inputType="text"
					value={val}
					type="state"
					params={{ setValue: setVal }}
				/>
				<Input
					placeholder="Unidades"
					inputType="text"
					value={val}
					type="state"
					params={{ setValue: setVal }}
				/>
				<StyledInputSubmit value="Crear" customType="primary" />
			</form>
			<span className="buttonContainer">
				<Button func={props.pageHandler} text="atras" full={false} />
			</span>
		</>
	);
};
