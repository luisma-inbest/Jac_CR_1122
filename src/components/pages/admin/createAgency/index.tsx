import React, {useReducer, useState} from "react";
import {AgencyAPI} from "@/apis/APIAgency";
import {Input, StyledInputSubmit, StyledSelect} from "@/components/UI/atoms";
import {Agency} from "@/models";
import States from "@/utils/states";
import {reducer, initial} from "./reducer";
import styles from "./CreateAgency.module.css";

export const CreateAgency = () => {
	const [fields, dispatch] = useReducer(reducer, initial);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		console.log(fields);
		// console.log("Agency: ", agency);
		// AgencyAPI.create(agency);
	}

	return (
		<div className={`row ${styles.formContainer}`}>
			<div
				className={`col-xs-11 col-sm-7 col-md-6 row ${styles.main_component}`}
			>
				<h1>Registrar una Agencia</h1>

				<form className={styles.form} onSubmit={handleSubmit}>
					{/* Info General */}
					<p className="p2 bold secondary mb-0 mt-3">Información personal</p>
					<hr className="hr mb-1" />

					<Input
						placeholder="Nombre Comercial"
						value={fields.name}
						type="reducer"
						params={{dispatch: dispatch, dispType: "name"}}
					/>

					<Input
						placeholder="Razón Social"
						value={fields.businessName}
						type="reducer"
						params={{dispatch: dispatch, dispType: "businessName"}}
					/>

					<Input
						placeholder="Código de Transferencia"
						value={fields.transferCode}
						type="reducer"
						params={{dispatch: dispatch, dispType: "transferCode"}}
					/>

					<Input
						placeholder="Logo"
						value={fields.logo}
						type="reducer"
						params={{dispatch: dispatch, dispType: "logo"}}
					/>
					<Input
						placeholder="Logo Dark"
						value={fields.logoDark}
						type="reducer"
						params={{dispatch: dispatch, dispType: "logoDark"}}
					/>
					<Input
						placeholder="Url"
						value={fields.url}
						type="reducer"
						params={{dispatch: dispatch, dispType: "url"}}
					/>

					<StyledSelect
						customType="secondary"
						defaultValue=""
						onChange={(e) =>
							dispatch({type: "service", value: Boolean(e.target.value)})
						}
					>
						<option value="" disabled>
							-- Servicio --
						</option>
						<option value={1}>Cuenta con Servicio</option>
						<option value={0}>No Cuenta con Servicio</option>
					</StyledSelect>

					{/* Info General */}
					<p className="p2 bold secondary mb-0 mt-3">Ubicación</p>
					<hr className="hr mb-1" />

					<Input
						placeholder="Calle"
						value={fields.street}
						type="reducer"
						params={{dispatch: dispatch, dispType: "street"}}
					/>
					<Input
						placeholder="Nª Interior"
						value={fields.interiorNumber}
						type="reducer"
						params={{dispatch: dispatch, dispType: "interiorNumber"}}
					/>
					<Input
						placeholder="Nª Exterior"
						value={fields.exteriorNumber}
						type="reducer"
						params={{dispatch: dispatch, dispType: "exteriorNumber"}}
					/>
					<Input
						placeholder="Código Postal"
						value={fields.postalCode}
						type="reducer"
						params={{dispatch: dispatch, dispType: "postalCode"}}
					/>
					<StyledSelect
						customType="secondary"
						defaultValue=""
						onChange={(e) => dispatch({type: "state", value: e.target.value})}
					>
						<option value="" disabled>
							-- Estado --
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
						placeholder="Ciudad/Delegación"
						value={fields.city}
						type="reducer"
						params={{dispatch: dispatch, dispType: "city"}}
					/>
					<Input
						placeholder="Colonia"
						value={fields.suburb}
						type="reducer"
						params={{dispatch: dispatch, dispType: "suburb"}}
					/>
					<Input
						placeholder="Municipio"
						value={fields.municipality}
						type="reducer"
						params={{dispatch: dispatch, dispType: "municipality"}}
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
