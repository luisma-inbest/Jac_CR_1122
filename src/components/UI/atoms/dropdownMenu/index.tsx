import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {MenuItem} from "@/components/UI/atoms/";
import styles from "./DropdownMenu.module.css";

interface Props {
	icon: string;
	text: string;
	route: string;
	submenu: boolean;
	subitems: any;
}

export const DropdownMenu = (props: Props) => {
	const [dropped, setDropped] = useState(false);
	const navigate = useNavigate();

	function handleMenu() {
		props.submenu ? setDropped(!dropped) : navigate(props.route);
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
				className={`${styles.dropdownContent} ${dropped ? styles.show : ""}`}
			>
				{props.subitems.map((item: any) => {
					return (
						<Link key={item.pos} to={item.route}>
							{item.text}
						</Link>
					);
				})}
			</div>
		</div>
	);
};
