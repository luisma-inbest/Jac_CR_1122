import React, { useContext, useEffect, useState } from "react";
import styles from "./LeadData.module.css";
import { IconMail, IconPhone, carExample } from "@/assets";
import { LeadDataType } from "@/models";
import UserContext, { UserContextType } from "@/context/UserContext";
import CurrentLeadContext, {
	CurrentLeadContextType,
} from "@/context/currentLeadContext/CurrentLeadContext";

interface Props {}

export const LeadData = (props: Props) => {
	const { User } = useContext(UserContext) as UserContextType;
	const [permissions, setPermissions] = useState<boolean>(false);
	const colorSecondary = getComputedStyle(
		document.documentElement
	).getPropertyValue("--secondary-text");

	const [product, setProduct] = useState<any>({});
	const [isProduct, setIsProduct] = useState<boolean>(false);
	const { CurrentLead, DispatchCurrentLead } = useContext(
		CurrentLeadContext
	) as CurrentLeadContextType;

	const pickPhaseColor = (phase: string) => {
		switch (phase) {
			case "subasta":
				return styles.subasta;
			case "1er-contacto":
				return styles.leadCold;
			case "seguimiento":
				return styles.leadWarm;
			case "en-cierre":
				return styles.leadHot;
			default:
				return;
		}
	};
	useEffect(() => {
		//validar producto
		if (CurrentLead.LeadInterests.length > 0) {
			console.log("hay producto...");
			setIsProduct(true);
			let currentProduct =
				CurrentLead.LeadInterests[CurrentLead.LeadInterests.length - 1];
			setProduct({
				imageUrl: currentProduct.Product.imageUrl,
				name: currentProduct.Product.name,
				model: currentProduct.Product.model,
				transmission: currentProduct.Product.transmission,
				color: currentProduct.ProductColor.slug,
			});
		}

		if (
			CurrentLead.leadPhase.slug === "subasta" &&
			(User?.permissions.includes("coordinator") ||
				User?.permissions.includes("bdc") ||
				User?.permissions.includes("adviser-digital") ||
				User?.permissions.includes("adviser-floor") ||
				User?.permissions.includes("adviser-hybrid") ||
				User?.permissions.includes("adviser-telefonica") ||
				User?.permissions.includes("adviser-telefonica"))
		) {
			setPermissions(false);
		} else {
			setPermissions(true);
		}
	}, []);

	return (
		<div className="row">
			<div className={`col-xs-12 ${styles.groupData}`}>
				<p className="p4 semi-bold highlight">Datos</p>
			</div>

			<div
				className={`col-xs-12 ${styles.leadHeader} ${styles.groupData}`}
			>
				<p className={`bold black`}>{CurrentLead.leadName}</p>
				<p
					className={`p3 ${styles.leadTemperature} ${pickPhaseColor(
						CurrentLead.leadPhase.slug
					)}`}
				>
					{CurrentLead.leadPhase.description || ""}
				</p>
			</div>

			<div className="col-xs-12">
				<span className={`${styles.leadInfo}`}>
					<span className={`${styles.leadIcon}`}>
						<IconPhone
							color={colorSecondary}
							size="90%"
							rotate="0"
						/>
					</span>
					<p className="p3">
						{permissions ? CurrentLead.leadPhones[0].phone : "-"}
					</p>
				</span>
				<span className={`${styles.leadInfo}`}>
					<span className={`${styles.leadIcon}`}>
						<IconMail
							color={colorSecondary}
							size="100%"
							rotate="0"
						/>
					</span>
					<p className="p3">
						{permissions ? CurrentLead.leadEmails[0].email : "-"}
					</p>
				</span>
			</div>

			{isProduct ? (
				<div className="col-xs-12 mt-4">
					<p className="p4 semi-bold secondary">Vehiculo</p>
					<div className={`${styles.infoCar}`}>
						<div className={`${styles.carImage}`}>
							<img src={product.imageUrl} alt="" />
						</div>
						<div
							className={`${styles.carInfo} ${styles.groupData}`}
						>
							<p className="p2 semi-bold">
								{product.name} {product.model}{" "}
								{product.transmission}
							</p>
							<p className="p3">{product.color}</p>
							{/* <p className="p3 link"> Ver Detalles </p> */}
						</div>
					</div>
					<div className="mt-3">
						<p className="p4 semi-bold highlight">
							Información Venta
						</p>
						<p className="p2">{CurrentLead.buyType}</p>
						<p className="p2">
							{CurrentLead.LeadInterests[0].quantity} unidad(es)
						</p>
					</div>
				</div>
			) : (
				<div className="mt-2">
					<p className="p2">No hay un producto seleccionado...</p>
				</div>
			)}

			<div className={`col-xs-12 mt-4 ${styles.groupData}`}>
				<p className="p4 semi-bold secondary">Detalles</p>
				<p className="p4 semi-bold highlight">Fecha y Hora</p>
				<p className="p2 ">{CurrentLead.createdAt.toString()}</p>
			</div>

			<div className={`col-xs-12 mt-4  ${styles.groupData}`}>
				<p className="p4 semi-bold secondary">Canal</p>
				<p className="p4 semi-bold highlight">
					{CurrentLead.LeadOrigin.slug}
				</p>
			</div>

			<div className={`col-xs-12 mt-4  ${styles.groupData}`}>
				<p className="p4 semi-bold secondary">Asesor</p>
				<p className="p4 semi-bold highlight">{CurrentLead.UserId}</p>
			</div>

			{/* <div className={`col-xs-12 mt-4  ${styles.groupData}`}>
				<p className="p4 semi-bold secondary">Cotización</p>
				<p className="p4 semi-bold highlight">Fecha y Hora</p>
				<p className="p2 ">{String(props.lead.createdAt)}</p>
				<p className="p4 semi-bold highlight"> Archivo</p>
				<p className="p3 link ">Cotización.pdf</p>
			</div> */}

			<div className={`${styles.empty}`}></div>
		</div>
	);
};
