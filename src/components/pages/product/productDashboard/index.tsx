import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardProduct } from "@/components/UI/atoms/cardProduct";
import styles from "./ProductDashboard.module.css";
import { ProductsTable } from "@/components/UI/organisms/productsTable";
import { ProductRowProps } from "@/models";
import { Button, Loader } from "@/components/UI/atoms";
import { AgencyAPI } from "@/apis";
import { useQuery } from "react-query";

export const ProductDashboard = () => {
	const navigate = useNavigate();
	const products: ProductRowProps[] = [
		{
			name: "J7",
			model: "2022",
			version: "electrico",
			price: "87887",
			active: true,
		},
		{
			name: "J7",
			model: "2022",
			version: "electrico",
			price: "87887",
			active: true,
		},
	];

	const { isLoading, data, isError, error } = useQuery({
		queryKey: ["agencies"],
		queryFn: AgencyAPI.getAll,
		staleTime: 5 * (60 * 1000), // 5 mins
		cacheTime: 10 * (60 * 1000), // 10 mins
	});

	const windowHandler = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	if (isLoading) {
		return (
			<div className="row">
				<div className={`col-xs-12 loaderContainer`}>
					<Loader />
				</div>
			</div>
		);
	}

	return (
		<div className="row">
			<div className={`col-xs-12 ${styles.tableContainer}`}>
				<ProductsTable products={products} />
			</div>
			<div className="col-xs-12 mt-2">
				<Button
					text="Agregar nuevo producto"
					full={true}
					func={() => navigate("/product/create")}
				/>
			</div>
		</div>
	);
};
