import React from "react";
import {Link} from "react-router-dom";

export const ProductDashboard = () => {
	return (
		<div>
			<h1>Aquí van todos los vehiculos</h1>
			<Link to="/product/details/1"> Detalles</Link>
		</div>
	);
};
