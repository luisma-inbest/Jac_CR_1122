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
	useEffect(() => {
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker
				.register("/push-sw.js")
				.then((registration) => {
					console.log(
						"Push service worker registered:",
						registration
					);
					// You can handle additional logic here if needed
				})
				.catch((error) => {
					console.log(
						"Push service worker registration failed:",
						error
					);
				});
		}
		requestNotificationPermission();
	}, []);

	const requestNotificationPermission = () => {
		Notification.requestPermission().then((permission) => {
			if (permission === "granted") {
				sendPushNotification();
			}
		});
	};

	const sendPushNotification = () => {
		navigator.serviceWorker.ready.then((registration) => {
			registration.pushManager
				.subscribe({
					userVisibleOnly: true,
					applicationServerKey:
						"BHBOI4eyr1qScBxCnoh6QYfSpLfI9ymu71q0BiD98-dghHDsZMwTuvG3mmfPHLHe8Lv4wEmw1VAWhbY1CIbF4to",
				})
				.then((subscription) => {
					// Send the subscription object to your server
					// to store it and use it to send push notifications later
				})
				.catch((error) => {
					console.log("Bienvenido a tu CRM ", error);
				});
		});
	};

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

export default App;
