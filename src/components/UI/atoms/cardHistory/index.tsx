import { IconArrow } from "@/assets";

import styles from "./CardHistory.module.css";

interface Props {
	title: string;
	type: string;
	contactDate: Date;
	status: string;
	comments?: string;
}

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
	const comments = getComments(props.comments);
	const date = new Date(props.contactDate);

	return (
		<div className={styles.card}>
			<div className="row">
				<span className={`col-xs-6 ${styles.title}`}>
					{props.title}
				</span>
				<div className={`col-xs-6 ${styles.contactDate}`}>
					<p className="p3">
						{date.getDate()}-{date.getMonth()}-{date.getFullYear()}
					</p>
				</div>
			</div>

			<div className="row">
				<span className="col-xs-6">Estado: {props.status}</span>
				<span className={`col-xs-6 ${styles.status}`}>
					{props.status}
				</span>
			</div>
			{comments}
		</div>
	);
};
