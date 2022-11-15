import React, {useState} from "react";
import styles from "./Main.module.css";
import {NavBar, Header} from "@/components/UI/organisms";
import {CardReview} from "@/components/UI/molecules";
import {Outlet} from "react-router-dom";
import {Agent} from "@/components/pages";

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
					<div className={`col-sm-12`}>
						{/* Aqui Va el contenido*/}
						<Outlet />
					</div>
					{/* */}
				</main>
			</div>
		</>
	);
};
