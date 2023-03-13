import { useState } from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { useEffect } from "react";

/* custom imports */
import "./GlobalStyles/flexboxgrid.css";
import "./GlobalStyles/GlobalStyles.css";
import "./GlobalStyles/fonts.css";
import { UserProvider } from "./context/UserContext";
import { AlertsProvider } from "@/context/AlertsContext";
import { Routing } from "./routes/Routing";

function App() {
	return (
		<UserProvider>
			<AlertsProvider>
				<BrowserRouter>
					<Routing />
				</BrowserRouter>
			</AlertsProvider>
		</UserProvider>
	);
}

export default App;
