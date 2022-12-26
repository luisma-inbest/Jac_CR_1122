import React, {useState} from "react";
import styles from "./CreateLead.module.css";
import {
	StyledInputText,
	Button,
	Input,
	StyledInputSubmit,
} from "@/components/UI/atoms";
import {IconCross} from "@/assets";

interface Props {
	func: () => void;
}

export const CreateLead = (props: Props) => {
	const [page, setPage] = useState(1);
	const red = getComputedStyle(document.documentElement).getPropertyValue(
		"--red"
	);

	function nextPage() {
		setPage(page + 1);
	}
	function previousPage() {
		setPage(page - 1);
	}
	function formHandler(e: any) {
		e.preventDefault();
		console.log("sumbmiting form...");
	}

	return (
		<div id="back" className={`${styles.window}`}>
			<div className={`content-side ${styles.card}`}>
				<h5 className="bold mb-0">Agregar Nuevo Lead</h5>
				<p className="p3 secondary mt-0">{page} de 2</p>
				<span className={styles.iconContainer} onClick={props.func}>
					<IconCross color={red} size="100%" />
				</span>
				{page == 1 ? (
					<First func={props.func} pageHandler={nextPage} />
				) : (
					<>
						{page == 2 ? (
							<Second
								func={props.func}
								pageHandler={previousPage}
								submit={formHandler}
							/>
						) : (
							<span></span>
						)}
					</>
				)}
			</div>
		</div>
	);
};

interface FirstProps {
	func: () => void;
	pageHandler: () => void;
}
const First = (props: FirstProps) => {
	return (
		<>
			<form action="" onSubmit={(e) => e.preventDefault()}>
				<Input placeholder="Perfil" />
				<Input placeholder="Nombre" />
				<Input placeholder="Apellidos" />
				<Input placeholder="Número Celular" />
				<Input placeholder="Telefono Fijo" />
				<Input placeholder="Correo Electronico" />
				<StyledInputSubmit
					value="siguiente"
					customType="primary"
					onClick={props.pageHandler}
				/>
			</form>
			<span className="buttonContainer">
				<Button func={props.func} text="cancelar" full={false} />
			</span>
		</>
	);
};

interface SecondProps {
	func: () => void;
	pageHandler: () => void;
	submit: (e: any) => void;
}
const Second = (props: SecondProps) => {
	return (
		<>
			<form onSubmit={props.submit}>
				<Input placeholder="Tipo de Compra" />
				<Input placeholder="Tipo de Referencia" />
				<Input placeholder="Unidades" />
				<StyledInputSubmit value="Crear" customType="primary" />
			</form>
			<span className="buttonContainer">
				<Button func={props.pageHandler} text="atras" full={false} />
			</span>
		</>
	);
};
