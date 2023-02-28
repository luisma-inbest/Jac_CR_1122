import React, {useContext} from "react";

import {ProductRow} from "@/components/UI/molecules";
import styles from "./ProductsTable.module.css";
import {ProductRowProps} from "@/models";

interface UsersTableProps {
	products: ProductRowProps[];
}

export const ProductsTable = (props: UsersTableProps) => {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th className={`p4 highlight text-left`}>Producto</th>
					<th className={`p4 highlight text-left`}>Versión</th>
					<th className={`p4 highlight text-left`}>Modelo</th>
					<th className={`p4 highlight text-left`}>Precio</th>
				</tr>
			</thead>
			<tbody className={styles.tableRow}>
				{/* Starts map with users */}
				{props.products.map((product, index) => (
					<ProductRow
						key={index}
						name={product.name}
						model={product.model}
						version={product.version}
						price={product.price}
						active={product.active}
					/>
				))}
				{/* Ends map with users */}
			</tbody>
		</table>
	);
};
