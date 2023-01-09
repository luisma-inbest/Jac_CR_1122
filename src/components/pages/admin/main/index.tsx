import React from "react";
import styles from "./Agent.module.css";
import {StyledInputText} from "components/UI/atoms";
import {Link} from "react-router-dom";

export const Admin = () => {
	return (
		<div className="contentVerticalPadding">
			<div className="row mb-3">
				<div className="col-xs-12">
					<h1 className="semi-bold">Admin</h1>
					<Link to="/admin/users">ir a usuarios</Link>
					<hr />
				</div>
			</div>
		</div>
	);
};
