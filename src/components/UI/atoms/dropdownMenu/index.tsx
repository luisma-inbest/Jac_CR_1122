import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {MenuItem} from "@/components/UI/atoms/";
import styles from "./DropdownMenu.module.css";
import "./customDrops.css";

interface Props {
	icon: string;
	text: string;
	route: string;
	submenu: boolean;
	subitems: any;
	funct: any;
}

export const DropdownMenu = (props: Props) => {
	const [dropped, setDropped] = useState(false);
	const navigate = useNavigate();

	function handleMenu() {
		props.submenu ? setDropped(!dropped) : navigate(props.route);
	}

	function navHandler() {
		console.log("navHandler");
	}

	return (
		<div className={`${styles.dropdown} mb-2`}>
			<MenuItem
				state="unactive"
				text={props.text}
				route={props.route}
				icon={props.icon}
				func={handleMenu}
				submenu={props.submenu}
				dropped={dropped}
			/>
			<div
				className={`${styles.dropdownContent} ${dropped ? "show" : ""}`}
				id={props.icon}
			>
				{props.subitems.map((item: any) => {
					return (
						<Link
							key={item.pos}
							to={item.route}
							className={`p2 main-color ${styles.subItem}`}
							onClick={props.funct}
						>
							{item.text}
						</Link>
					);
				})}
			</div>
		</div>
	);
};
