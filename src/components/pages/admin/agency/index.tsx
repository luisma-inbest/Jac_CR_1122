import React, { useState, useContext } from "react";
import CurrentAgencyContext, {
	CurrentAgencyContextType,
	CurrentAgencyProvider,
} from "@/context/currentAgencyContext/CurrentAgencyContext";
import { AgencyBody } from "./agencyBody";

export const Agency = () => {
	return (
		<CurrentAgencyProvider>
			<AgencyBody />
		</CurrentAgencyProvider>
	);
};
