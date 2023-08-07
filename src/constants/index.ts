const enviroment: string = "prod"; // local, dev, prod, prod-local
//--------------------------------------------
var Domain: string;
var Backend: string;
var BackendDashboards: string;
var poolData: any;

switch (enviroment) {
	case "local":
		Domain = "http://localhost:5173";
		Backend = "https://umc61eqno5.execute-api.us-east-1.amazonaws.com/";
		BackendDashboards =
			"https://hxiejwf6b2.execute-api.us-east-1.amazonaws.com/";
		poolData = {
			UserPoolId: "us-east-1_Um0V3IHnS",
			ClientId: "52nj5l30o4sm7813o419ms82va",
		};
		break;
	case "dev":
		// Domain =
		// 	"http://jac-crm-front-end-dev.s3-website-us-east-1.amazonaws.com";
		Domain = "https://beta.crmjac.mx";
		Backend = "https://umc61eqno5.execute-api.us-east-1.amazonaws.com/";
		BackendDashboards =
			" https://hxiejwf6b2.execute-api.us-east-1.amazonaws.com/";
		poolData = {
			UserPoolId: "us-east-1_Um0V3IHnS",
			ClientId: "52nj5l30o4sm7813o419ms82va",
		};
		break;
	case "prod":
		Domain = "https://crmjac.mx";
		// Domain =
		// 	"http://jac-crm-front-end-prod.s3-website-us-east-1.amazonaws.com";
		Backend = "https://vgn14b37gb.execute-api.us-east-1.amazonaws.com/";
		BackendDashboards =
			"https://il15wo7erl.execute-api.us-east-1.amazonaws.com/";
		poolData = {
			UserPoolId: "us-east-1_WDfEjlZIh",
			ClientId: "paj5qfl0urgsv6lljt4o0mc8j",
		};
		break;
	case "prod-local":
		Domain = "http://localhost:5173";
		Backend = "https://vgn14b37gb.execute-api.us-east-1.amazonaws.com/";
		BackendDashboards =
			"https://il15wo7erl.execute-api.us-east-1.amazonaws.com/";
		poolData = {
			UserPoolId: "us-east-1_WDfEjlZIh",
			ClientId: "paj5qfl0urgsv6lljt4o0mc8j",
		};
		break;
	default:
		break;
}
//
export { Domain, Backend, poolData, BackendDashboards };

//
