import {IconArrow} from "@/assets";

import styles from "./CardHistory.module.css";

interface Props {
	type: string;
    contactDate?: Date;
    status: string;
    nextContactDate?: Date;
    comments?: string;
}

const getTitleText = (type: string): string | void => {
    switch (type) {
        case 'whats':
            return 'Mensaje de WhatsApp';
        case 'phone':
            return 'Llamada teléfonica';
    }
};

const getFormattedDate = (date: Date): string => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return date.toLocaleDateString("es-MX", options);
};

const getContactDate = (contactDate?: Date) => {
    if (!contactDate) {
        return <></>;
    }

    const dateString = getFormattedDate(contactDate);

    return <span className={`col-xs-6 ${styles.contactDate}`}>{dateString}</span>;
};

const getNextContactDate = (nextContactDate?: Date) => {
    if (!nextContactDate) {
        return <></>;
    }

    const dateString = getFormattedDate(nextContactDate);

    return <span>Próximo contacto {dateString}</span>;
};

const getComments = (comments?: string) => {
    if (!comments) {
        return <></>;
    }

    return <div className={styles.comments}>
        <span>Commentarios</span>
        <p>{comments}</p>
    </div>;
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
                {contactDate}
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
