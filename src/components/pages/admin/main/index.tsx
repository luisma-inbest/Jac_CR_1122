import React, {useEffect} from "react";
import styles from "./Agent.module.css";
import {StyledInputText} from "components/UI/atoms";
import {Link} from "react-router-dom";

import {UserAPI} from "@/apis";
import {User} from "@/models";

export const Admin = () => {
	useEffect(() => {
		const user: User = {
			email: "alex170396@gmail.com",
			password: "12345",
			first_name: "Test",
			last_name: "superboss",
			birth_date: "1996-03-17",
			nickname: "10alexm",
			gender: "H",
			userRole: "bdc",
			AgencyId: "1",
			position: "TestPos",
			userEmails: [
				{email: "alex170396@gmail.com"},
				{email: "alejandro.valenzuela@inbest.cloud"},
			],
			userPhones: [{phone: "3318353827"}, {phone: "3310995757"}],
		};
		UserAPI.create(user);
		// UserAPI.getAll();
	}, []);

	return (
		<div className="contentVerticalPadding">
			<div className="row mb-3">
				<div className="col-xs-12">
					<h1 className="semi-bold">Admin</h1>
					<Link to="/admin/users">ir a usuarios</Link>
					<br />
					<Link to="/admin/agencies">ir a agencias</Link>
					<hr />
				</div>
			</div>
		</div>
	);
};
