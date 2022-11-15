import React from "react";
import styles from "./Header.module.css";
import {Logo, logoHorizontal, user, IconMenu, IconNotification} from "@/assets";

interface Props {
	navHandler: () => void;
}

export const Header = (props: Props) => {
	return (
		<header className="row">
			<span className={styles.logo} onClick={() => props.navHandler()}>
				<IconMenu size="80%" color="#fff" />
			</span>

			<span className={styles.logo} onClick={() => props.navHandler()}>
				<Logo color="#fff" size="60%" />
			</span>

			<span className={styles.logo} onClick={() => props.navHandler()}>
				<IconNotification size="80%" color="#fff" />
			</span>
		</header>
	);
};
