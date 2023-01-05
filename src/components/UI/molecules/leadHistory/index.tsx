import {CardHistory} from "@/components/UI/atoms";
import styles from "./LeadHistory.module.css";

const getLeadContactHistory = () => {
    return [{
        type: 'whats',
        contactDate: new Date(),
        status: 'Fallido',
        comments: 'Lorem ipsum dolor sit amet',
    }, {
        type: 'phone',
        status: '???',
        nextContactDate: new Date(),
    }];
}

export const LeadHistory = () => {
    const leadContactHistory = getLeadContactHistory();

	return (
		<div className={styles.tab}>
			<p className="p3 secondary bold">1er Contacto</p>
            {
                leadContactHistory.map(leadContact => {
                    return <CardHistory
                        type = { leadContact.type }
                        contactDate = { leadContact.contactDate }
                        status = { leadContact.status }
                        comments = { leadContact.comments }
                        nextContactDate = { leadContact.nextContactDate }
                    />
                })
            }
		</div>
	);
};
