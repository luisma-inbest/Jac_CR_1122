import React, {useContext, useState} from "react";
import styles from "./Login.module.css";
import {Logo, LogoFull} from "@/assets";
import UserContext, {UserContextType} from "@/context/UserContext";
import {Link, useNavigate} from "react-router-dom";

import {
	StyledInputText,
	StyledInputSubmit,
} from "@/components/UI/atoms/StyledInputs";

export const Login = () => {
	const navigate = useNavigate();
	const {User, SetUser} = useContext(UserContext) as UserContextType;
	const [role, setRole] = useState("admin");
	const logoColor = getComputedStyle(document.body).getPropertyValue("--blue2");

	const handleChange = (e: any) => {
		setRole(e.target.value);
	};

	const handleSubmit = (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
		console.log("iniciando sesión con el rol de:" + role);
		switch (role) {
			case "admin":
				SetUser({
					id: 1,
					name: "Jhon",
					permissions: ["admin"],
				});
				navigate("/admin");
				break;
			case "seller":
				SetUser({
					id: 1,
					name: "Jhon",
					permissions: [""],
				});
				navigate("/seller");
				break;
		}
	};

	return (
		<div className={`${styles.background}`}>
			<div className={`${styles.header}`}>
				<LogoFull color="#fff" size="100%" />
			</div>
			<div className={`${styles.formContainer}`}>
				<div className="row center-xs">
					<div
						className={`col-xs-11 col-sm-7 col-md-5 ${styles.main_component}`}
					>
						<div className={styles.logo}>
							<LogoFull color={logoColor} size="70%" />
						</div>
						<form className={styles.form} onSubmit={handleSubmit}>
							<label className="p2 text-bold">Usuario</label>
							<StyledInputText name="name" customType="gray" />
							<label className="p2 text-bold">Contraseña</label>
							<StyledInputText name="name" customType="gray" />
							<div className={`${styles.checkbox}`}>
								<input type="checkbox" id="cbox2" value="second_checkbox" />{" "}
								<label>Mantener inicio de sesión abierto</label>
							</div>
							<StyledInputSubmit
								customType="primary"
								type="submit"
								value="Iniciar Sesión"
							/>
						</form>
						<div className={styles.customSelect}>
							<select onChange={handleChange}>
								<option value="admin">Administrador</option>
								<option value="seller">Web</option>
								<option value="seller">Marketing</option>
								<option value="seller">Ventas</option>
								<option value="seller">Servicio</option>
								<option value="seller">Sucursales</option>
								<option value="seller">RH</option>
								<option value="seller">Producto</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
