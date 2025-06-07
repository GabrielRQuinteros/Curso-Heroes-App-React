import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext, type AuthContexInterface } from "../contexts";

export const PublicRoutes = () => {

    const { state } = useContext( AuthContext ) as AuthContexInterface;

    return ! state.logged?<Outlet/>: <Navigate to="/heroes" />;
}
