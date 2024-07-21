// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const user = false;
  //   const { userInfo } = useSelector((state) => state.user);
  return user ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
