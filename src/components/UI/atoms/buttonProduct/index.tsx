import { carExample, IconArrow } from "@/assets";
import React from "react";
import { Link } from "react-router-dom";

import styles from "./ButtonProduct.module.css";
interface ButtonProps {
	title: string;
	subTitle: string;
	slug: string;
};

export const ButtonProduct = (props: ButtonProps) => {
	return (
		<div className={` ${styles.card}`}>
			<div className={` ${styles.cardContent}`}>
				<p className="p2 bold no-margin">{props.title}</p>
				<p className="p3 secondary no-margin">{props.subTitle}</p>
			</div>
			<Link to={props.slug} relative="path">
				<div className={`${styles.iconContainer}`}>
					<IconArrow color="#000" size="100%" rotate="0" />
				</div>
			</Link>
		</div>
	);
};
