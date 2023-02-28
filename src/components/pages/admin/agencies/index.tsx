import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Tabs } from "@/components/templates";
import { Button, Loader } from "@/components/UI/atoms";
import { useNavigate } from "react-router-dom";
import { AgenciesTable } from "@/components/UI/organisms";

import styles from "./Agencies.module.css";
import { AgencyAPI } from "@/apis";

export const Agencies = () => {
	const navigate = useNavigate();
	const { isLoading, data, isError, error } = useQuery({
		queryKey: ["agencies"],
		queryFn: AgencyAPI.getAll,
		staleTime: 5 * (60 * 1000), // 5 mins
		cacheTime: 10 * (60 * 1000), // 10 mins
	});

	if (isLoading) {
		return (
			<div className="row">
				<div className={`col-xs-12 loaderContainer`}>
					<Loader />
				</div>
			</div>
		);
	}

	return (
		<div className="row">
			<div className={`col-xs-12 ${styles.tableContainer}`}>
				<AgenciesTable agencies={data} />
			</div>
			<div className="col-xs-12 mt-2">
				<Button
					text="Registrar nueva agencia"
					full={true}
					func={() => navigate("/admin/agencies/create")}
				/>
			</div>
		</div>
	);
};
