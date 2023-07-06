importScripts(
	"https://www.gstatic.com/firebasejs/9.9.1/firebase-app-compat.js"
);
importScripts(
	"https://www.gstatic.com/firebasejs/9.9.1/firebase-messaging-compat.js"
);

const firebaseConfig = {
	apiKey: "AIzaSyAKUoSCn90-sI9XSRodjAM31EoTq78EQYM",
	authDomain: "jac-crm0723.firebaseapp.com",
	projectId: "jac-crm0723",
	storageBucket: "jac-crm0723.appspot.com",
	messagingSenderId: "70144409471",
	appId: "1:70144409471:web:3beb760c9e33175be1644a",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
	console.log(
		"[firebase-messaging-sw.js] Received background message ",
		payload
	);
	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
		icon: payload.notification.image,
	};

	self.registration.showNotification(notificationTitle, notificationOptions);
});
