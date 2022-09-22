import { Navigate, Outlet } from 'react-router-dom';
import { isAuth } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const userLogin = useSelector(isAuth);
  if (!userLogin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
