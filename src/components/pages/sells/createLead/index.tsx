import React, {useState} from "react";
import styles from "./CreateLead.module.css";
import {
	StyledInputText,
	Button,
	Input,
	StyledInputSubmit,
} from "@/components/UI/atoms";

interface Props {
	func: () => void;
}

export const CreateLead = (props: Props) => {
	return (
		<div id="back" className={`${styles.window}`}>
			<div className={`content-side ${styles.card}`}>
				<h5 className="">Agregar Nuevo Lead</h5>
				<p className="p3 secondary">1 de 2</p>
				<form action="">
					<Input placeholder="Perfil" />
					<Input placeholder="Nombre" />
					<Input placeholder="Apellidos" />
					<Input placeholder="Número Celular" />
					<Input placeholder="Telefono Fijo" />
					<Input placeholder="Correo Electronico" />
					<StyledInputSubmit value="siguiente" customType="primary" />
				</form>
				<span className="buttonContainer">
					<Button func={props.func} text="cancelar" full={false} />
				</span>
			</div>
		</div>
	);
};
