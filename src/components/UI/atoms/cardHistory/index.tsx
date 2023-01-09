import {IconArrow} from "@/assets";
import {DateFormat, DateFormatType} from "@/components/UI/atoms";

import styles from "./CardHistory.module.css";

interface Props {
	type: string;
	contactDate: Date;
	status: string;
	nextContactDate?: Date;
	comments?: string;
}

const getTitleText = (type: string): string | void => {
	switch (type) {
		case "whats":
			return "Mensaje de WhatsApp";
		case "phone":
			return "Llamada teléfonica";
	}
};

const getContactDate = (contactDate: Date) => {
	return <DateFormat
		formatType={DateFormatType.DATE_AND_TIME}
		date = {contactDate}
	/>;
};

const getNextContactDate = (nextContactDate?: Date) => {
	if (!nextContactDate) {
		return <></>;
	}

	return <DateFormat
		formatType={DateFormatType.DATE_ONLY}
		prefixText="Próximo contacto"
		date = {nextContactDate!}
	/>;
};

const getComments = (comments?: string) => {
	if (!comments) {
		return <></>;
	}

	return (
		<div className={styles.comments}>
			<span>Commentarios</span>
			<p>{comments}</p>
		</div>
	);
};

export const CardHistory = (props: Props) => {
	const titleText = getTitleText(props.type) as string;
	const contactDate = getContactDate(props.contactDate);
	const nextContactDate = getNextContactDate(props.nextContactDate);
	const comments = getComments(props.comments);

	return (
		<div className={styles.card}>
			<div className="row">
				<span className={`col-xs-6 ${styles.title}`}>{titleText}</span>
				<div className={`col-xs-6 ${styles.contactDate}`}>
					{contactDate}
				</div>
			</div>

			<div className="row">
				<span className="col-xs-6">Estado</span>
				<span className={`col-xs-6 ${styles.status}`}>{props.status}</span>
			</div>
			{nextContactDate}
			{comments}
		</div>
	);
};
