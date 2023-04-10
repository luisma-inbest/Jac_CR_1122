import { IconSells } from "@/assets";
import { CreateAgendaEvent } from "@/components/pages/sells";
import React, { useState } from "react";
import { Button, EventCard } from "@/components/UI/atoms";
import styles from "./AgendaPreview.module.css";

export const AgendaPreview = () => {
	const [activeTab, setActiveTab] = useState("today");
	const [registerEvent, setRegisterEvent] = useState(false);

	function handleRegisterEvent() {
		setRegisterEvent(!registerEvent);
	}

	return (
		<div className={styles.parentContainer}>
			<div className={`globalPadding card`}>
				<div className={styles.headerContainer}>
					<div className={`${styles.titleContainer}`}>
						<div className={styles.iconContainer}>
							<IconSells size="100%" color="black" />
						</div>
						<h2 className={styles.title}>Agenda</h2>
					</div>
					<div className={styles.buttons}>
						<button className="btn btn-primary">Ir Agenda</button>
						<button className="btn btn-primary">Agregar</button>
					</div>
				</div>

				<div className={`row ${styles.tabsContainer}`}>
					<div className={`col-xs-12 ${styles.tabs}`}>
						<p
							onClick={() => setActiveTab("today")}
							className={`p2 ${styles.tab} ${
								activeTab === "today" ? styles.active : ""
							} `}
						>
							Hoy
						</p>
						<p
							onClick={() => setActiveTab("week")}
							className={`p2 ${styles.tab} ${
								activeTab === "week" ? styles.active : ""
							}`}
						>
							Semana
						</p>
						<p
							onClick={() => setActiveTab("month")}
							className={`p2 ${styles.tab} ${
								activeTab === "month" ? styles.active : ""
							}`}
						>
							Mes
						</p>
					</div>
				</div>

				<div className={styles.events}>
					<EventCard
						title=""
						comments=""
						date={new Date().toString()}
						leadId={1}
					/>
				</div>

				<Button text="Agregar" full={true} func={handleRegisterEvent} />
			</div>

			{registerEvent ? (
				// <CreateAgendaEvent func={handleRegisterEvent} re />
				<></>
			) : (
				<></>
			)}
		</div>
	);
};
