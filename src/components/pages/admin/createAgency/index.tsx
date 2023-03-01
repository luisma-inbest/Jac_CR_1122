import React, { useReducer, useState } from "react";
import { AgencyAPI } from "@/apis/APIAgency";
import {
	Input,
	InputFile,
	StyledInputSubmit,
	StyledSelect,
} from "@/components/UI/atoms";
import { Agency } from "@/models";
import States from "@/utils/states";
import { reducer, initial } from "./reducer";
import styles from "./CreateAgency.module.css";
import { getBase64 } from "@/utils";

export const CreateAgency = () => {
	const [fields, dispatch] = useReducer(reducer, initial);
	const [logo, setLogo] = useState("");
	const [logoText, setLogoText] = useState("Seleccione el logo");

	async function handleFile(file: any) {
		// console.log("File:", file)
		setLogoText("Cargando...");
		try {
			let base64 = await getBase64(file);
			setLogoText(file.name);
			setLogo(base64);
			dispatch({
				type: "logo",
				value: base64,
			});
		} catch (error) {
			// console.log("Error:", error);
			setLogoText("Error al cargar archivo");
		}
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		AgencyAPI.create(fields);
	}

	return (
		<div className={`row ${styles.formContainer}`}>
			<div
				className={`col-xs-11 col-sm-7 col-md-6 row ${styles.main_component}`}
			>
				<h1>Registrar una Agencia</h1>

				<form className={styles.form} onSubmit={handleSubmit}>
					{/* Info General */}
					<p className="p2 bold secondary mb-0 mt-3">
						Información personal
					</p>
					<hr className="hr mb-1" />

					<Input
						placeholder="*Nombre Comercial"
						inputType="text"
						value={fields.name}
						type="reducer"
						params={{ dispatch: dispatch, dispType: "name" }}
					/>

					<Input
						placeholder="*Razón Social"
						inputType="text"
						value={fields.businessName}
						type="reducer"
						params={{
							dispatch: dispatch,
							dispType: "businessName",
						}}
					/>

					<Input
						placeholder="*Código de Transferencia"
						inputType="text"
						value={fields.transferCode}
						type="reducer"
						params={{
							dispatch: dispatch,
							dispType: "transferCode",
						}}
					/>

					<Input
						placeholder="Url"
						inputType="text"
						value={fields.urlSite!}
						type="reducer"
						params={{ dispatch: dispatch, dispType: "urlSite" }}
					/>

					<InputFile text={logoText} handleFile={handleFile} />
					{/* <Input
						placeholder="Logo Dark"
						value={fields.logoDark!}
						type="reducer"
						params={{ dispatch: dispatch, dispType: "logoDark" }}
					/> */}

					<StyledSelect
						customType="secondary"
						defaultValue=""
						onChange={(e) =>
							dispatch({
								type: "service",
								value: Boolean(e.target.value),
							})
						}
					>
						<option value="" disabled>
							*-- Servicio --
						</option>
						<option value={1}>Cuenta con Servicio</option>
						<option value={0}>No Cuenta con Servicio</option>
					</StyledSelect>

					{/* Info General */}
					<p className="p2 bold secondary mb-0 mt-3">Ubicación</p>
					<hr className="hr mb-1" />

					<Input
						placeholder="*Calle"
						inputType="text"
						value={fields.street}
						type="reducer"
						params={{ dispatch: dispatch, dispType: "street" }}
					/>
					<Input
						placeholder="Nª Interior"
						inputType="number"
						value={fields.interiorNumber!}
						type="reducer"
						params={{
							dispatch: dispatch,
							dispType: "interiorNumber",
						}}
					/>
					<Input
						placeholder="*Nª Exterior"
						inputType="number"
						value={fields.exteriorNumber}
						type="reducer"
						params={{
							dispatch: dispatch,
							dispType: "exteriorNumber",
						}}
					/>
					<Input
						placeholder="*Código Postal"
						inputType="number"
						value={fields.postalCode}
						type="reducer"
						params={{ dispatch: dispatch, dispType: "postalCode" }}
					/>
					<StyledSelect
						customType="secondary"
						defaultValue=""
						onChange={(e) =>
							dispatch({ type: "state", value: e.target.value })
						}
					>
						<option value="" disabled>
							*-- Estado --
						</option>
						{States.map((e, index) => {
							return (
								<option key={index} value={e.sulg}>
									{e.name}
								</option>
							);
						})}
					</StyledSelect>
					<Input
						placeholder="*Ciudad/Delegación"
						inputType="text"
						value={fields.city}
						type="reducer"
						params={{ dispatch: dispatch, dispType: "city" }}
					/>
					<Input
						placeholder="*Colonia"
						inputType="text"
						value={fields.suburb}
						type="reducer"
						params={{ dispatch: dispatch, dispType: "suburb" }}
					/>
					<Input
						placeholder="*Municipio"
						inputType="text"
						value={fields.municipality}
						type="reducer"
						params={{
							dispatch: dispatch,
							dispType: "municipality",
						}}
					/>

					<StyledInputSubmit
						customType="primary"
						type="submit"
						value="Registrar"
					/>
				</form>
			</div>
		</div>
	);
};
