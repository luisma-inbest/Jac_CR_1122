import React, { useEffect, useState } from "react";
import { Tabs } from "@/components/templates";
import { UsersTable } from "@/components/UI/organisms/";
import { Button, Loader } from "@/components/UI/atoms";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { UserAPI } from "@/apis";

import styles from "./AgencyUsers.module.css";

export interface UserRowProps {
	name: string;
	position: string;
	area: string;
	manager: string;
	email: string;
	role: string;
}

interface Props {
	agencyId: string;
}

export const AgencyUsers = (props: Props) => {
	console.log(`user/?AgencyId=${props.agencyId}`);
	const navigate = useNavigate();
	const { isLoading, data, isError, error } = useQuery({
		queryKey: ["users"],
		queryFn: () => UserAPI.getAllByAgency(props.agencyId),
		// staleTime: 5 * (60 * 1000), // 5 mins
		// cacheTime: 10 * (60 * 1000), // 10 mins
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
				<UsersTable users={data} />
			</div>
			<div className="col-xs-12 mt-5">
				<Button
					text="Registrar nuevo usuario"
					full={true}
					func={() => navigate("/admin/register")}
				/>
			</div>
		</div>
	);
};
