import { Agency } from "@/models";

type Action = { type: "assignmentType"; value: string };

const initial: Agency = {
	name: "",
	businessName: "",

	logo: "",
	logoDark: "",
	urlSite: "",
	url360View: "",
	urlGoogleMaps: "",
	agencySocialMedia: "",

	street: "",
	exteriorNumber: "",
	interiorNumber: "",
	state: "",
	transferCode: "",
	city: "",
	suburb: "",
	postalCode: "",
	municipality: "",
	deputation: "",

	manager: "",
	phone: "",
	email: "",

	service: false,
	active: false,

	assignmentType: "",
};

function reducer(state: Agency, action: Action): Agency {
	switch (action.type) {
		case "assignmentType":
			return { ...state, assignmentType: action.value };

		default:
			return state;
	}
}

export { reducer, initial };
