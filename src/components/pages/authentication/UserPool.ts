import {CognitoUserPool} from "amazon-cognito-identity-js";

//us-east-1_hE6lm8TkQ
//690t300qod7f4nj2eala88lktk

const poolData = {
	UserPoolId: "us-east-1_CdL0GjfH6",
	ClientId: "pav7bob2acvad58msrvufo0iv",
};

export default new CognitoUserPool(poolData);
