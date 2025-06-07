import { useContext } from "react"
import { AuthContext, type AuthContexInterface } from '../contexts/AuthContext';
import { Navigate, Outlet } from "react-router";

export const PrivateRoutes = () => {
    const { state } = useContext(AuthContext) as AuthContexInterface ;
    return (state.logged)?<Outlet/>:<Navigate to='auth/login'/> ;
}
