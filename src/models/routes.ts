export const PublicRoutes = {
	Login: "login",
	// Product
};
export const SharedRoutes = {
	Profile: "profile",
};
export const ProductRoutes = {
	Product: "product",
	Main: "",
	Create: "create",
	Details: "details/:id",
	OnePager: "details/:id/one-pager",
};

export const AdminRoutes = {
	Admin: "admin",
	Main: "",
	Register: "register",
	Users: "users",
	Agencies: "agencies",
	Agency: "agencies/:agencyId",
	AgencyCreate: "agencies/create",
};

export const SellsRoutes = {
	Sells: "sells",
	Main: "",
	Leads: "leads",
	SingleLead: "leads/:leadId",
	SellerProfile: "seller-profile",
	Search: "leads/search",
	Agenda: "agenda",
};
