import React, { useState } from "react";

import styles from "./Agenda.module.css";
import { Button, EventCard } from "@/components/UI/atoms";
import { CreateAgendaEvent } from "../createAgendaEvent";

export const Agenda = () => {
	const [activeTab, setActiveTab] = useState("today");
	const [registerEvent, setRegisterEvent] = useState(false);

	function handleRegisterEvent() {
		setRegisterEvent(!registerEvent);
	}

	return (
		<div className={`row`}>
			<div className={`col-xs-12 ${styles.mainContainer}`}>
				<div className={`col-xs-12 mb-1 ${styles.tabs}`}>
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
					<Button
						text="nuevo"
						full={false}
						func={handleRegisterEvent}
					/>
				</div>

				<div className={styles.events}>
					<EventCard />
					<EventCard />
					<EventCard />
					<EventCard />
					<EventCard />
					<EventCard />
					<EventCard />
					<EventCard />
					<EventCard />
					<EventCard />
					<EventCard />
				</div>
			</div>

			<div className="col-xs-12 mt-2">
				<Button
					text="Crear nuevo evento"
					full={true}
					func={handleRegisterEvent}
				/>
			</div>

			{registerEvent ? (
				<CreateAgendaEvent func={handleRegisterEvent} />
			) : (
				<></>
			)}
		</div>
	);
};
