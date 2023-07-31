import { useContext, useState } from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { useEffect } from "react";
import { getMessaging, getToken } from "firebase/messaging";
import { app } from "./constants/firebase";

/* custom imports */
import "./GlobalStyles/flexboxgrid.css";
import "./GlobalStyles/GlobalStyles.css";
import "./GlobalStyles/fonts.css";
import { Routing } from "./routes/Routing";
import { NotificationAPI } from "./apis";

function App() {
	return (
		<HashRouter>
			<Routing />
		</HashRouter>
	);
}
//
export default App;
