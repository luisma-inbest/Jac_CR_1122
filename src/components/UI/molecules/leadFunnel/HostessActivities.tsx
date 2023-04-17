import React, { useContext, useEffect, useState } from "react";
import { Button, CardFunnel, Loader, StyledSelect } from "../../atoms";
import { IconFeedback } from "@/assets";
import { BasicBody } from "./Activities";
import styles from "./LeadFunnel.module.css";
import { LeadAPI, UserAPI } from "@/apis";
import { useQuery } from "react-query";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";
import UserContext, { UserContextType } from "@/context/UserContext";
import { LeadDataType } from "@/models";

interface Props {
	leadData: LeadDataType;
}

export const HostessActivities = (props: Props) => {
	const [asignedSeller, setAsignedSeller] = useState<any>(0);
	const [dataSellers, setDataSellers] = useState<any>([]);
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;
	const { User } = useContext(UserContext) as UserContextType;

	function handleReassign() {
		console.log("asignar a:", asignedSeller);

		LeadAPI.editInfo(String(props.leadData.id), {
			data: { UserId: asignedSeller },
		})
			.then((res) => {
				console.log("res:", res);
				createAlert("success", "Lead reasignado", "");
			})
			.catch((err) => {
				console.log("err:", err);
				createAlert("error", "Hubo un error", "");
			});
	}

	useEffect(() => {
		UserAPI.filterSellers(String(User!.AgencyId), [
			"adviser-digital",
			"adviser-floor",
			"adviser-hybrid",
		])
			.then((res) => {
				console.log("sellers:", res);
				setDataSellers(res);
			})
			.catch((err) => {
				console.log("sellers err:", err);
			});
	}, []);

	return (
		<>
			<p className="p3 secondary bold">Reasignar Lead</p>
			<CardFunnel
				mainText="Reasignar"
				icon={<IconFeedback size="100%" color="#000" />}
				cardContent={
					<div className={styles.none}>
						<StyledSelect
							customType="secondary"
							value={asignedSeller}
							onChange={(e) => {
								setAsignedSeller(e.target.value);
							}}
						>
							<option value={0} disabled>
								-- Asignar Vendedor --
							</option>
							{dataSellers.map((seller: any) => {
								return (
									<option value={seller.id} key={seller.id}>
										{seller.nickname}
									</option>
								);
							})}
						</StyledSelect>
						<Button
							text="Reasignar"
							func={handleReassign}
							full={true}
						/>
					</div>
				}
			/>
		</>
	);
};
