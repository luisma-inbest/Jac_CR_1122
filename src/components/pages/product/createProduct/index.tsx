import React, { useReducer, useState } from "react";
import { AgencyAPI } from "@/apis/APIAgency";
import {
	Input,
	InputFile,
	StyledInputSubmit,
	StyledSelect,
	StyledTextArea,
} from "@/components/UI/atoms";
import { Agency } from "@/models";
import States from "@/utils/states";
import { reducer, initial } from "./reducer";
import styles from "./CreateProduct.module.css";
import { getBase64 } from "@/utils";

export const CreateProduct = () => {
	const [fields, dispatch] = useReducer(reducer, initial);
	const [logo, setLogo] = useState("");
	const [logoText, setLogoText] = useState("producto");
	const [onePagerText, setOnePagerText] = useState("One Pager");
	const [dataSheetText, setDataSheetText] = useState("ficha técnica");

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
				<h1>Crear un Producto</h1>

				<form className={styles.form} onSubmit={handleSubmit}>
					{/* Info General */}
					<p className="p2 bold secondary mb-0 mt-3">
						Información General
					</p>
					<hr className="hr mb-1" />

					<Input
						placeholder="*Nombre"
						inputType="text"
						value={fields.name}
						type="reducer"
						params={{ dispatch: dispatch, dispType: "name" }}
					/>

					<Input
						placeholder="*Modelo"
						inputType="text"
						value={fields.businessName}
						type="reducer"
						params={{
							dispatch: dispatch,
							dispType: "businessName",
						}}
					/>

					<Input
						placeholder="*Versión"
						inputType="text"
						value={fields.transferCode}
						type="reducer"
						params={{
							dispatch: dispatch,
							dispType: "transferCode",
						}}
					/>

					<StyledSelect
						customType="secondary"
						defaultValue=""
						onChange={(e) =>
							dispatch({ type: "state", value: e.target.value })
						}
					>
						<option value="" disabled>
							*-- Color --
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
						placeholder="Precio"
						inputType="text"
						value={fields.urlSite!}
						type="reducer"
						params={{ dispatch: dispatch, dispType: "urlSite" }}
					/>

					{/* Info General */}
					<p className="p2 bold secondary mb-0 mt-3">Adicional</p>
					<hr className="hr mb-1" />

					<InputFile text={logoText} handleFile={handleFile} />
					<InputFile text={onePagerText} handleFile={handleFile} />
					<InputFile text={dataSheetText} handleFile={handleFile} />
					<Input
						placeholder="*Showroom 360"
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
