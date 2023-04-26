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
import LeadWindowContext, { LeadWindowContextType } from "@/context/LeadWindow";

interface Props {}

export const FlotatingWindow = (props: Props) => {
	const red = getComputedStyle(document.documentElement).getPropertyValue(
		"--red"
	);
	const {
		ShowLeadWindow,
		SetShowLeadWindow,
		FLotatingWindowContent,
		SetFLotatingWindowContent,
		Header,
		SetHeader,
	} = useContext(LeadWindowContext) as LeadWindowContextType;

	function manageCLick(e: any) {
		e.target.id === "LeadWindowBackground" &&
			SetShowLeadWindow(!ShowLeadWindow);
	}

	return (
		<StyledFlotatingWindow
			id="LeadWindowBackground"
			onClick={(e) => manageCLick(e)}
		>
			<StyledFlotatingCard className={`content-side`}>
				<h5 className="bold mb-0">{Header}</h5>
				<span
					className={styles.iconContainer}
					onClick={() => SetShowLeadWindow(!ShowLeadWindow)}
				>
					<IconCross color={red} size="100%" />
				</span>
				{/* Here goes the content */}
				{FLotatingWindowContent}
				{/* End of content */}
				<span className="buttonContainer">
					<Button
						func={() => SetShowLeadWindow(!ShowLeadWindow)}
						text="cancelar"
						full={false}
					/>
				</span>
			</StyledFlotatingCard>
		</StyledFlotatingWindow>
	);
};
