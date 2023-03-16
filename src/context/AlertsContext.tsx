import React, {
	createContext,
	useState,
	ReactNode,
	type Dispatch,
} from "react";
import { ContextChilds } from "@/models/contextChilds";

interface Alert {
	type: "success" | "error" | "info" | "warning";
	title: string;
	text: string;
}

// type of user
// export type AlertsArray = {
// 	alerts: Alert[];
// };
// user methods
// este se usa principalmente en las llamadas para definir el tipado
export type AlertsContextType = {
	Alerts: Alert[];
	SetAlerts: (value: Alert[]) => void;
	createAlert: (type: string, title: string, tex: string) => void;
};

//export const UserContext = createContext<userContextInterface | null>(null);

const AlertsContext = createContext({});

export const AlertsProvider = ({ children }: ContextChilds) => {
	const [Alerts, SetAlerts] = useState<Alert[]>([]);

	function createAlert(type: string, title: string, text: string) {
		let newAlert: any = {
			type: type,
			title: title,
			text: text,
		};
		SetAlerts([...Alerts, newAlert]);
	}

	return (
		<AlertsContext.Provider value={{ Alerts, SetAlerts, createAlert }}>
			{children}
		</AlertsContext.Provider>
	);
};

export default AlertsContext;
