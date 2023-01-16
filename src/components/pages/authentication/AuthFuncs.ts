import UserPool from "./UserPool";
import {
	CognitoUserAttribute,
	CognitoUser,
	AuthenticationDetails,
} from "amazon-cognito-identity-js";

let email = "jorge.admin@gml.com";
let password = "GML@Inbest123#";
let dataEmail = {Name: "email", Value: email};
let dataFirstName = {Name: "name", Value: "Jorge"};
let dataLastName = {Name: "family_name", Value: "Salgado"};
let dataGender = {Name: "gender", Value: "male"};
let dataNickname = {Name: "nickname", Value: "Jorge Salgado"};
let dataPhone = {Name: "phone_number", Value: "+523314095823"};
let dataPersonalEmail = {
	Name: "custom:personal_email",
	Value: "personal@test.com",
};
let attributeList = [
	new CognitoUserAttribute(dataEmail),
	new CognitoUserAttribute(dataFirstName),
	new CognitoUserAttribute(dataLastName),
	new CognitoUserAttribute(dataGender),
	new CognitoUserAttribute(dataNickname),
	new CognitoUserAttribute(dataPhone),
	new CognitoUserAttribute(dataPersonalEmail),
];

export function signUp() {
	return new Promise((resolve, reject) => {
		UserPool.signUp(email, password, attributeList, [], (err, data) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(data);
		});
	});
}
// ------------------------------------------------------------------------------------------
export function logIn() {
	const user = new CognitoUser({
		Username: email,
		Pool: UserPool,
	});

	const authDetails = new AuthenticationDetails({
		Username: email,
		Password: password,
	});

	return new Promise((resolve, reject) => {
		user.authenticateUser(authDetails, {
			onSuccess: (result) => {
				console.log("onSuccess:", result);
				resolve(result);
			},
			onFailure: (err) => {
				console.log("onFailure:", err);
				reject(err);
			},
			newPasswordRequired: (data) => {
				console.log("newPasswordRequired:", data);
				resolve(data);
			},
		});
	});
}
// ------------------------------------------------------------------------------------------
export function getSession() {
	return new Promise((resolve, reject) => {
		const user = UserPool.getCurrentUser();
		if (user) {
			user.getSession((err: any, session: any) => {
				if (err) {
					reject(err);
					return;
				}
				console.log("getSession:", session);
				resolve(session);
			});
		} else {
			reject("No current user.");
		}
	});
}

// ------------------------------------------------------------------------------------------
export function logOut() {}

// ------------------------------------------------------------------------------------------
export function generatePassword() {
	var length = 8,
		charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
		retVal = "";
	for (var i = 0, n = charset.length; i < length; ++i) {
		retVal += charset.charAt(Math.floor(Math.random() * n));
	}
	return retVal;
}

// ------------------------------------------------------------------------------------------
