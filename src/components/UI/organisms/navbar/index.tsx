import React, { useState, useContext, useRef, useEffect } from "react";
import styles from "./NavBar.module.css";
import { Menu } from "@/models/nav/menu";
import {
	MenuItem,
	StyledSelect,
	Loader,
	NavbarHeader,
} from "@/components/UI/atoms";
import { DropdownMenu } from "@/components/UI/molecules";
import { LogoFull, IconNotification, IconCross } from "@/assets";
import UserContext, { UserContextType } from "@/context/UserContext";
import { logOut } from "@/auth/AuthFuncs";
import { Navigate, useNavigate } from "react-router-dom";
import { AgencyAPI } from "@/apis";
import { useQuery } from "react-query";

interface Props {
	state: boolean;
	navHandler: () => void;
}

export const NavBar: React.FunctionComponent<Props> = (props) => {
	const { User, SetUser } = useContext(UserContext) as UserContextType;
	const navigate = useNavigate();
	const [currentAgency, setCurrentAgency] = useState(User?.AgencyId!);

	const submenus = Menu[0];

	const { isLoading, data, isError, error } = useQuery({
		queryKey: ["agencies"],
		queryFn: AgencyAPI.getAll,
		// queryFn: () => UserAPI.getAgencies(User!.id),
		staleTime: 5 * (60 * 2500), // 25 mins
		cacheTime: 10 * (60 * 3000), // 30 mins
	});

	function handleStatus(e: any) {
		if (e.target.id === "out") {
			props.navHandler();
		}
	}

	function handleLogOut() {
		logOut();
		SetUser(null);
		navigate("/login");
	}

	const handleDistributorSelection = (distributor: any) => {
		setCurrentAgency(distributor.target.value);
		SetUser({
			...User!,
			AgencyId: distributor.target.value,
		});
	};

	if (isLoading) {
		return <></>;
	}

	//TODO: imprimir info de usuario
	// console.log(User);

	return (
		<div
			id="out"
			className={`${
				props.state
					? styles.navContainerOpened
					: styles.navContainerClosed
			}`}
			onClick={(e) => handleStatus(e)}
		>
			<nav className={props.state ? styles.opened : styles.closed}>
				<ul className={styles.mainMenu}>
					<li>
						<ul>
							<NavbarHeader navHandler={props.navHandler} />
							<li className={styles.agencieSelect}>
								<StyledSelect
									customType="secondary"
									value={currentAgency}
									onChange={(e) =>
										handleDistributorSelection(e)
									}
									disabled={false}
								>
									<option value="" disabled>
										Agencia
									</option>
									//TODO: ajustar data
									{data.map((e: any, index: any) => {
										return (
											<option key={e.id} value={e.id}>
												{e.name}
											</option>
										);
									})}
								</StyledSelect>
							</li>
							{submenus.map((item: any, index) => {
								let role = User!.permissions[1];

								if (item.permissions.includes(role)) {
									return (
										<li key={index}>
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
								} else {
									console.log(
										"no tiene permisos a:" + item.data.text
									);
									return;
								}
							})}
						</ul>
					</li>
					<ul>
						{/* <li>
							<MenuItem
								state="unactive"
								text="Configuración"
								route="./settings"
								icon="settings"
								dropped={false}
								func={() => console.log("simple function")}
								submenu={false}
							/>
						</li> */}
						<li>
							<MenuItem
								state="unactive"
								text="Cerrar Sesión"
								route="./settings"
								icon="settings"
								dropped={false}
								func={() => handleLogOut()}
								submenu={false}
							/>
						</li>
					</ul>
				</ul>
			</nav>
		</div>
	);
};
