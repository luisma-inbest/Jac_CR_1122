import React, { useReducer, useState } from "react";
import { AgencyAPI } from "@/apis/APIAgency";
import {
	Input,
	StyledInputSubmit,
	StyledSelect,
	StyledTextArea,
} from "@/components/UI/atoms";
import { Agency } from "@/models";
import States from "@/utils/states";
import { reducer, initial } from "./reducer";
import styles from "./CreateProduct.module.css";

export const CreateProduct = () => {
	const [fields, dispatch] = useReducer(reducer, initial);

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
						value={fields.name}
						type="reducer"
						params={{ dispatch: dispatch, dispType: "name" }}
					/>

					<Input
						placeholder="*Modelo"
						value={fields.businessName}
						type="reducer"
						params={{
							dispatch: dispatch,
							dispType: "businessName",
						}}
					/>

					<Input
						placeholder="*Versión"
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
						placeholder="Categorías"
						value={fields.logoDark!}
						type="reducer"
						params={{ dispatch: dispatch, dispType: "logoDark" }}
					/>
					<Input
						placeholder="Precio"
						value={fields.urlSite!}
						type="reducer"
						params={{ dispatch: dispatch, dispType: "urlSite" }}
					/>

					{/* Info General */}
					<p className="p2 bold secondary mb-0 mt-3">Adicional</p>
					<hr className="hr mb-1" />

					<StyledTextArea placeholder="Descripción" />

					<Input
						placeholder="*SKU"
						value={fields.municipality}
						type="reducer"
						params={{
							dispatch: dispatch,
							dispType: "municipality",
						}}
					/>
					<Input
						placeholder="*Imagenes"
						value={fields.municipality}
						type="reducer"
						params={{
							dispatch: dispatch,
							dispType: "municipality",
						}}
					/>
					<Input
						placeholder="*One Pager"
						value={fields.municipality}
						type="reducer"
						params={{
							dispatch: dispatch,
							dispType: "municipality",
						}}
					/>
					<Input
						placeholder="*Showroom 360"
						value={fields.municipality}
						type="reducer"
						params={{
							dispatch: dispatch,
							dispType: "municipality",
						}}
					/>
					<Input
						placeholder="*Ficha técnica"
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
