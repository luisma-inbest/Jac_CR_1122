interface Event {
	title: string;
	comments: string;
	lead: number;
	date: Date;
	time: Date;
}

type Action =
	| { type: "title"; value: string }
	| { type: "comments"; value: string }
	| { type: "lead"; value: number }
	| { type: "date"; value: Date }
	| { type: "time"; value: Date };

const initial: Event = {
	title: "",
	comments: "",
	lead: 0,
	date: new Date(),
	time: new Date(),
};

function reducer(state: Event, action: Action): Event {
	switch (action.type) {
		case "title":
			return { ...state, title: action.value };
		case "comments":
			return { ...state, comments: action.value };
		case "lead":
			return { ...state, lead: action.value };
		case "date":
			return { ...state, date: action.value };
		case "time":
			return { ...state, time: action.value };
		default:
			return state;
	}
}

export { reducer, initial };
