import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export const Home = () => {
	let navigate = useNavigate();

	useEffect(() => {
		navigate("/login");
	}, []);

	return (
		<div>
			<h1>Jac CRM </h1>
		</div>
	);
};
