import { CardHistory } from "@/components/UI/atoms";
import { LeadActivityType } from "@/models";
import styles from "./LeadHistory.module.css";

interface Props {
	activities: LeadActivityType[];
}

export const LeadHistory = (props: Props) => {
	return (
		<div className={styles.tab}>
			{/* <p className="p3 secondary bold">1er Contacto</p> */}
			{props.activities.map((leadContact, index) => {
				console.log(leadContact.date);
				return (
					<CardHistory
						key={index}
						type={leadContact.leadActivityType}
						contactDate={leadContact.date}
						status={leadContact.status}
						comments={leadContact.comments}
						title={leadContact.title}
					/>
				);
			})}
		</div>
	);
};
