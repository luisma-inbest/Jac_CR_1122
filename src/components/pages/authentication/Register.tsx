import React, {useContext} from "react";
import styles from "./Login.module.css";
import {logoHorizontal} from "@/assets";
import UserContext, {UserContextType} from "@/context/UserContext";
import {Link} from "react-router-dom";

import {
	StyledInputText,
	StyledInputSubmit,
} from "@/components/UI/atoms/StyledInputs";

export const Register = () => {
	const {User, SetUser} = useContext(UserContext) as UserContextType;

	const handleSubmit = (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
		console.log("iniciando sesión");
		console.log(User);
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
