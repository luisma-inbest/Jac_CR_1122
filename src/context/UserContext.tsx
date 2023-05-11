import React, {
	createContext,
	useState,
	ReactNode,
	type Dispatch,
} from "react";
import { ContextChilds } from "@/models/contextChilds";

// type of user
export type UserType = {
	id: number;
	name: string;
	email: string;
	permissions: string[];
	agencies: string[];
	AgencyId: string;
} | null;
// user methods
// este se usa principalmente en las llamadas para definir el tipado
export type UserContextType = {
	User: UserType;
	SetUser: (value: UserType) => void;
	test: () => void;
};

//export const UserContext = createContext<userContextInterface | null>(null);

const UserContext = createContext({});

export const UserProvider = ({ children }: ContextChilds) => {
	const [User, SetUser] = useState<UserType>(null);

	function test() {
		console.log("test desde el userprovider");
	}

	return (
		<UserContext.Provider value={{ User, SetUser, test }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;
