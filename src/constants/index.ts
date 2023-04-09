const enviroment: string = "local"; // local, dev, prod
//--------------------------------------------
var Domain: string;
var Backend: string;
var Cognito: string;

switch (enviroment) {
	case "local":
		var Domain = "http://localhost:5173";
		var Backend = "https://39kvm7kjwh.execute-api.us-east-1.amazonaws.com/";
		break;
	case "dev":
		var Domain =
			"http://jac-crm-front-end-dev.s3-website-us-east-1.amazonaws.com";
		var Backend = "https://39kvm7kjwh.execute-api.us-east-1.amazonaws.com/";
		break;
	case "prod":
		var Domain =
			"http://jac-crm-front-end.s3-website-us-east-1.amazonaws.com";
		var Backend = "https://39kvm7kjwh.execute-api.us-east-1.amazonaws.com/";
		break;
	default:
		break;
}

export { Domain, Backend };
