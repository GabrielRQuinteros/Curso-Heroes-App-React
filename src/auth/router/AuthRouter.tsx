import { Navigate, Route } from 'react-router';
import { AuthLayout, LoginPage } from '../pages';
export const AuthRouter = () => {
  return (
     <Route path="auth" element={<AuthLayout />}>
       <Route path='' element={<Navigate to={"login"} />} />
       <Route path="login" element={<LoginPage/>} ></Route>
       <Route path="*"  element={<Navigate to={"login"} />} ></Route>
     </Route>
  );
}
