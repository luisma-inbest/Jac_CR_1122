import { CognitoUserPool } from "amazon-cognito-identity-js";

import { poolData } from "@/constants";

export default new CognitoUserPool(poolData);

//pequeño cambio
