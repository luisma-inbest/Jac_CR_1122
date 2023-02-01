import React, {useState} from "react";
import styles from "./RegisterActivity.module.css";
import {
	StyledInputText,
	Button,
	Input,
	StyledInputSubmit,
	StyledTextArea,
	StyledInputSelect,
} from "@/components/UI/atoms";
import {IconCross} from "@/assets";

interface Props {
	func: () => void;
}

export const RegisterActivity = (props: Props) => {
	const [val, setVal] = useState("");
	const red = getComputedStyle(document.documentElement).getPropertyValue(
		"--red"
	);

	function formHandler(e: any) {
		e.preventDefault();
		console.log("sumbmiting form...");
	}

	return (
		<div id="back" className={`${styles.window}`}>
			<div className={`content-side ${styles.card}`}>
				<h5 className="bold mb-0">Registrar Actividad</h5>
				<span className={styles.iconContainer} onClick={props.func}>
					<IconCross color={red} size="100%" />
				</span>
				<form
					className={`mt-2 ${styles.form}`}
					action=""
					onSubmit={(e) => e.preventDefault()}
				>
					<Input placeholder="Titulo" value={val} setValue={setVal} />
					<StyledTextArea placeholder="Comentarios"></StyledTextArea>
					<StyledInputSelect>
						<option value="value2" selected disabled>
							-- Estado --
						</option>
						<option value="success">Exitoso</option>
						<option value="fail">Fallido</option>
					</StyledInputSelect>
					<StyledInputSubmit
						value="Registrar"
						customType="primary"
						onClick={formHandler}
					/>
				</form>
				<span className="buttonContainer">
					<Button func={props.func} text="cancelar" full={false} />
				</span>
			</div>
		</div>
	);
};
