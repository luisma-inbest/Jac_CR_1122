import React, { createContext, useState, ReactNode, useReducer } from "react";
import { ContextChilds } from "@/models/contextChilds";
import { Agency } from "@/models";
import { initial, reducer } from "./CurrentAgencyReducer";

// user methods
// este se usa principalmente en las llamadas para definir el tipado
export type CurrentAgencyContextType = {
	CurrentAgency: Agency;
	DispatchCurrentAgency: any;
};

export const CurrentAgencyContext = React.createContext({});

// esta función es el provider, es decir el que le brindará la información a todos los children
// ademas de pasarl el metodo para cambiar la información
export const CurrentAgencyProvider = ({ children }: ContextChilds) => {
	const [CurrentAgency, DispatchCurrentAgency] = React.useReducer(
		reducer,
		initial
	);

	return (
		<CurrentAgencyContext.Provider
			value={{ CurrentAgency, DispatchCurrentAgency }}
		>
			{children}
		</CurrentAgencyContext.Provider>
	);
};

export default CurrentAgencyContext;
