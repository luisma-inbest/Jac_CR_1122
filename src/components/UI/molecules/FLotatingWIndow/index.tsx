import React, { useContext, useEffect, useReducer, useState } from "react";
import styles from "./RegisterActivity.module.css";
import {
	StyledInputText,
	Button,
	Input,
	StyledInputSubmit,
	StyledTextArea,
	StyledInputSelect,
	StyledSelect,
	StyledFlotatingWindow,
	StyledFlotatingCard,
} from "@/components/UI/atoms";
import { IconCross } from "@/assets";
import { LeadActivityType } from "@/models";
import { LeadAPI } from "@/apis";
import { useMutation } from "react-query";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";

interface Props {
	func: () => void;
	header: string;
	content: JSX.Element;
}

export const FlotatingWindow = (props: Props) => {
	const red = getComputedStyle(document.documentElement).getPropertyValue(
		"--red"
	);

	return (
		<StyledFlotatingWindow>
			<StyledFlotatingCard className={`content-side`}>
				<h5 className="bold mb-0">{props.header}</h5>
				<span className={styles.iconContainer} onClick={props.func}>
					<IconCross color={red} size="100%" />
				</span>
				{/* Here goes the content */}
				{props.content}
				{/* End of content */}
				<span className="buttonContainer">
					<Button func={props.func} text="cancelar" full={false} />
				</span>
			</StyledFlotatingCard>
		</StyledFlotatingWindow>
	);
};
