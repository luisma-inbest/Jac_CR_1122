import React, { useState, useContext } from "react";
import { user } from "@/assets";
import { Menu } from "@/models/nav/menu";
import {
	MenuItem,
	Dropdown,
	StyledSelect,
	Loader,
} from "@/components/UI/atoms";
import { DropdownMenu } from "@/components/UI/molecules";
import { LogoFull, IconNotification, IconCross } from "@/assets";
import UserContext, { UserContextType } from "@/context/UserContext";
import { logOut } from "@/auth/AuthFuncs";
import { Navigate, useNavigate } from "react-router-dom";
import { AgencyAPI } from "@/apis";
import { useQuery } from "react-query";

import styles from "./NavbarHeader.module.css";

interface Props {
	navHandler: () => void;
}

export const NavbarHeader = (props: Props) => {
	const { User, SetUser } = useContext(UserContext) as UserContextType;
	const navigate = useNavigate();

	function handleProfile() {
		navigate("/profile");
	}

	return (
		<li className={`mb-3 center-xs ${styles.navHeader}`}>
			<div className={styles.navTop}>
				<div
					className={styles.crossIcon}
					onClick={() => props.navHandler()}
				>
					<IconCross size="70%" color="#fff" />
				</div>
				<LogoFull color="#fff" size="70%" />
				<IconNotification color="#fff" size="70%" />
			</div>
			<div
				className={`${styles.navUser} mt-4`}
				onClick={() => handleProfile()}
			>
				<img src={user} alt="" className={`${styles.userPhoto} `} />
				<div className={styles.userInfo}>
					<h5 className="semi-bold white">{User?.name}</h5>
					<p className="p3 white">{User?.email}</p>
				</div>
			</div>
		</li>
	);
};
