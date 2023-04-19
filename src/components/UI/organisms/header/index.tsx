import React, { useContext } from "react";
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
import { handleMainPage } from "@/models/routes&permissions";
import UserContext, { UserContextType } from "@/context/UserContext";

interface Props {
	navHandler: () => void;
}

export const Header = (props: Props) => {
	const navigate = useNavigate();
	const { User } = useContext(UserContext) as UserContextType;

	return (
		<header className="row">
			<span className={styles.logo} onClick={() => props.navHandler()}>
				<IconMenu size="80%" color="#fff" />
			</span>

			<span
				className={styles.logo}
				onClick={() => navigate(handleMainPage(User!.permissions[1]))}
			>
				<Logo color="#fff" size="60%" />
			</span>

			<span className={styles.logo} onClick={() => navigate("agenda")}>
				{/* <IconNotification size="80%" color="#fff" /> */}
				<IconCalendar size="60%" color="#fff" />
			</span>
		</header>
	);
};
