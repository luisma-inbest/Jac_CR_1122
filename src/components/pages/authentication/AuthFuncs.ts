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
let newdataNickname = {Name: "nickname", Value: "JorgeNew"};
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
let newattributeList = [
	new CognitoUserAttribute(dataEmail),
	new CognitoUserAttribute(dataFirstName),
	new CognitoUserAttribute(dataLastName),
	new CognitoUserAttribute(dataGender),
	new CognitoUserAttribute(newdataNickname),
	new CognitoUserAttribute(dataPhone),
	new CognitoUserAttribute(dataPersonalEmail),
];

// ------------------------------------------------------------------------------------------
export function logIn(email: string, password: string) {
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
export function logOut() {
	const user = UserPool.getCurrentUser();
	if (user) {
		user.signOut();
	}
	console.log("logout");
}

// ------------------------------------------------------------------------------------------
export function changePassword() {
	let newPassword = "GML@Inbest456#";

	getParams().then(({user}: any) => {
		user.changePassword(password, newPassword, (err: any, result: any) => {
			if (err) {
				console.log(err);
				return;
			}
			console.log("changePassword:", result);
		});
	});
}

// ------------------------------------------------------------------------------------------
export function updateAtributes() {
	getParams().then(({user}: any) => {
		user.updateAttributes(newattributeList, (err: any, results: any) => {
			if (err) {
				console.log(err);
				return;
			}
			console.log("updateAtributes:", results);
		});
	});
}

// ------------------------------------------------------------------------------------------

export function getParams() {
	return new Promise((resolve, reject) => {
		const user = UserPool.getCurrentUser();
		if (user) {
			user.getSession(async (err: any, session: any) => {
				if (err) {
					reject(err);
					return;
				}
				//
				const attributes = await new Promise((resolve, reject) => {
					user.getUserAttributes((err: any, attributes: any) => {
						if (err) {
							reject(err);
							return;
						}
						const results: any = {};
						for (let attribute of attributes) {
							const {Name, Value} = attribute;
							results[Name] = Value;
						}
						console.log(results);
						resolve(results);
					});
				});
				//
				// console.log("getSession:", session);
				resolve({user, ...session, ...(attributes as object)});
			});
		} else {
			reject("No current user.");
		}
	});
}
