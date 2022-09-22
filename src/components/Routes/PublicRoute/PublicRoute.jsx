import { Navigate, Outlet } from 'react-router-dom';
import { isAuth } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const PublicRoute = () => {
  const userLogin = useSelector(isAuth);

  if (userLogin) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};

export default PublicRoute;
