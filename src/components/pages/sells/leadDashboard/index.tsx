import { CurrentLeadProvider } from "@/context/CurrentLeadContext";
import React from "react";
import { Body } from "./body";
import { LeadWindowProvider } from "@/context/LeadWindow";

export const LeadDashboard = () => {
	return (
		<CurrentLeadProvider>
			<LeadWindowProvider>
				<Body />
			</LeadWindowProvider>
		</CurrentLeadProvider>
	);
};
