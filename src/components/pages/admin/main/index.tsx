import React, { useContext, useEffect } from "react";
import styles from "./Agent.module.css";
import { StyledInputText } from "components/UI/atoms";
import { Link } from "react-router-dom";
import { getMessaging, getToken } from "firebase/messaging";
import { app } from "@/constants/firebase";

import { NotificationAPI, UserAPI } from "@/apis";
import { User } from "@/models";

import UserContext, { UserContextType } from "@/context/UserContext";

export const Admin = () => {
	const [token, setToken] = React.useState("");
<<<<<<< HEAD
	// //
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
	// 				setToken(currentToken);
	// 			});
	// 		} else if (permission === "denied") {
	// 			console.log("denied");
	// 			// alert("No podrás recibir notificaciones");
	// 		}
	// 	});
	// };

	// useEffect(() => {
	// 	requestNotificationPermission();
	// }, []);
=======
	const { User, SetUser } = useContext(UserContext) as UserContextType;
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
	// 				setToken(currentToken);
	// 				NotificationAPI.addToken(User!.id, currentToken);
	// 				console.warn("se envió petición");
	// 			});
	// 		} else if (permission === "denied") {
	// 			console.log("denied");
	// 			// alert("No podrás recibir notificaciones");
	// 		}
	// 	});
	// };

	useEffect(() => {
		// if ("serviceWorker" in navigator) {
		// 	navigator.serviceWorker
		// 		.register("/push-sw.js")
		// 		.then((registration) => {
		// 			console.log(
		// 				"Push service worker registered:",
		// 				registration
		// 			);
		// 			// You can handle additional logic here if needed
		// 		})
		// 		.catch((error) => {
		// 			console.log(
		// 				"Push service worker registration failed:",
		// 				error
		// 			);
		// 		});
		// }
		// requestNotificationPermission();
	}, []);
>>>>>>> develop

	return (
		<div className="contentVerticalPadding">
			<div className="row mb-3">
				<div className="col-xs-12">
					<Link to="/admin/users">ir a usuarios</Link>
					<br />
					<Link to="/admin/agencies">ir a agencias</Link>
					<hr />
					<p>ir a usuarios</p>
					<p>{token}</p>

					{/* <button onClick={requestNotificationPermission}>
						Enable Push Notifications
					</button>
					<br />
					<button onClick={sendPushNotification}>
						Send Push Notifications
					</button>
					<br />
					<button onClick={sendPushNotificationCustom}>
						Send Push Notifications
					</button> */}
				</div>
			</div>
		</div>
	);
};
