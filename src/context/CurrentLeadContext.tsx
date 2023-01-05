import React, {createContext, useState, ReactNode, type Dispatch} from "react";
import {ContextChilds} from "@/models/contextChilds";

// type of lead
type LeadType = {
	id: number;
	name: string;
	permissions: string[];
} | null;

// user methods
// este se usa principalmente en las llamadas para definir el tipado
export type UserContextType = {
	CurrentLead: LeadType;
	SetCurrentLead: (value: LeadType) => void;
};

export const CurrentLeadContext = React.createContext({});

// esta función es el provider, es decir el que le brindará la información a todos los children
// ademas de pasarl el metodo para cambiar la información
export const CurrentLeadProvider = ({children}: ContextChilds) => {
	const [CurrentLead, SetCurrentLead] = useState({});

	return (
		<CurrentLeadContext.Provider value={{CurrentLead, SetCurrentLead}}>
			{children}
		</CurrentLeadContext.Provider>
	);
};

export default CurrentLeadContext;
