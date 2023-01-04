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

const getContactDate = (contactDate?: Date) => {
    if (!contactDate) {
        return <></>;
    }

    const dateString = contactDate.toString();

    return <span>{dateString}</span>;
};

const getNextContactDate = (nextContactDate?: Date) => {
    if (!nextContactDate) {
        return <></>;
    }

    const dateString = nextContactDate.toString();

    return <span>{dateString}</span>;
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
    const title = getTitleText(props.type) as string;
    const contactDate = getContactDate(props.contactDate);
    const nextContactDate = getNextContactDate(props.nextContactDate);
    const comments = getComments(props.comments);

	return (
		<div className={styles.card}>
			<span>{title}</span>
            {contactDate}
            <div>
                <span>Estado</span>
                <span className={styles.status}>{props.status}</span>
            </div>
            {nextContactDate}
            {comments}
		</div>
	);
};
