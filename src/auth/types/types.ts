export enum AuthActionType {
    LOGIN = '[Auth] Login',
    LOGOUT = '[Auth] Logout'
}

export interface AuthAction {
    type: AuthActionType,
    payload: unknown
}

export interface User {
    id: string,
    username: string,
    email: string,
    name: string
}

export interface AuthState {
    logged: boolean,
    user: User | null
}