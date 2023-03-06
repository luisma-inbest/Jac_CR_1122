interface permissionstype {
	[key: string]: string[];
}

const shared = ["profile"];

export const permissions: permissionstype = {
	admin: ["admin", "product", "sells", ...shared],
	product: ["product", ...shared],
	sells: ["sells", ...shared],
};
