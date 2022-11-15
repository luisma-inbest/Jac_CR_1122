import React from "react";
import {Link, useNavigate} from "react-router-dom";

export const Home = () => {
	let navigate = useNavigate();
	navigate("/login");
	return (
		<div>
			<h1>Jac CRM</h1>
			<Link to="/register">Registrarse</Link>
			<br />
			<Link to="/login">iniciar Sesión</Link>
			<div className="row">
				<div className="col-md-6">
					<h1>Dashboard</h1>
				</div>

				<div className="col-md-6">
					<h1>Administrador</h1>
				</div>
			</div>
		</div>
	);
};
