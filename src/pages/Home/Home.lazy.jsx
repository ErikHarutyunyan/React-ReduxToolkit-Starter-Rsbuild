import { Suspense, lazy, memo } from 'react';

const LazyHome = lazy(() => import('./Home'));

const Home = props => (
  <Suspense fallback={null}>
    <LazyHome {...props} />
  </Suspense>
);

export default memo(Home);
