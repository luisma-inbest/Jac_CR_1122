import {IconWhatsapp, IconPhone, IconCheck, IconFeedback} from "@/assets";
import {Button} from "@/components/UI/atoms";

export function textSelector(type: string) {
	switch (type) {
		case "whats":
			return "Enviar Whatsapp";
		case "phone":
			return "Feedback";
		case "feedback":
			return "Llamada Telefónica";
		case "check":
			return "Confirmación de datos";
	}
}
export function iconSelector(type: string) {
	switch (type) {
		case "whats":
			return <IconWhatsapp size="100%" color="#000" />;
		case "phone":
			return <IconPhone size="100%" color="#000" />;
		case "feedback":
			return <IconFeedback size="100%" color="#000" />;
		case "check":
			return <IconCheck size="100%" color="#000" />;
	}
}

export const buttonTextHandler = (type: string) => {
	switch (type) {
		case "whats":
			return "Enviar Mensaje";
		case "phone":
			return "Lllamar ahora";
	}
};

export const dropHandler = (drop: boolean, type: string) => {
	if (drop) {
		return (
			<>
				<p className="p3 link no-margin">Omitir</p>
				<Button text={buttonTextHandler(type)} func={buttonHandler} />
			</>
		);
	}
};

export const buttonHandler = () => {
	console.log("button activated..");
};
