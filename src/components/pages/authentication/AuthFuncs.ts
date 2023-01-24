import UserPool from "./UserPool";
import {
	CognitoUserAttribute,
	CognitoUser,
	AuthenticationDetails,
} from "amazon-cognito-identity-js";
import {InterfaceUser} from "@/models";

let email = "jorge.admin@gml.com";
let password = "GML@Inbest123#";

let Names = [];

export function signUp(user: InterfaceUser) {
	let dataEmail = {Name: "email", Value: user.email};
	let dataFirstName = {Name: "name", Value: user.firstName};
	let dataLastName = {Name: "family_name", Value: user.lastName};
	let dataBirthDate = {Name: "birthdate", Value: user.birthDate};
	let dataNickname = {Name: "nickname", Value: user.nickname};
	let dataGender = {Name: "gender", Value: user.gender};
	let dataPersonalEmail = {
		Name: "custom:personal_email",
		Value: user.personalEmail,
	};
	let dataPhone = {Name: "phone_number", Value: user.phoneNumber};
	let dataState = {Name: "custom:state", Value: user.state};

	let attributeList = [
		new CognitoUserAttribute(dataEmail),
		new CognitoUserAttribute(dataFirstName),
		new CognitoUserAttribute(dataLastName),
		new CognitoUserAttribute(dataGender),
		new CognitoUserAttribute(dataNickname),
		new CognitoUserAttribute(dataPhone),
		new CognitoUserAttribute(dataPersonalEmail),
	];

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
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
