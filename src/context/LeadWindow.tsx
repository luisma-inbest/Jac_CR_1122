import React, {
	createContext,
	useState,
	ReactNode,
	type Dispatch,
} from "react";
import { ContextChilds } from "@/models/contextChilds";

// user methods
// este se usa principalmente en las llamadas para definir el tipado
export type LeadWindowContextType = {
	ShowLeadWindow: boolean;
	SetShowLeadWindow: (value: boolean) => void;
	FLotatingWindowContent: JSX.Element;
	SetFLotatingWindowContent: (value: JSX.Element) => void;
};

export const LeadWindowContext = React.createContext({});

// esta función es el provider, es decir el que le brindará la información a todos los children
// ademas de pasarl el metodo para cambiar la información
export const LeadWindowProvider = ({ children }: ContextChilds) => {
	const [ShowLeadWindow, SetShowLeadWindow] = useState<boolean>(false);
	const [FLotatingWindowContent, SetFLotatingWindowContent] =
		useState<JSX.Element>();

	return (
		<LeadWindowContext.Provider
			value={{
				ShowLeadWindow,
				SetShowLeadWindow,
				FLotatingWindowContent,
				SetFLotatingWindowContent,
			}}
		>
			{children}
		</LeadWindowContext.Provider>
	);
};

export default LeadWindowContext;
