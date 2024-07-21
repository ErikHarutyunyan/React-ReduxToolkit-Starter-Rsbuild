import { lazy, Suspense } from 'react';

const LazyErrorPage = lazy(() => import('./ErrorPage'));

const ErrorPage = props => (
  <Suspense fallback={null}>
    <LazyErrorPage {...props} />
  </Suspense>
);

export default ErrorPage;
