import { User } from "@/models";

type Action =
	| { type: "email"; value: string }
	| { type: "password"; value: string }
	| { type: "userEmails"; value: string[] }
	| { type: "userPhones"; value: string[] }
	| { type: "firstName"; value: string }
	| { type: "lastName"; value: string }
	| { type: "gender"; value: string }
	| { type: "nickname"; value: string }
	| { type: "lastName"; value: string }
	| { type: "gender"; value: string }
	| { type: "nickname"; value: string }
	| { type: "birthDate"; value: string }
	| { type: "agencies"; value: string }
	| { type: "userRole"; value: string }
	| { type: "position"; value: string }
	| { type: "state"; value: string };

const initial: User = {
	userId: "",
	email: "",
	password: "",
	userEmails: [],
	userPhones: [],
	firstName: "",
	lastName: "",
	gender: "",
	nickname: "",
	birthDate: "",
	agencies: [],
	userRole: "",
	position: "",
	state: "",
};

function reducer(state: User, action: Action): User {
	switch (action.type) {
		case "email":
			return { ...state, email: action.value };
		case "password":
			return { ...state, password: action.value };
		case "userEmails":
			return {
				...state,
				userEmails: action.value,
			};
		case "userPhones":
			return {
				...state,
				userPhones: action.value,
			};
		case "firstName":
			return { ...state, firstName: action.value };
		case "lastName":
			return { ...state, lastName: action.value };
		case "gender":
			return { ...state, gender: action.value };
		case "nickname":
			return { ...state, nickname: action.value };
		case "birthDate":
			return { ...state, birthDate: action.value };
		case "agencies":
			return { ...state, agencies: [...state.agencies, action.value] };
		case "userRole":
			return { ...state, userRole: action.value };
		case "position":
			return { ...state, position: action.value };
		case "state":
			return { ...state, state: action.value };
		default:
			return state;
	}
}

export { reducer, initial };
