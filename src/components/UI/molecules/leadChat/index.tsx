import {CardChat} from "@/components/UI/atoms";
import styles from "./LeadChat.module.css";

const getLeadContactChat = () => {
	return [
		{
			comments: "Lorem ipsum dolor sit amet",
		},
	];
};

export const LeadChat = () => {
	const leadContactChat = getLeadContactChat();

	return (
		<div className="row">
			<div className="col-xs-12">
				<div style={{width: "100%"}}>
					<iframe
						src="https://storage.net-fs.com/hosting/6660567/2/"
						style={{
							width: "100%",
							height: "auto",
							aspectRatio: "3 / 2",
						}}
					></iframe>
				</div>
			</div>
		</div>
	);
};
