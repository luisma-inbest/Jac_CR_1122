import {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {useEffect} from "react";

/* custom imports */
import "./GlobalStyles/flexboxgrid.css";
import "./GlobalStyles/GlobalStyles.css";
import {Counter} from "./Counter";
import {UserProvider} from "./context/UserContext";
import {Routing} from "./routes/Routing";

function App() {
	const [count, setCount] = useState(0);

	return (
		<UserProvider>
			<BrowserRouter>
				<Routing />
			</BrowserRouter>
		</UserProvider>
	);
}

export default App;
