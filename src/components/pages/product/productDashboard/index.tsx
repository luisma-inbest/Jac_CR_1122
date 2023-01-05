import React from "react";
import {Link} from "react-router-dom";
import {CardProduct} from "@/components/UI/atoms/cardProduct";

export const ProductDashboard = () => {
	return (
		<div className="row">
			<div className="col-xs-12">
				<h1>Aquí van todos los vehiculos</h1>
			</div>
			<Link to="/product/details/1" className="col-xs-12 col-md-6 mb-3">
				<CardProduct />
			</Link>
			<Link to="/product/details/1" className="col-xs-12 col-md-6 mb-3">
				<CardProduct />
			</Link>
			<Link to="/product/details/1" className="col-xs-12 col-md-6 mb-3">
				<CardProduct />
			</Link>
			<Link to="/product/details/1" className="col-xs-12 col-md-6 mb-3">
				<CardProduct />
			</Link>
			<Link to="/product/details/1" className="col-xs-12 col-md-6 mb-3">
				<CardProduct />
			</Link>
		</div>
	);
};
