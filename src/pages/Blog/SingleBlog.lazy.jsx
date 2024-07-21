import { lazy, Suspense } from 'react';

const LazySingleBlog = lazy(() => import('./SingleBlog'));

const SingleBlog = props => (
  <Suspense fallback={null}>
    <LazySingleBlog {...props} />
  </Suspense>
);

export default SingleBlog;
