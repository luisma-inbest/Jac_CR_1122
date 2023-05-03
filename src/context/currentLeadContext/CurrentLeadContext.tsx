import React, { createContext, useState, ReactNode, useReducer } from "react";
import { ContextChilds } from "@/models/contextChilds";
import { LeadDataType } from "@/models";
import { initial, reducer } from "./CurrentLeadReducer";

// user methods
// este se usa principalmente en las llamadas para definir el tipado
export type CurrentLeadContextType = {
	CurrentLead: LeadDataType;
	DispatchCurrentLead: any;
};

export const CurrentLeadContext = React.createContext({});

// esta función es el provider, es decir el que le brindará la información a todos los children
// ademas de pasarl el metodo para cambiar la información
export const CurrentLeadProvider = ({ children }: ContextChilds) => {
	// const [CurrentLead, SetCurrentLead] = useState<LeadDataType>(initial);
	const [CurrentLead, DispatchCurrentLead] = React.useReducer(
		reducer,
		initial
	);

	//activities methods
	function getActivities() {
		console.log("test desde el userprovider");
	}
	function setActivities() {
		console.log("test desde el userprovider");
	}

	return (
		<CurrentLeadContext.Provider
			value={{ CurrentLead, DispatchCurrentLead }}
		>
			{children}
		</CurrentLeadContext.Provider>
	);
};

export default CurrentLeadContext;
