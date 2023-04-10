interface permissionstype {
	[key: string]: string[];
}

const shared = ["profile"];

export const permissions: permissionstype = {
	admin: ["admin", "product", "sells", "support", "marketing", ...shared],
	product: ["product", ...shared],
	sells: ["sells", ...shared],
	manager: ["sells", ...shared],
	coordinator: ["sells", ...shared],
	bdc: ["sells", ...shared],
	"adviser-digital": ["sells", ...shared],
	"adviser-floor": ["sells", ...shared],
	"adviser-hybrid": ["sells", ...shared],
	hostess: ["sells", ...shared],
	support: ["support", ...shared],
	marketing: ["marketing", ...shared],
	hr: ["hr", ...shared],
};
