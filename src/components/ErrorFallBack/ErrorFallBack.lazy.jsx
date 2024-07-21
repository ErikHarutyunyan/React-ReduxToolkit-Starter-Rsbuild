import { lazy, Suspense } from 'react';

const LazyErrorFallBack = lazy(() => import('./ErrorFallBack'));

const ErrorFallBack = props => (
  <Suspense fallback={null}>
    <LazyErrorFallBack {...props} />
  </Suspense>
);

export default ErrorFallBack;
