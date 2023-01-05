import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import {NavBar, Header} from "@/components/UI/organisms";
import {Path} from "@/components/UI/atoms";
import styles from "./Main.module.css";

export const Main = () => {
	const [menu, setMenu] = useState(false);

	if (window.location.pathname === "/seller") {
		console.log("entro");
	}

	const navHandler = () => {
		setMenu(!menu);
	};

	return (
		<>
			<div className="fullPage container">
				{/* */}
				<Header navHandler={navHandler} />
				{/* */}

				<NavBar state={menu} navHandler={navHandler} />
				<main className="row">
					<div className={`col-xs-12 ${styles.mobilePadding}`}>
						{/* Aqui Va el contenido*/}
						<Path />
						<Outlet />
					</div>
					{/* */}
				</main>
			</div>
		</>
	);
};
