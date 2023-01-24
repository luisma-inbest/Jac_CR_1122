export function handleMainPage(role: string): string {
	switch (role) {
		case "admin":
			return "/admin";
		case "manager":
			return "/sells";
		case "coordinator":
			return "/sells";
		case "bdc":
			return "/sells";
		case "adviser-digital":
			return "/sells/leads";
		case "adviser-floor":
			return "/sells/leads";
		case "adviser-hybrid":
			return "/sells/leads";
		case "hostess":
			return "/sells";
		default:
			return "/";
	}
}
