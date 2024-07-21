import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { logout } from '@app/features/user/userSlice';

import TokenService from '@services/token.service';

import router from './router';

function App() {
  const user = TokenService.getUser() || null;
  const dispatch = useDispatch();
  if (user) {
    if (dayjs.unix(user.RefreshTokenExpiresUtc).diff(dayjs()) < 1) {
      dispatch(logout());
    }
  }
  return <RouterProvider router={router} />;
}

export default App;
