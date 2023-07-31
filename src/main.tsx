import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import App from "./App";

import { UserProvider } from "./context/UserContext";
import { AlertsProvider } from "@/context/AlertsContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<>
		<QueryClientProvider client={queryClient}>
			<UserProvider>
				<AlertsProvider>
					<App />
				</AlertsProvider>
			</UserProvider>
			<ReactQueryDevtools />
		</QueryClientProvider>
	</>
);
