import { CardHistory } from "@/components/UI/atoms";
import { LeadActivityType } from "@/models";
import styles from "./LeadHistory.module.css";
import CurrentLeadContext, {
	CurrentLeadContextType,
} from "@/context/currentLeadContext/CurrentLeadContext";
import { useContext } from "react";

interface Props {}

export const LeadHistory = (props: Props) => {
	const { CurrentLead, DispatchCurrentLead } = useContext(
		CurrentLeadContext
	) as CurrentLeadContextType;
	return (
		<div className={styles.tab}>
			{/* <p className="p3 secondary bold">1er Contacto</p> */}
			{CurrentLead.LeadActivities.map((leadContact, index) => {
				// console.log(leadContact.date);
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
