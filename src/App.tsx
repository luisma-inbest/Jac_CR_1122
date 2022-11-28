import {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {useEffect} from "react";

/* custom imports */
import "./GlobalStyles/flexboxgrid.css";
import "./GlobalStyles/GlobalStyles.css";
import "./GlobalStyles/fonts.css";
import {UserProvider} from "./context/UserContext";
import {Routing} from "./routes/Routing";

function App() {
	return (
		<UserProvider>
			<BrowserRouter>
				<Routing />
			</BrowserRouter>
		</UserProvider>
	);
}

export default App;
