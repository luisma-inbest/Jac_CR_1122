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

import {InterfaceUser} from "@/models";

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
		const user: InterfaceUser = {
			email,
			password,
			firstName,
			lastName,
			birthDate,
			nickname,
			gender,
			personalEmail,
			phoneNumber,
			state,
			agency,
			role,
		};
		console.log(user);

		event.preventDefault();
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
						setValue={setFirstName}
					/>

					<Input
						placeholder="Apellidos"
						value={lastName}
						setValue={setLastName}
					/>

					<label className="p2 semi-bold">Fecha de Nacimiento </label>
					<StyledInputDate
						onChange={(value) => setBirthDate(value.target.value)}
					/>

					<StyledSelect
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
						setValue={setPersonalEmail}
					/>

					{/* Info Profesional */}
					<p className="p2 bold secondary mb-0 mt-3">Información profesional</p>
					<hr className="hr mb-1" />

					<Input
						placeholder="Nickname"
						value={nickname}
						setValue={setNickname}
					/>

					<Input placeholder="Email" value={email} setValue={setEmail} />

					<Input
						placeholder="Contraseña"
						value={password}
						setValue={setPassword}
					/>

					<Input
						placeholder="Número celular"
						value={phoneNumber}
						setValue={setPhoneNumber}
					/>

					<Input placeholder="Estado" value={state} setValue={setState} />

					<Input placeholder="Agencia" value={agency} setValue={setAgency} />

					<StyledSelect
						defaultValue=""
						onChange={(e) => setRole(e.target.value)}
					>
						<option value="" disabled>
							-- Rol del Usuario --
						</option>
						<option value="admin">Corporativo</option>
						<option value="sells">Vendedor</option>
						<option value="manager">Gerente </option>
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
