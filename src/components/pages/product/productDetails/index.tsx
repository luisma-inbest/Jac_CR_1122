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
				<ButtonProduct slug="./one-pager" title="One Page." subTitle="Lorem ipsum dolor"/>
				<ButtonProduct slug="/" title="Precios." subTitle="Lorem ipsum dolor"/>
				<ButtonProduct slug="/" title="Ficha Técnica." subTitle="Lorem ipsum dolor"/>
				<ButtonProduct slug="/" title="Información." subTitle="Lorem ipsum dolor" />
				<ButtonProduct slug="/" title="Catálogo" subTitle="Lorem ipsum dolor" />
				<ButtonProduct slug="/" title="Showroom" subTitle="Lorem ipsum dolor" />
			</div>
		</div>
	);
};
