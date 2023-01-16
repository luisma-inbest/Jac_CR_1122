import React, {useContext} from "react";

import {Logo, LogoFull} from "@/assets";
import {StyledInputText, StyledInputSubmit} from "@/components/UI/atoms";

import styles from "./Login.module.css";

import {generatePassword, signUp} from "./AuthFuncs";

export const Register = () => {
	const logoColor = getComputedStyle(document.body).getPropertyValue(
		"--main-color"
	);
	console.log(generatePassword());

	const handleSubmit = async (event: React.FormEvent<EventTarget>) => {
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
		<div className={`${styles.background}`}>
			<div className={`${styles.formContainer}`}>
				<div className="row center-xs">
					<div
						className={`col-xs-11 col-sm-7 col-md-5 ${styles.main_component}`}
					>
						<div className={styles.logo}>
							<LogoFull color={logoColor} size="70%" />
						</div>
						<h1>Registrar nuevo usuario</h1>
						<form className={styles.form} onSubmit={handleSubmit}>
							<label className="p2 semi-bold">Correo</label>
							<StyledInputText name="name" customType="gray" />
							<label className="p2 semi-bold">Contraseña</label>
							<StyledInputText name="name" customType="gray" />

							<StyledInputSubmit
								customType="primary"
								type="submit"
								value="Registrar"
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
