import { Route } from "react-router-dom";

import {
	SellsDashboard,
	Leads,
	LeadDashboard,
	SellerProfile,
	SellerDashboard,
} from "./../components/pages";
import { Main } from "./../components/templates";
import { SellsRoutes } from "./../models";

export const SellsRouter = (
	<Route path={SellsRoutes.Sells} element={<Main />}>
		<Route path={SellsRoutes.Main} element={<SellsDashboard />} />
		<Route path={SellsRoutes.Leads} element={<Leads />} />
		<Route path={SellsRoutes.SingleLead} element={<LeadDashboard />} />
		<Route path={SellsRoutes.FutureLeads} element={<SellsDashboard />} />
		<Route path={SellsRoutes.FrozenLeads} element={<SellsDashboard />} />
		<Route path={SellsRoutes.SellerProfile} element={<SellerProfile />} />
		<Route
			path={SellsRoutes.SellsDashboard}
			element={<SellerDashboard />}
		/>
	</Route>
);
