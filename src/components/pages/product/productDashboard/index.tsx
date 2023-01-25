import React from "react";
import {Link} from "react-router-dom";
import {CardProduct} from "@/components/UI/atoms/cardProduct";
import styles from "./ProductDashboard.module.css";

export const ProductDashboard = () => {
	return (
		<div className="row">
			<div className="col-xs-12"></div>
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
