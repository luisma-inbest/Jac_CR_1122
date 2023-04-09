import UserPool from "./UserPool";
import {
	CognitoUserAttribute,
	CognitoUser,
	AuthenticationDetails,
} from "amazon-cognito-identity-js";
import { User } from "@/models";

export function signUp(user: User) {
	let dataEmail = { Name: "email", Value: user.email };
	let dataNickname = { Name: "nickname", Value: user.nickname };
	let dataRole = { Name: "custom:role", Value: `shared,${user.userRole}` };
	let dataID = { Name: "custom:id", Value: user.userId };
	let AgencyId = { Name: "custom:agencyID", Value: user.AgencyId };

	let attributeList = [
		new CognitoUserAttribute(dataEmail),
		new CognitoUserAttribute(dataNickname),
		new CognitoUserAttribute(dataID),
		new CognitoUserAttribute(dataRole),
		new CognitoUserAttribute(AgencyId),
	];

	return new Promise((resolve, reject) => {
		UserPool.signUp(
			user.email,
			user.password,
			attributeList,
			[],
			(err, data) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(data);
			}
		);
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
	let password = "";

	getParams().then(({ user }: any) => {
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
// export function updateAtributes() {
// 	getParams().then(({user}: any) => {
// 		user.updateAttributes(newAttributeList, (err: any, results: any) => {
// 			if (err) {
// 				console.log(err);
// 				return;
// 			}
// 			console.log("updateAtributes:", results);
// 		});
// 	});
// }

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
							const { Name, Value } = attribute;
							results[Name] = Value;
						}
						results["custom:role"] =
							results["custom:role"].split(",");
						console.log(results);
						resolve(results);
					});
				});
				//
				// console.log("getSession:", session);
				resolve({ user, ...session, ...(attributes as object) });
			});
		} else {
			reject("No current user.");
		}
	});
}
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
