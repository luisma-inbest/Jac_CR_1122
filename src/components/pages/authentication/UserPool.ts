import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
	UserPoolId: "us-east-1_hE6lm8TkQ",
	ClientId: "690t300qod7f4nj2eala88lktk",
};

export default new CognitoUserPool(poolData);
