import { lazy, Suspense } from 'react';

const LazyBlog = lazy(() => import('./Blog'));

const Blog = props => (
  <Suspense fallback={null}>
    <LazyBlog {...props} />
  </Suspense>
);

export default Blog;
