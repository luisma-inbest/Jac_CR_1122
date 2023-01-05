import {CardChat} from "@/components/UI/atoms";
import styles from "./LeadChat.module.css";

const getLeadContactChat = () => {
    return [{
        comments: 'Lorem ipsum dolor sit amet',
    },];
}

export const LeadChat = () => {
	const leadContactChat = getLeadContactChat();

	return (
		<div className="row">
			<div className="col-xs-12" >
			<span className= "logo"> AG </span>
				<p className={`bold black`}>Abelardo Garrido</p>
				<p className={`p3 ${styles.leadTemperature}`}>Ultima cónexion: 10 de oct 2022</p>
			</div>



		</div>

	)
};
