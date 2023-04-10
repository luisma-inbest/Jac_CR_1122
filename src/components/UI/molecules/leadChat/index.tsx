import styles from "./LeadChat.module.css";

const getLeadContactChatMock = () => {
	return {
		clientInitials: "AG",
		clientName: "Abelardo Garrido",
		lastConnection: new Date(),
		messages: [
			{
				text: "Lorem ipsum dolor sit amet",
				sentDate: new Date(),
			},
		],
	};
};

export const LeadChat = () => {
	const leadContactChat = getLeadContactChatMock();

	return (
		<div>
			<h1>Nos encontramos trabajando en esta sección</h1>
		</div>
	);
};
