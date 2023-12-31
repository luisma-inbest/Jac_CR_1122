import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconEye, IconEyeOff, Logo, LogoFull } from "@/assets";
import {
	StyledInputText,
	StyledInputSubmit,
	Input,
	Button,
	Loader,
} from "@/components/UI/atoms/";
import UserContext, { UserContextType } from "@/context/UserContext";

import styles from "./Login.module.css";
import {
	changePassword,
	getParams,
	getSession,
	logIn,
	logOut,
} from "@/auth/AuthFuncs";

export const Login = () => {
	const navigate = useNavigate();
	const { User, SetUser } = useContext(UserContext) as UserContextType;
	const [role, setRole] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState("");

	const logoColor = getComputedStyle(document.body).getPropertyValue(
		"--main-color"
	);
	const secondaryColor = getComputedStyle(document.body).getPropertyValue(
		"--secondary-text"
	);

	const handleSubmit = (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
		//dummy();
		loginAWS();
	};

	async function loginAWS() {
		// console.log("cognito login...");
		setLoading(true);
		try {
			await logIn(email, password);
			setLoading(false);
			navigate("/");
		} catch (error: any) {
			setResponse(error.message);
			setLoading(false);
			console.log(error);
		}
	}

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
							<Input
								placeholder="Correo"
								inputType="email"
								value={email}
								type="state"
								params={{ setValue: setEmail }}
							/>
							<div className={styles.passwordContainer}>
								<div className={styles.passwordInput}>
									<Input
										placeholder="Contraseña"
										inputType={
											showPassword ? "text" : "password"
										}
										value={password}
										type="state"
										params={{ setValue: setPassword }}
									/>
								</div>
								<div
									className={styles.iconContainer}
									onClick={() =>
										setShowPassword(!showPassword)
									}
								>
									{showPassword ? (
										<IconEye
											size="100%"
											color={secondaryColor}
										/>
									) : (
										<IconEyeOff
											size="100%"
											color={secondaryColor}
										/>
									)}
								</div>
							</div>

							{/* <div className={`${styles.checkbox}`}>
								<input
									type="checkbox"
									id="cbox2"
									value="second_checkbox"
								/>{" "}
								<label>Mantener inicio de sesión abierto</label>
							</div> */}
							<div
								className={
									loading ? styles.active : styles.unactive
								}
							>
								{loading ? (
									<Loader />
								) : (
									<p className={`red`}>{response}</p>
								)}
							</div>

							<StyledInputSubmit
								customType="primary"
								type="submit"
								value="Iniciar Sesión"
							/>
						</form>
						{/* <Button text="verificar sesión" func={verifySession} full={false} />
						<Button text="Iniciar sesión" func={loginAWS} full={false} />
						<Button text="cerrar sesión " func={logOut} full={false} />
						<Button text="params" func={getParams} full={false} />
						<Button text="change password" func={changePassword} full={false} /> */}
						{/* <Button text="update" func={updateAtributes} full={false} /> */}
					</div>
				</div>
			</div>
		</div>
	);
};
