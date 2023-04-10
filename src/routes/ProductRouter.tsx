import { Route } from "react-router-dom";

import { CreateProduct } from "./../components/pages";
import { Main } from "./../components/templates";
import { ProductRoutes } from "./../models";

export const ProductRouter = (
	<Route path={ProductRoutes.Product} element={<Main />}>
		<Route path={ProductRoutes.Create} element={<CreateProduct />} />
	</Route>
);
