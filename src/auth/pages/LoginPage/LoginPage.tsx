import { useContext } from "react";
import { useNavigate, type NavigateFunction } from "react-router"
import { AuthContext, type AuthContexInterface } from "../../contexts";

export const LoginPage = () => {

  const navigate: NavigateFunction = useNavigate();
  const { login } = useContext( AuthContext ) as AuthContexInterface;
  
  const onLogin = () => {
    login('Gabriel');
    
    navigate( '/heroes', {
      replace: true
    } );
  }

  return (
    <div className="container mt-5">
        <h1>Login</h1>
        <hr />
        <button className="btn btn-primary"
                onClick={onLogin}>
            Login
        </button>
    </div>
  )
}
