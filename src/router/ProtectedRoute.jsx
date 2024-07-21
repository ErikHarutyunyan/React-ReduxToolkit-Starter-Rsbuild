// import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ role }) => {
  //  const { userInfo } = useSelector((state) => state.user);
  const location = useLocation();
  const userInfo = true;
  return !userInfo || userInfo?.userRole !== role ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
