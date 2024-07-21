import { Suspense, lazy } from 'react';

const LazyNotFoundPage = lazy(() => import('./NotFoundPage'));

const NotFoundPage = props => (
  <Suspense fallback={null}>
    <LazyNotFoundPage {...props} />
  </Suspense>
);

export default NotFoundPage;
