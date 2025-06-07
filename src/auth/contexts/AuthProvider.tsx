import React, { useReducer } from "react"
import { AuthContext, type AuthContexInterface } from "./AuthContext"
import { authReducer, authStateInitFuntion } from "./reducer/AuthReducer"
import { AuthActionType, type AuthAction, type User } from "../types/types";

export const AuthProvider = ( { children }: { children: React.ReactNode } ) => {

  const [state, dispatcher] = useReducer( authReducer, null , authStateInitFuntion);
  
  const login =( username= '' ) => {
    const user: User = {
                              id: 'ABC',
                              username: username,
                              email: 'mailtest@gmail.com',
                              name: 'Gabriel-del-AuthContext'
                          };
    
    const loginAction : AuthAction = { type: AuthActionType.LOGIN, payload: user  }
    localStorage.setItem( 'user', JSON.stringify(user) );
    dispatcher(loginAction);
  }

  const logout =() => {
      const logoutAction : AuthAction = { type: AuthActionType.LOGOUT, payload: null  }
      dispatcher(logoutAction);
      localStorage.removeItem('user');
  }


  const authContext: AuthContexInterface = {
                                              state: state,
                                              login: login,
                                              logout: logout,
                                            };
                                            
  return (
        <>
            <AuthContext.Provider value={authContext} >
                { children }
            </AuthContext.Provider>
        </>
  )
}
