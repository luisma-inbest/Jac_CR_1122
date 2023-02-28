import React, { useEffect } from "react";
import styles from "./Agent.module.css";
import { StyledInputText } from "components/UI/atoms";
import { Link } from "react-router-dom";

import { UserAPI } from "@/apis";
import { User } from "@/models";

export const Admin = () => {
	return (
		<div className="contentVerticalPadding">
			<div className="row mb-3">
				<div className="col-xs-12">
					<Link to="/admin/users">ir a usuarios</Link>
					<br />
					<Link to="/admin/agencies">ir a agencias</Link>
					<hr />
				</div>
			</div>
		</div>
	);
};
