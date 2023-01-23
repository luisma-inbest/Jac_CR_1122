import React, {useContext} from "react";

import {Logo, LogoFull} from "@/assets";
import {
	StyledInputText,
	StyledInputSubmit,
	StyledInputDate,
	Button,
} from "@/components/UI/atoms";

import styles from "./Register.module.css";

import {generatePassword, signUp} from "../../authentication/AuthFuncs";

import UserContext, {UserContextType} from "@/context/UserContext";

export const Register = () => {
	const {User, SetUser} = useContext(UserContext) as UserContextType;
	const {test} = useContext(UserContext) as UserContextType;
	const logoColor = getComputedStyle(document.body).getPropertyValue(
		"--main-color"
	);
	console.log(generatePassword());

	const handleSubmit: any = async (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
		console.log("Creando usuario...");
		try {
			await signUp();
		} catch (error: any) {
			let code = error.code;
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
					<p className="p2 bold secondary mb-0 mt-3">Información personal</p>
					<hr className="hr mb-1" />
					<label className="p2 semi-bold">Nombre(s)</label>
					<StyledInputText name="name" customType="gray" />
					<label className="p2 semi-bold">Apellidos</label>
					<StyledInputText name="name" customType="gray" />

					<label className="p2 semi-bold">Fecha de Nacimiento </label>
					<StyledInputDate />

					<p className="p2 bold secondary mb-0 mt-3">Información profesional</p>
					<hr className="hr mb-1" />
					<label className="p2 semi-bold">Nombre de Usuario</label>
					<StyledInputText name="name" customType="gray" />

					<label className="p2 semi-bold">Correo</label>
					<StyledInputText name="name" customType="gray" />
					<label className="p2 semi-bold">Contraseña</label>
					<StyledInputText name="name" customType="gray" />

					<label className="p2 semi-bold">Número celular </label>
					<StyledInputText name="name" customType="gray" type="number" />

					<label className="p2 semi-bold">Estado </label>
					<StyledInputText name="name" customType="gray" />

					<label className="p2 semi-bold">Agencia </label>
					<StyledInputText name="name" customType="gray" />

					<div className={styles.customSelect}>
						<select>
							<option value="admin">-- Rol del Usuario --</option>
							<option value="admin">Corporativo</option>
							<option value="sells">Vendedor</option>
							<option value="sells">Gerente </option>
						</select>
					</div>

					<StyledInputSubmit
						customType="primary"
						type="submit"
						value="Registrar"
					/>
				</form>
				<Button text="test" func={test} full={false} />
			</div>
		</div>
	);
};
