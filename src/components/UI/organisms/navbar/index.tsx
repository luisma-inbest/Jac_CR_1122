import React, {useState} from "react";
import styles from "./NavBar.module.css";
import {logoVertical, user} from "@/assets";
import {MenuItem} from "@/components/UI/atoms";
import data from "@/assets/adminMenu.json";

interface Props {
	state: boolean;
	navHandler: () => void;
}

export const NavBar = (props: Props) => {
	const [item0, setItem0] = useState("active");
	const [item1, setItem1] = useState("unactive");
	const [item2, setItem2] = useState("unactive");
	const [item3, setItem3] = useState("unactive");
	const Items = [item0, item1, item2, item3];
	var count = 0;

	function activeTab(tab: number) {
		setItem0("unactive");
		setItem1("unactive");
		setItem2("unactive");
		setItem3("unactive");
		console.log(tab);
		switch (tab) {
			case 0:
				setItem0("active");
				break;
			case 1:
				setItem1("active");
				break;
			case 2:
				setItem2("active");
				break;
			case 3:
				setItem3("active");
				break;
		}
	}

	return (
		<div
			className={`${
				props.state ? styles.navContainerOpened : styles.navContainerClosed
			}`}
			onClick={() => props.navHandler()}
		>
			<nav className={props.state ? styles.opened : styles.closed}>
				<ul className={styles.mainMenu}>
					<li>
						<ul>
							<li className={`mb-3 center-xs ${styles.userContainer}`}>
								<img
									src={user}
									alt=""
									className={styles.userPhoto}
									onClick={() => props.navHandler()}
								/>
								<div className={styles.userInfo}>
									<h5>Nombre</h5>
									<h6>correo</h6>
								</div>
							</li>
							{data.map((item: any) => {
								return (
									<li key={item.text} onClick={() => activeTab(item.pos)}>
										<MenuItem
											state={Items[count++]}
											text={item.text}
											route={item.route}
											icon={item.icon}
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
						/>
					</li>
				</ul>
			</nav>
		</div>
	);
};
