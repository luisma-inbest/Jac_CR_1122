interface permissionstype {
	[key: string]: string[];
}

const shared = ["profile"];

export const permissions: permissionstype = {
	admin: ["admin", "product", "sells", "support", "marketing", ...shared],
	product: ["product", ...shared],
	sells: ["sells", ...shared],
	support: ["support", ...shared],
	marketing: ["marketing", ...shared],
	hr: ["hr", ...shared],
};
