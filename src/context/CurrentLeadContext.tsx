import React, {
	createContext,
	useState,
	ReactNode,
	type Dispatch,
} from "react";
import { ContextChilds } from "@/models/contextChilds";
import { LeadDataType } from "@/models";

// user methods
// este se usa principalmente en las llamadas para definir el tipado
export type CurrentLeadContextType = {
	CurrentLead: LeadDataType;
	SetCurrentLead: (value: LeadDataType) => void;
};

export const CurrentLeadContext = React.createContext({});

let initialData: LeadDataType = {
	id: -1,
	leadName: "",
	leadEmails: [""],
	leadPhones: [""],
	leadPhase: {
		id: -1,
		description: "Fase 1",
		slug: "",
		createdAt: "",
		updatedAt: "",
	},
	LeadInterests: [],
	LeadActivities: [],
	LeadOrigin: "",
	createdAt: new Date(),
	updatedAt: new Date(),
	UserId: -1,
};

// esta función es el provider, es decir el que le brindará la información a todos los children
// ademas de pasarl el metodo para cambiar la información
export const CurrentLeadProvider = ({ children }: ContextChilds) => {
	const [CurrentLead, SetCurrentLead] = useState<LeadDataType>(initialData);

	//activities methods
	function getActivities() {
		console.log("test desde el userprovider");
	}
	function setActivities() {
		console.log("test desde el userprovider");
	}

	return (
		<CurrentLeadContext.Provider value={{ CurrentLead, SetCurrentLead }}>
			{children}
		</CurrentLeadContext.Provider>
	);
};

export default CurrentLeadContext;
