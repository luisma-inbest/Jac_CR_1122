import React from "react";
import styles from "./ProductDetails.module.css";
import {carExample} from "@/assets";
import {Button, ButtonProduct} from "@/components/UI/atoms";

export const ProductDetails = () => {
	return (
		<div className={`row ${styles.spacing}`}>
			<div className={`${styles.imageContainer}  col-xs-12 col-md-6`}>
				<img
					src={carExample}
					alt="Imagen Producto"
					className={styles.productImage}
				/>
			</div>

			<div className={`${styles.imageContainer}  col-xs-12 col-md-6`}>
				<Button text="Showroom" func={() => console.log("true")} full={true} />
				<Button text="Ver landing" func={() => console.log("true")} full={true} />
				<ButtonProduct title="One Page." subTitle="Lorem ipsum dolor"/>
				<ButtonProduct title="Precios." subTitle="Lorem ipsum dolor"/>
				<ButtonProduct title="Ficha Técnica." subTitle="Lorem ipsum dolor"/>
				<ButtonProduct title="Información." subTitle="Lorem ipsum dolor" />
				<ButtonProduct title="Catálogo" subTitle="Lorem ipsum dolor" />
				<ButtonProduct title="Showroom" subTitle="Lorem ipsum dolor" />
			</div>
		</div>
	);
};
