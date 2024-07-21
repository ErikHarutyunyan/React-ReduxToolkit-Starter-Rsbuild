import { Suspense, lazy } from 'react';

const LazyTemplateName = lazy(() => import('./TemplateName'));

const TemplateName = props => (
  <Suspense fallback={null}>
    <LazyTemplateName {...props} />
  </Suspense>
);

export default TemplateName;
