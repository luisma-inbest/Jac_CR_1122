import React, {useContext, useState} from "react";

import {Logo, LogoFull} from "@/assets";
import {
	StyledInputText,
	StyledInputSubmit,
	StyledInputDate,
	Button,
	StyledSelect,
	Input,
} from "@/components/UI/atoms";

import styles from "./Register.module.css";

import {signUp} from "@/components/pages/authentication/AuthFuncs";

import UserContext, {UserContextType} from "@/context/UserContext";

import {User} from "@/models";

export const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [nickname, setNickname] = useState("");
	const [gender, setGender] = useState("");
	const [personalEmail, setPersonalEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [state, setState] = useState("");
	const [agency, setAgency] = useState("");
	const [role, setRole] = useState("");

	const logoColor = getComputedStyle(document.body).getPropertyValue(
		"--main-color"
	);

	const handleSubmit: any = async (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
		const user: User = {
			email,
			password,
			firstName,
			lastName,
			birthDate,
			nickname,
			gender,
			userEmails: [],
			userPhones: [],
			state,
			AgencyId: agency,
			userRole: role,
			position: "",
			// personalEmail: "",
			// phoneNumber: "",
		};
		console.log(user);

		try {
			await signUp(user);
			console.log("Usuario creado exitosamente :)");
		} catch (error: any) {
			let code = error.code;
			console.log(error);
			switch (code) {
				case "UsernameExistsException":
					console.log("El usuario ya existe");
					break;
				default:
					console.log("Error al crear el usuario");
			}
		}
	};

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
						value={firstName}
						type="state"
						params={{setValue: setFirstName}}
					/>

					<Input
						placeholder="Apellidos"
						value={lastName}
						type="state"
						params={{setValue: setLastName}}
					/>

					<label className="p2 semi-bold">Fecha de Nacimiento </label>
					<StyledInputDate
						customType="secondary"
						onChange={(value) => setBirthDate(value.target.value)}
					/>

					<StyledSelect
						customType="secondary"
						defaultValue=""
						onChange={(e) => console.log(e.target.value)}
					>
						<option value="" disabled>
							-- Género --
						</option>
						<option value="admin">Masculino</option>
						<option value="sells">Femenino</option>
					</StyledSelect>

					<Input
						placeholder="Email personal"
						value={personalEmail}
						type="state"
						params={{setValue: setPersonalEmail}}
					/>

					{/* Info Profesional */}
					<p className="p2 bold secondary mb-0 mt-3">Información profesional</p>
					<hr className="hr mb-1" />

					<Input
						placeholder="Nickname"
						value={nickname}
						type="state"
						params={{setValue: setNickname}}
					/>

					<Input
						placeholder="Email"
						value={email}
						type="state"
						params={{setValue: setEmail}}
					/>

					<Input
						placeholder="Contraseña"
						value={password}
						type="state"
						params={{setValue: setPassword}}
					/>

					<Input
						placeholder="Número celular"
						value={phoneNumber}
						type="state"
						params={{setValue: setPhoneNumber}}
					/>

					<Input
						placeholder="Estado"
						value={state}
						type="state"
						params={{setValue: setState}}
					/>

					<Input
						placeholder="Agencia"
						value={agency}
						type="state"
						params={{setValue: setAgency}}
					/>

					<StyledSelect
						customType="secondary"
						defaultValue=""
						onChange={(e) => setRole(e.target.value)}
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
