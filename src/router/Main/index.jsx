import { Route } from 'react-router-dom';

import {
  About,
  Blog,
  ErrorPage,
  Home,
  Login,
  NotFoundPage,
  SingleBlog,
} from '@pages';

import { Layout } from '@/layout/Main';

import PrivateRouter from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import { ABOUT, BLOG, HOME, LOGIN, NOT_FOUND_PAGE, SINGLE_BLOG } from './paths';

export const MainRoute = () => {
  return (
    <Route path={HOME} element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path={ABOUT}
        element={<About />}
        handle={{ scrollMode: 'pathname' }}
      >
        <Route path="contacts" element={<h2>Contact </h2>} />
        <Route path="team" element={<h2>Team </h2>} />
      </Route>
      <Route path={BLOG} element={<Blog />} errorElement={<ErrorPage />} />
      <Route
        path={SINGLE_BLOG}
        element={
          <PrivateRouter>
            <SingleBlog />
          </PrivateRouter>
        }
        errorElement={<ErrorPage />}
      />

      {/* Routes only for non-authenticated users */}
      <Route element={<PublicRoute />}>
        <Route path={LOGIN} element={<Login />} />
      </Route>

      {/* <Route
        path="/profile"
        element={
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        }
      /> */}

      <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />} />
    </Route>
  );
};
