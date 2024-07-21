// import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ role, children }) => {
  //  const { userInfo } = useSelector((state) => state.user);
  const location = useLocation();
  const userInfo = true;
  return !userInfo || userInfo?.userRole !== role ? (
    children
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
