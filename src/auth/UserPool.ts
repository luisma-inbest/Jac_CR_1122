import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
	UserPoolId: "us-east-1_Um0V3IHnS",
	ClientId: "52nj5l30o4sm7813o419ms82va",
};
// const poolData = {
// 	UserPoolId: "us-east-1_WDfEjlZIh",
// 	ClientId: "paj5qfl0urgsv6lljt4o0mc8j",
// };

export default new CognitoUserPool(poolData);

//pequeño cambio
