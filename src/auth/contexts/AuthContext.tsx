import { createContext } from "react";
import type { AuthState } from "../types/types";

export interface AuthContexInterface {
    state: AuthState;
    login: (username: string) => void,
    logout: () => void,

}

export const AuthContext = createContext<AuthContexInterface | null>(null);