import {CreateContext} from "react";

export const context = CreateContext();

export function AuthProvider({children}) {
	const user = {
		login: true,
	};
	return <context.Provider value={{user}}>{children}</context.Provider>;
}
