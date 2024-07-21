// import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const user = false;
  //   const { userInfo } = useSelector((state) => state.user);
  return user ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoute;
