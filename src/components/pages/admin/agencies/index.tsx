import React, {useEffect, useState} from "react";
import {Tabs} from "@/components/templates";
import {Button, Loader} from "@/components/UI/atoms";
import {useNavigate} from "react-router-dom";
import {AgenciesTable} from "@/components/UI/organisms";

import styles from "./Agencies.module.css";
import {AgencyRowProps} from "@/models";

export const Agencies = () => {
	const [agencies, setAgencies] = useState<AgencyRowProps[]>([]);
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("http://localhost:3001/agency")
			.then((response) => response.json())
			.then((data) => {
				console.log(data.agencies);
				setAgencies(data.agencies);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return (
			<div className="row">
				<div className={`col-xs-12 ${styles.loaderContainer}`}>
					<Loader />
				</div>
			</div>
		);
	}

	return (
		<div className="row">
			<div className={`col-xs-12 ${styles.tableContainer}`}>
				<AgenciesTable agencies={agencies} />
			</div>
			<div className="col-xs-12 mt-5">
				<Button
					text="Registrar nueva agencia"
					full={true}
					func={() => navigate("/admin/agencies/create")}
				/>
			</div>
		</div>
	);
};
