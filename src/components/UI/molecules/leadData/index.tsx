import React from "react";
import styles from "./LeadData.module.css";
import {IconMail, IconPhone, carExample} from "@/assets";

export const LeadData = () => {
	const colorSecondary = getComputedStyle(
		document.documentElement
	).getPropertyValue("--secondary-text");
	return (
		<div className="row">
			<div className={`col-xs-12 ${styles.groupData}`}>
				<p className="p4 semi-bold highlight">Datos</p>
			</div>

			<div className={`col-xs-12 ${styles.leadHeader} ${styles.groupData}`}>
				<p className={`bold black`}>Jorge Salgado</p>
				<p className={`p3 ${styles.leadTemperature}`}>1er Contacto</p>
			</div>

			<div className="col-xs-12">
				<span className={`${styles.leadInfo}`}>
					<span className={`${styles.leadIcon}`}>
						<IconPhone color={colorSecondary} size="90%" rotate="0" />
					</span>
					<p className="p3">33 1786 3542</p>
				</span>
				<span className={`${styles.leadInfo}`}>
					<span className={`${styles.leadIcon}`}>
						<IconMail color={colorSecondary} size="100%" rotate="0" />
					</span>
					<p className="p3">jorge.salgadoSRCinbest.cloud</p>
				</span>
			</div>

			<div className="col-xs-12 mt-4">
				<p className="p4 semi-bold secondary">Vehiculo</p>
				<div className={`${styles.infoCar}`}>
					<div className={`${styles.carImage}`}>
						<img src={carExample} alt="" />
					</div>
					<div className={`${styles.carInfo} ${styles.groupData}`}>
						<p className="p2 semi-bold">Modelo Vehiculo</p>
						<p className="p3">Color</p>
						<p className="p3 link"> Ver Detalles </p>
					</div>
				</div>
			</div>

			<div className={`col-xs-12 mt-4 ${styles.groupData}`}>
				<p className="p4 semi-bold secondary">Detalles</p>
				<p className="p4 semi-bold highlight">Fecha y Hora</p>
				<p className="p2 ">10 de Oct del 2022 8:30hrs</p>
			</div>

			<div className={`col-xs-12 mt-4  ${styles.groupData}`}>
				<p className="p4 semi-bold secondary">Canal</p>
				<p className="p4 semi-bold highlight">Sitio Web</p>
				<p className="p4 semi-bold highlight">Nombre Landing</p>
				<p className="p3 link ">Link</p>
			</div>

			<div className={`col-xs-12 mt-4  ${styles.groupData}`}>
				<p className="p4 semi-bold secondary">Cotización</p>
				<p className="p4 semi-bold highlight">Fecha y Hora</p>
				<p className="p2 ">10 de Oct del 2022 8:30hrs</p>
				<p className="p4 semi-bold highlight"> Archivo</p>
				<p className="p3 link ">Cotización.pdf</p>
			</div>

			<div className={`${styles.empty}`}></div>
		</div>
	);
};
