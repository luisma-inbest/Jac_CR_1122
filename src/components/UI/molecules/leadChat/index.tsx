import { DateFormat, CardChat, DateFormatType } from "@/components/UI/atoms";
import styles from "./LeadChat.module.css";

const getLeadContactChatMock = () => {
	return {
		clientInitials: 'AG',
		clientName: 'Abelardo Garrido',
		lastConnection: new Date(),
		messages: [{
			text: 'Lorem ipsum dolor sit amet',
			sentDate: new Date(),
		}],
	};
}

export const LeadChat = () => {
	const leadContactChat = getLeadContactChatMock();

	return (
		<div>
			<div className={`row ${styles.header}`}>
				<div className={`col-xs-2 ${styles.circle}`}>
					<span className={styles.logo}>{leadContactChat.clientInitials}</span>
				</div>
				<div className="col-xs-10">
					<div className="row">
						<div className={`col-xs ${styles.client}`}>
							<span className="bold black">{leadContactChat.clientName}</span>
						</div>
					</div>
					<div className="row">
						<div className="col-xs">
							<DateFormat
								formatType={DateFormatType.DATE_AND_TIME}
								prefixText="Última conexión:"
								date={leadContactChat.lastConnection}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className={`col-xs ${styles.daySeparator}`}>
					<span>Hoy</span>
				</div>
			</div>
				<CardChat
					message="Lorem ipsum dolor sit amet"
					sentDate={new Date()}
				/>
			

		</div>

	)
};
