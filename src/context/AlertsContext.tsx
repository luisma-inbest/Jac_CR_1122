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
	test: () => void;
};

//export const UserContext = createContext<userContextInterface | null>(null);

const AlertsContext = createContext({});

export const AlertsProvider = ({ children }: ContextChilds) => {
	const [Alerts, SetAlerts] = useState<Alert[]>([]);

	function test() {
		console.log("crear una nueva alerta...");
	}

	return (
		<AlertsContext.Provider value={{ Alerts, SetAlerts, test }}>
			{children}
		</AlertsContext.Provider>
	);
};

export default AlertsContext;
