import { CurrentLeadProvider } from "@/context/CurrentLeadContext";
import React from "react";
import { Body } from "./body";

export const LeadDashboard = () => {
	return (
		<CurrentLeadProvider>
			<Body />
		</CurrentLeadProvider>
	);
};
