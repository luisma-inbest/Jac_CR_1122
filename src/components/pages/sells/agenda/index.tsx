import React, { useContext, useState } from "react";

import styles from "./Agenda.module.css";
import { Button, EventCard, Loader } from "@/components/UI/atoms";
import { CreateAgendaEvent } from "../createAgendaEvent";
import { AgendaAPI } from "@/apis/APIAgenda";
import { useQuery } from "react-query";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";
import UserContext, { UserContextType } from "@/context/UserContext";

export const Agenda = () => {
	const [activeTab, setActiveTab] = useState("day");
	const [registerEvent, setRegisterEvent] = useState(false);
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;
	const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
	const { User } = useContext(UserContext) as UserContextType;

	const { isLoading, data, isError, error } = useQuery({
		queryKey: [`events`, [activeTab]],
		queryFn: () => AgendaAPI.getAll(String(User!.id), activeTab, date),
		onError: (error) => {
			createAlert(
				"error",
				"Error",
				"Hubo un error al obtener los eventos"
			);
		},

		// staleTime: 5 * (60 * 1000), // 5 mins
		// cacheTime: 10 * (60 * 1000), // 10 mins
	});

	function handleRegisterEvent() {
		setRegisterEvent(!registerEvent);
	}

	if (isLoading) {
		return (
			<div className="row">
				<div className={`col-xs-12 loaderContainer`}>
					<Loader />
				</div>
			</div>
		);
	}

	if (isError) {
		return (
			<div className="row">
				<div className={`col-xs-12 loaderContainer`}>
					<h1>Hubo un error</h1>
				</div>
			</div>
		);
	}

	return (
		<div className={`row`}>
			<div className={`col-xs-12 ${styles.mainContainer}`}>
				<div className={`col-xs-12 mb-1 ${styles.tabs}`}>
					<p
						onClick={() => setActiveTab("day")}
						className={`p2 ${styles.tab} ${
							activeTab === "day" ? styles.active : ""
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
					{data.map((event: any, index: number) => {
						return (
							<EventCard
								key={index}
								title={event.title}
								comments={event.comments}
								date={event.date}
								leadId={event.leadId}
							/>
						);
					})}
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
