import React, {useState, useContext} from "react";
import styles from "./NavBar.module.css";
import {user} from "@/assets";
import {Menu} from "@/models/nav/menu";
import {DropdownMenu, MenuItem} from "@/components/UI/atoms";
import {LogoFull, IconNotification, IconCross} from "@/assets";
import UserContext, {UserContextType} from "@/context/UserContext";

interface Props {
	state: boolean;
	navHandler: () => void;
}

export const NavBar = (props: Props) => {
	const {User, SetUser} = useContext(UserContext) as UserContextType;

	const data = Menu[0];
	var count = 0;

	function handleStatus(e: any) {
		if (e.target.id === "out") {
			props.navHandler();
		}
	}

	return (
		<div
			id="out"
			className={`${
				props.state ? styles.navContainerOpened : styles.navContainerClosed
			}`}
			onClick={(e) => handleStatus(e)}
		>
			<nav className={props.state ? styles.opened : styles.closed}>
				<ul className={styles.mainMenu}>
					<li>
						<ul>
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
								<div className={`${styles.navUser} mt-4`}>
									<img src={user} alt="" className={`${styles.userPhoto} `} />
									<div className={styles.userInfo}>
										<h5 className="semi-bold white">{User?.name}</h5>
										<p className="p3 white">correoSRChotmail.com</p>
									</div>
								</div>
							</li>
							{data.map((item: any) => {
								return (
									<li key={item.data.pos}>
										<DropdownMenu
											text={item.data.text}
											route={item.data.route}
											icon={item.data.icon}
											submenu={item.submenu}
											subitems={item.subitems}
											funct={props.navHandler}
										/>
									</li>
								);
							})}
						</ul>
					</li>
					<li>
						<MenuItem
							state="unactive"
							text="Configuración"
							route="./settings"
							icon="settings"
							dropped={false}
							func={() => console.log("simple function")}
							submenu={false}
						/>
					</li>
				</ul>
			</nav>
		</div>
	);
};
