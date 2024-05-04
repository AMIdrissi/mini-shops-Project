import { createContext, useContext } from "react";
import ButtonForMenu from "./UI/buttons/ButtonForMenu";

// possible fetching throu here maybe ??

export const UserContext = createContext(null);

export function useUserContext() {
    const user = useContext(UserContext);
    // behaviour in case of undefined
    return user;
}