import {IconWhatsapp, IconPhone, IconCheck, IconFeedback} from "@/assets";
import {Button} from "@/components/UI/atoms";
import {RegisterActivity} from "@/components/UI/molecules";

export function textSelector(type: string) {
	switch (type) {
		case "whats":
			return "Enviar Whatsapp";
		case "feedback":
			return "Feedback";
		case "phone":
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
			return <IconPhone size="100%" color="#000" rotate="0" />;
		case "feedback":
			return <IconFeedback size="100%" color="#000" />;
		case "check":
			return <IconCheck size="100%" color="#000" />;
	}
}

export const buttonTextHandler = (type: string): string => {
	switch (type) {
		case "whats":
			return "Enviar Mensaje";
		case "phone":
			return "Lllamar ahora";
		case "check":
			return "Confirmar datos";
		case "feedback":
			return "Futura Compra";
		default:
			return "Error";
	}
};

export const dropHandler = (type: string, func?: any) => {
	return (
		<>
			<p className="p3 link no-margin">Registrar</p>
			<Button
				text={buttonTextHandler(type)}
				func={buttonHandler(type, func)}
				full={false}
			/>
		</>
	);
};

export const buttonHandler = (type: string, func?: any) => {
	switch (type) {
		case "whats":
			return whatsFunction;
		case "phone":
			return phoneFunction;
		case "check":
			return checkFunction;
		case "feedback":
			return feedbackFunction;
	}
};

export const whatsFunction = () => {
	console.log("whats");
};
export const phoneFunction = () => {
	window.open("tel:900300400");
};
export const checkFunction = () => {
	console.log("check");
};
export const feedbackFunction = () => {
	console.log("feedback");
};
