import { lazy, Suspense } from 'react';

const LazyUnauthorized = lazy(() => import('./Unauthorized'));

const Unauthorized = props => (
  <Suspense fallback={null}>
    <LazyUnauthorized {...props} />
  </Suspense>
);

export default Unauthorized;
