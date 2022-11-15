import React from "react";
import {Link} from "react-router-dom";
import styles from "./MenuItem.module.css";
import {IconAdd, IconHome, IconUpload, IconList, IconSettings} from "@/assets";
import {NavBar} from "@/components/UI/organisms";

interface Props {
	icon: string;
	text: string;
	route: string;
	state: string;
}

export const MenuItem = (props: Props) => {
	const [colorIcon, setColorIcon] = React.useState("#000");
	var state = props.state === "active" ? true : false;

	const iconSelector = (text: string) => {
		switch (text) {
			case "home":
				return <IconHome color={colorIcon} size={20} />;
			case "add":
				return <IconAdd color={colorIcon} size={20} />;
			case "upload":
				return <IconUpload color={colorIcon} size={20} />;
			case "list":
				return <IconList color={colorIcon} size={20} />;
			case "settings":
				return <IconSettings color={colorIcon} size={20} />;
		}
	};

	return (
		<>
			{state ? (
				<Link
					to={props.route}
					className={`${styles.menuItemContainer} ${styles.active}`}
				>
					{iconSelector(props.icon)}
					<p>{props.text}</p>
				</Link>
			) : (
				<Link to={props.route} className={`${styles.menuItemContainer} `}>
					{iconSelector(props.icon)}
					<p>{props.text}</p>
				</Link>
			)}
		</>
	);
};
