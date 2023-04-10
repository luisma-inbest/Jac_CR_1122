import React, { useReducer, useState } from "react";
import { AgencyAPI } from "@/apis/APIAgency";
import {
	ButtonFields,
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
import { ProductAPI } from "@/apis/APIProduct";

export const CreateProduct = () => {
	const [fields, dispatch] = useReducer(reducer, initial);
	const [productImageFile, setProductImageFile] = useState("producto");
	const [onePagerTextFile, setOnePagerTextFile] = useState("One Pager");
	const [dataSheetTextFile, setDataSheetTextFile] = useState("ficha técnica");
	const [version, setVersion] = useState("");

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		ProductAPI.create(fields);
		console.log(fields);
	}

	const handleFileProductImage = async (file: any) => {
		setProductImageFile("Cargando...");
		try {
			let base64 = await getBase64(file);
			setProductImageFile(file.name);
			dispatch({
				type: "imageBase64",
				value: base64,
			});
		} catch (error) {
			setProductImageFile("Error al cargar archivo");
		}
	};

	const handleFileOnePager = async (file: any) => {
		setOnePagerTextFile("Cargando...");
		try {
			let base64 = await getBase64(file);
			setOnePagerTextFile(file.name);
			dispatch({
				type: "onePagerBase64",
				value: base64,
			});
		} catch (error) {
			setOnePagerTextFile("Error al cargar archivo");
		}
	};
	const handleFileDataSheet = async (file: any) => {
		setDataSheetTextFile("Cargando...");
		try {
			let base64 = await getBase64(file);
			setDataSheetTextFile(file.name);
			dispatch({
				type: "dataSheetBase64",
				value: base64,
			});
		} catch (error) {
			setDataSheetTextFile("Error al cargar archivo");
		}
	};
	function handleVersions() {
		dispatch({
			type: "productVersions",
			value: [...fields.productVersions, `${version}`],
		});
		setVersion("");
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
						inputType="number"
						value={fields.model}
						type="reducer"
						params={{
							dispatch: dispatch,
							dispType: "model",
						}}
					/>

					<Input
						placeholder="*Versión"
						inputType="text"
						value={version}
						type="state"
						params={{ setValue: setVersion }}
					/>
					<ButtonFields
						text="Agregar Versión"
						func={handleVersions}
					/>

					<div className="mb-5">
						{fields.productVersions.map((version, index) => {
							return <h5 key={index}>{version}</h5>;
						})}
					</div>
					<Input
						placeholder="*Modelo"
						inputType="text"
						value={fields.model}
						type="reducer"
						params={{
							dispatch: dispatch,
							dispType: "model",
						}}
					/>

					<h5>Colores</h5>
					<label htmlFor="">azul</label>
					<input type="checkbox" name="favorite_pet" value="Cats" />
					<label htmlFor="">azul</label>
					<input type="checkbox" name="favorite_pet" value="Dogs" />
					<label htmlFor="">azul</label>
					<input type="checkbox" name="favorite_pet" value="Birds" />

					<Input
						placeholder="Precio"
						inputType="number"
						value={String(fields.price)}
						type="reducer"
						params={{ dispatch: dispatch, dispType: "price" }}
					/>

					{/* Info General */}
					<p className="p2 bold secondary mb-0 mt-3">Adicional</p>
					<hr className="hr mb-1" />

					<InputFile
						text={productImageFile}
						handleFile={handleFileProductImage}
					/>
					<InputFile
						text={onePagerTextFile}
						handleFile={handleFileOnePager}
					/>
					<InputFile
						text={dataSheetTextFile}
						handleFile={handleFileDataSheet}
					/>
					<Input
						placeholder="*Showroom 360"
						inputType="text"
						value={fields.showRoom360Url}
						type="reducer"
						params={{
							dispatch: dispatch,
							dispType: "showRoom360Url",
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

//TODO: cada version tiene su precio
//TODO: en lugar de modelo poner Año
