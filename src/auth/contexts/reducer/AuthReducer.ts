import { type AuthAction, type AuthState, type User, AuthActionType } from "../../types/types";

export const authStateInitialState: AuthState = {
    logged: false,
    user: null
}


export interface LoginPayload {
    username: string,
    password: string,
}


// Funcion de Inicializacion
export const authStateInitFuntion = (): AuthState => {
    const userStrFromLocalStorage = localStorage.getItem('user');
    if( ! userStrFromLocalStorage ) 
        return authStateInitialState;
    return { logged: true, user: JSON.parse( userStrFromLocalStorage ) as User }
}



//! NOTA: El localStorage nunca debe llamarse en el interior de la función reducer. Ninguna función externa.
export const authReducer = ( state : AuthState = authStateInitialState, action: AuthAction ): AuthState => {

    switch( action.type ) {

        case AuthActionType.LOGIN:
            
            return { ...state,
                     logged: true,
                     user: action.payload as User
                    };
        
        case AuthActionType.LOGOUT:
            return authStateInitialState;
        
            default:
            return state;
    }
}