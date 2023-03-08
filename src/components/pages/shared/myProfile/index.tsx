import { Alert } from "@/components/UI/atoms";
import React from "react";
import styles from "./MyProfile.module.css";

export const MyProfile = () => {
	return (
		<div className="row">
			<h1>Perfil de Usuario</h1>
			<Alert type="success" title="Titulo" text="textito" />
		</div>
	);
};
