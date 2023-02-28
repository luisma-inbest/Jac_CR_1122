import { Route } from "react-router-dom";

import {
	Register,
	Admin,
	Users,
	Agencies,
	Agency,
	CreateAgency,
} from "./../components/pages";
import { Main } from "./../components/templates";
import { AdminRoutes } from "./../models";

export const AdminRouter = (
	<Route path={AdminRoutes.Admin} element={<Main />}>
		<Route path={AdminRoutes.Main} element={<Admin />} />
		<Route path={AdminRoutes.Register} element={<Register />} />
		<Route path={AdminRoutes.Users} element={<Users />} />
		<Route path={AdminRoutes.Agencies} element={<Agencies />} />
		<Route path={AdminRoutes.Agency} element={<Agency />} />
		<Route path={AdminRoutes.AgencyCreate} element={<CreateAgency />} />
	</Route>
);
