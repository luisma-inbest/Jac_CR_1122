import React from "react";
import styles from "./Header.module.css";
import {
	Logo,
	logoHorizontal,
	user,
	IconMenu,
	IconNotification,
	IconCalendar,
} from "@/assets";
import { useNavigate, useNavigation } from "react-router-dom";

interface Props {
	navHandler: () => void;
}

export const Header = (props: Props) => {
	const navigate = useNavigate();

	return (
		<header className="row">
			<span className={styles.logo} onClick={() => props.navHandler()}>
				<IconMenu size="80%" color="#fff" />
			</span>

			<span className={styles.logo} onClick={() => props.navHandler()}>
				<Logo color="#fff" size="60%" />
			</span>

			<span className={styles.logo} onClick={() => navigate("agenda")}>
				{/* <IconNotification size="80%" color="#fff" /> */}
				<IconCalendar size="60%" color="#fff" />
			</span>
		</header>
	);
};
