import React, { useContext, useEffect, useReducer, useState } from "react";
import styles from "./FilterWindow.module.css";
import {
	StyledInputText,
	Button,
	Input,
	StyledInputSubmit,
	ButtonFields,
	StyledSelect,
	StyledInputDate,
} from "@/components/UI/atoms";
import { IconCross } from "@/assets";
import { Lead } from "@/models";
import { useMutation, useQuery } from "react-query";
import { LeadAPI, LeadOriginAPI, ProductAPI, UserAPI } from "@/apis";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";
import UserContext, { UserContextType } from "@/context/UserContext";

interface Props {
	func: () => void;
	fields: any;
	dispatch: any;
}

export const FilterWindow = (props: Props) => {
	const [page, setPage] = useState(1);
	const [dataSellers, setDataSellers] = useState<any>([]);
	const [products, setProducts] = useState<any>([]);
	const [isLoading, setIsLoading] = useState(true);
	const { User, SetUser } = useContext(UserContext) as UserContextType;
	const red = getComputedStyle(document.documentElement).getPropertyValue(
		"--red"
	);
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;

	function formHandler(e: any) {
		e.preventDefault();
		console.log("buscar");
		props.dispatch({
			type: "refresh",
			value: !props.fields.refresh,
		});
		console.log(props.fields);
		props.func();
	}

	async function getData() {
		try {
			const users = await UserAPI.filterSellers(String(User!.AgencyId), [
				"coordinator",
				"bdc",
				"hostess",
				"adviser-digital",
				"adviser-floor",
				"adviser-hybrid",
			]);
			console.log("users:", users);
			setDataSellers(users);
			try {
				const products = await ProductAPI.getAll(0);
				console.log(products);
				setProducts(products);
				setIsLoading(false);
			} catch (error) {
				console.log(error);
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		// dispatch({ type: "AgencyId", value: Number(User!.AgencyId) });
		getData();
	}, []);

	if (isLoading)
		return (
			<div id="back" className={`${styles.window}`}>
				<div className={`content-side ${styles.card}`}>
					<h5 className="bold mb-0">Filtrar leads</h5>
					<p>Loading...</p>
				</div>
			</div>
		);

	return (
		<div id="back" className={`${styles.window}`}>
			<div className={`content-side ${styles.card}`}>
				<h5 className="bold mb-0">Filtrar leads</h5>
				<span className={styles.iconContainer} onClick={props.func}>
					<IconCross color={red} size="100%" />
				</span>
				<form action="" onSubmit={(e) => e.preventDefault()}>
					{/* {User?.permissions.includes("admin") && ( */}
					{["admin", "manager", "coordinator", "hostess"].some((el) =>
						User?.permissions.includes(el)
					) && (
						<StyledSelect
							customType="secondary"
							value={props.fields.UserId}
							onChange={(e: any) => {
								props.dispatch({
									type: "UserId",
									value: e.target.value,
								});
								console.log(e.target.value);
							}}
						>
							<option value="">-- Asignar Usuario --</option>
							{dataSellers.map((seller: any) => {
								return (
									<option value={seller.id} key={seller.id}>
										{seller.nickname}
									</option>
								);
							})}
						</StyledSelect>
					)}

					<label className="p2 mr-1">Inicio</label>
					<StyledInputDate
						customType="secondary"
						onChange={(e) =>
							props.dispatch({
								type: "startDate",
								value: e.target.value,
							})
						}
					/>
					<br />
					<label className="p2 mr-1">Fin</label>
					<StyledInputDate
						customType="secondary"
						onChange={(e) =>
							props.dispatch({
								type: "endDate",
								value: e.target.value,
							})
						}
					/>

					<StyledInputSubmit
						value="Buscar"
						customType="primary"
						onClick={formHandler}
					/>
				</form>
			</div>
		</div>
	);
};
