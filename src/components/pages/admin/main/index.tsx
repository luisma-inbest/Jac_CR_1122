import React, { useEffect } from "react";
import styles from "./Agent.module.css";
import { StyledInputText } from "components/UI/atoms";
import { Link } from "react-router-dom";

import { UserAPI } from "@/apis";
import { User } from "@/models";

export const Admin = () => {
	const applicationServerKey = encodeURIComponent(
		"BHBOI4eyr1qScBxCnoh6QYfSpLfI9ymu71q0BiD98-dghHDsZMwTuvG3mmfPHLHe8Lv4wEmw1VAWhbY1CIbF4to"
	);

	const requestNotificationPermission = () => {
		Notification.requestPermission().then((permission) => {
			console.log("permission:", permission);
			if (permission === "granted") {
				new Notification("Hola mundo");
			}
		});
	};

	const sendPushNotificationCustom = () => {
		new Notification("Hola mundo");
	};

	const sendPushNotification = () => {
		navigator.serviceWorker.ready.then((registration) => {
			registration.pushManager
				.subscribe({
					userVisibleOnly: true,
					applicationServerKey: applicationServerKey,
				})
				.then((subscription) => {
					// Send the subscription object to your server
					// to store it and use it to send push notifications later
				})
				.catch((error) => {
					console.log(
						"Failed to subscribe to push notifications:",
						error
					);
				});
		});
	};

	return (
		<div className="contentVerticalPadding">
			<div className="row mb-3">
				<div className="col-xs-12">
					<Link to="/admin/users">ir a usuarios</Link>
					<br />
					<Link to="/admin/agencies">ir a agencias</Link>
					<hr />

					<button onClick={requestNotificationPermission}>
						Enable Push Notifications
					</button>
					<br />
					<button onClick={sendPushNotification}>
						Send Push Notifications
					</button>
					<br />
					<button onClick={sendPushNotificationCustom}>
						Send Push Notifications
					</button>
				</div>
			</div>
		</div>
	);
};
