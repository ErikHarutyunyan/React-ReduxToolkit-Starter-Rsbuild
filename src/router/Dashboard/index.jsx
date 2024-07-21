import { Login } from '@pages';

import { Layout } from '@/layout/Main';
import { About } from '@/pages';
import { ABOUT, HOME, LOGIN } from '../Main/paths';
import PublicRoute from '../PublicRoute';

export const DashboardRoute = [
  {
    path: HOME,
    element: <Layout />,
    children: [
      {
        path: ABOUT,
        element: <About />,
      },
      {
        path: LOGIN,
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
    ],
  },
];
