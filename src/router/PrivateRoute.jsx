import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRouter = () => {
  const user = true;
  const location = useLocation();

  // get user info
  // const user = TokenService.getUser() || false;
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRouter;
