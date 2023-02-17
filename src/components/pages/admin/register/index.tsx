import React, {useContext, useReducer, useState} from "react";

import {Logo, LogoFull} from "@/assets";
import {
	StyledInputText,
	StyledInputSubmit,
	StyledInputDate,
	Button,
	StyledSelect,
	Input,
	Loader,
} from "@/components/UI/atoms";
import {AgencyAPI} from "@/apis/APIAgency";

import styles from "./Register.module.css";

import States from "@/utils/states";
import {reducer, initial} from "./reducer";

import {User} from "@/models";
import {useQuery} from "react-query";
import {UserAPI} from "@/apis";

interface Props {
	agency?: string;
}

export const Register = (props: Props) => {
	const [fields, dispatch] = useReducer(reducer, initial);

	const logoColor = getComputedStyle(document.body).getPropertyValue(
		"--main-color"
	);
	const {isLoading, data, isError, error} = useQuery({
		queryKey: ["agencies"],
		queryFn: AgencyAPI.getAll,
		staleTime: 5 * (60 * 1000), // 5 mins
		cacheTime: 10 * (60 * 1000), // 10 mins
	});

	const handleSubmit: any = async (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
		UserAPI.create(fields);
		console.log(fields);

		// try {
		// 	await signUp(user);
		// 	console.log("Usuario creado exitosamente :)");
		// } catch (error: any) {
		// 	let code = error.code;
		// 	console.log(error);
		// 	switch (code) {
		// 		case "UsernameExistsException":
		// 			console.log("El usuario ya existe");
		// 			break;
		// 		default:
		// 			console.log("Error al crear el usuario");
		// 	}
		// }
	};

	if (isLoading) {
		return (
			<div className="row">
				<div className={`col-xs-12 ${styles.loaderContainer}`}>
					<Loader />
				</div>
			</div>
		);
	}

	return (
		<div className={`row ${styles.formContainer}`}>
			<div
				className={`col-xs-11 col-sm-7 col-md-5 row ${styles.main_component}`}
			>
				<h1>Registrar nuevo usuario</h1>
				<form className={styles.form} onSubmit={handleSubmit}>
					{/* Info personal */}
					<p className="p2 bold secondary mb-0 mt-3">Información personal</p>
					<hr className="hr mb-1" />

					<Input
						placeholder="Nombre(s)"
						value={fields.firstName}
						type="reducer"
						params={{dispatch: dispatch, dispType: "firstName"}}
					/>

					<Input
						placeholder="Apellidos"
						value={fields.lastName}
						type="reducer"
						params={{dispatch: dispatch, dispType: "lastName"}}
					/>

					<label className="p2 semi-bold">Fecha de Nacimiento </label>
					<StyledInputDate
						customType="secondary"
						onChange={(e) =>
							dispatch({type: "birthDate", value: e.target.value})
						}
					/>

					<StyledSelect
						customType="secondary"
						defaultValue=""
						onChange={(e) =>
							dispatch({type: "birthDate", value: e.target.value})
						}
					>
						<option value="" disabled>
							-- Género --
						</option>
						<option value="man">Masculino</option>
						<option value="woman">Femenino</option>
					</StyledSelect>

					<Input
						placeholder="Email personal"
						value={fields.userEmails[0]}
						type="reducer"
						params={{dispatch: dispatch, dispType: "userEmails"}}
					/>

					{/* Info Profesional */}
					<p className="p2 bold secondary mb-0 mt-3">Información profesional</p>
					<hr className="hr mb-1" />

					<Input
						placeholder="Nickname"
						value={fields.nickname}
						type="reducer"
						params={{dispatch: dispatch, dispType: "nickname"}}
					/>

					<Input
						placeholder="Email"
						value={fields.email}
						type="reducer"
						params={{dispatch: dispatch, dispType: "email"}}
					/>

					<Input
						placeholder="Contraseña"
						value={fields.password}
						type="reducer"
						params={{dispatch: dispatch, dispType: "password"}}
					/>

					<Input
						placeholder="Número celular"
						value={fields.userPhones[0]}
						type="reducer"
						params={{dispatch: dispatch, dispType: "userPhones"}}
					/>

					<StyledSelect
						customType="secondary"
						defaultValue=""
						onChange={(e) => dispatch({type: "state", value: e.target.value})}
					>
						<option value="" disabled>
							*-- Estado --
						</option>
						{States.map((e: any, index: any) => {
							return (
								<option key={index} value={e.sulg}>
									{e.name}
								</option>
							);
						})}
					</StyledSelect>

					<StyledSelect
						customType="secondary"
						defaultValue=""
						onChange={(e) =>
							dispatch({type: "AgencyId", value: e.target.value})
						}
					>
						<option value="" disabled>
							*-- Agencia --
						</option>
						{data.map((e: any, index: any) => {
							return (
								<option key={e.id} value={e.id}>
									{e.name}
								</option>
							);
						})}
					</StyledSelect>

					<StyledSelect
						customType="secondary"
						defaultValue=""
						onChange={(e) =>
							dispatch({type: "userRole", value: e.target.value})
						}
					>
						<option value="" disabled>
							-- Rol del Usuario --
						</option>
						<option value="admin">Corporativo</option>
						<option value="sells">Vendedor</option>
						<option value="manager">Gerente </option>
						<option value="coordinator">Cordinador </option>
						<option value="bdc">BDC </option>
						<option value="adviser-digital">Asesor Digital </option>
						<option value="adviser-floor">Asesor Piso </option>
						<option value="adviser-hybrid">Asesor Híbrido </option>
						<option value="hostess">Hostess </option>
					</StyledSelect>

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
