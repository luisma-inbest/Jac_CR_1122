import { CognitoUserPool } from "amazon-cognito-identity-js";

// const poolData = {
// 	UserPoolId: "us-east-1_CdL0GjfH6",
// 	ClientId: "pav7bob2acvad58msrvufo0iv",
// };
const poolData = {
	UserPoolId: "us-east-1_Um0V3IHnS",
	ClientId: "52nj5l30o4sm7813o419ms82va",
};

export default new CognitoUserPool(poolData);
