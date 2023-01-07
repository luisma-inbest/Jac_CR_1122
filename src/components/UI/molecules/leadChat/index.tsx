import {DateFormat, CardChat} from "@/components/UI/atoms";
import styles from "./LeadChat.module.css";

const getLeadContactChat = () => {
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
	const leadContactChat = getLeadContactChat();

	return (
		<div>
			<div className={`row ${styles.header}`}>
				<div className="col-xs-2">
					<span className={styles.logo}>{leadContactChat.clientInitials}</span>
				</div>
				<div className="col-xs-10">
					<div className="row">
						<div className="col-xs">
							<span className="bold black">{leadContactChat.clientName}</span>
						</div>
					</div>
					<div className="row">
						<div className="col-xs">
							<DateFormat
								prefixText="Última conexión:"
								date = {leadContactChat.lastConnection}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				Hoy

			</div>
			<div className="row">
				Mensaje

			</div>
		</div>

	)
};
