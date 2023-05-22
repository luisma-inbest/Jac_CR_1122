import { CurrentLeadProvider } from "@/context/currentLeadContext/CurrentLeadContext";
import React from "react";
import { LeadDashboardBody } from "./leadDashboardBody";
import { LeadWindowProvider } from "@/context/LeadWindow";

export const LeadDashboard = () => {
	return (
		<CurrentLeadProvider>
			<LeadWindowProvider>
				<LeadDashboardBody />
			</LeadWindowProvider>
		</CurrentLeadProvider>
	);
};
