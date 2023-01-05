import React, {useContext} from "react";
import styles from "./Login.module.css";
import {logoHorizontal} from "assets";
import {Link} from "react-router-dom";

import {
	StyledInputText,
	StyledInputSubmit,
} from "components/UI/atoms/StyledInputs";

export const Register = () => {
	const handleSubmit = (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
		console.log("iniciando sesión");
	};

	return (
		<div className={``}>
			<div className="context">
				<h1>Pure Css Animated Background</h1>
			</div>

			<div className="area">
				<ul className="circles">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
	);
};
