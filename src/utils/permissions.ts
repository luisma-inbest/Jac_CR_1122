interface permissionstype {
	[key: string]: string[];
}

export const permissions: permissionstype = {
	admin: ["admin", "product", "sells"],
	product: ["product"],
	sells: ["sells"],
};
