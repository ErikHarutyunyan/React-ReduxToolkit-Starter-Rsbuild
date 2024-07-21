import { Blog, Home, SingleBlog } from '@pages';

import { Layout } from '@/layout/Main';
import { NotFoundPage } from '@/pages';
import PrivateRoute from '../PrivateRoute';
import { BLOG, HOME, NOT_FOUND_PAGE, SINGLE_BLOG } from './paths';

export const MainRoute = [
  {
    path: HOME,
    element: <Layout />,
    children: [
      {
        path: HOME,
        element: <Home />,
      },
      {
        path: BLOG,
        element: <Blog />,
      },
      {
        path: SINGLE_BLOG,
        element: (
          <PrivateRoute>
            <SingleBlog />
          </PrivateRoute>
        ),
      },
      {
        path: NOT_FOUND_PAGE,
        element: <NotFoundPage />,
      },
    ],
  },
];
