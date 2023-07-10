import { useState } from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { useEffect } from "react";
import { getMessaging, getToken } from "firebase/messaging";
import { app } from "./constants/firebase";

/* custom imports */
import "./GlobalStyles/flexboxgrid.css";
import "./GlobalStyles/GlobalStyles.css";
import "./GlobalStyles/fonts.css";
import { UserProvider } from "./context/UserContext";
import { AlertsProvider } from "@/context/AlertsContext";
import { Routing } from "./routes/Routing";

function App() {
	//
	// const requestNotificationPermission = () => {
	// 	Notification.requestPermission().then((permission) => {
	// 		console.log("permission:", permission);
	// 		if (permission === "granted") {
	// 			// sendPushNotification();
	// 			getToken(getMessaging(app), {
	// 				vapidKey:
	// 					"BP-2gf8fDuutsPETlTTajzFBszghLmkXMYSqq668lBX9CrJjTZiwmGN8OE-OyRfuO1EBuLyKZhyDT3jOGFK-6Ew",
	// 			}).then((currentToken) => {
	// 				console.log("currentToken:", currentToken);
	// 			});
	// 		} else if (permission === "denied") {
	// 			console.log("denied");
	// 			// alert("No podrás recibir notificaciones");
	// 		}
	// 	});
	// };

	// useEffect(() => {
	// 	// if ("serviceWorker" in navigator) {
	// 	// 	navigator.serviceWorker
	// 	// 		.register("/push-sw.js")
	// 	// 		.then((registration) => {
	// 	// 			console.log(
	// 	// 				"Push service worker registered:",
	// 	// 				registration
	// 	// 			);
	// 	// 			// You can handle additional logic here if needed
	// 	// 		})
	// 	// 		.catch((error) => {
	// 	// 			console.log(
	// 	// 				"Push service worker registration failed:",
	// 	// 				error
	// 	// 			);
	// 	// 		});
	// 	// }
	// 	requestNotificationPermission();
	// }, []);

	return (
		<UserProvider>
			<AlertsProvider>
				<HashRouter>
					<Routing />
				</HashRouter>
			</AlertsProvider>
		</UserProvider>
	);
}
//
export default App;
