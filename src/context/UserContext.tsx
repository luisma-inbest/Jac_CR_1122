import React, {createContext, useState, ReactNode, type Dispatch} from "react";
import {ContextChilds} from "@/models/contextChilds";

// type of user
export type UserType = {
	id: number;
	name: string;
	permissions: string[];
} | null;
// user methods
// este se usa principalmente en las llamadas para definir el tipado
export type UserContextType = {
	User: UserType;
	SetUser: (value: UserType) => void;
};

//export const UserContext = createContext<userContextInterface | null>(null);

const UserContext = createContext({});

const INITIAL_USER: UserType = {
	id: 0,
	name: "string",
	permissions: [""],
};

export const UserProvider = ({children}: ContextChilds) => {
	const [User, SetUser] = useState<UserType>(null);

	return (
		<UserContext.Provider value={{User, SetUser}}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;
