import { useEffect } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';

import { getPosts } from '@app/features/posts/postsActions';
import { resetPosts, selectPosts } from '@app/features/posts/postsSlice';

import BlogFilter from '@components/BlogFilter/BlogFilter';
import ErrorFallBack from '@components/ErrorFallBack/ErrorFallBack';

const Blog = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector(selectPosts);
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('post') || '';
  const latest = searchParams.has('latest');

  const startsForm = latest ? 80 : 1;

  useEffect(() => {
    dispatch(getPosts());
    return () => dispatch(resetPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <>Loading...</>;
  return (
    <div>
      <h1>Our news</h1>
      <Link
        to="/posts/new"
        style={{ margin: '1rem 0', display: 'inline-block' }}
      >
        Add new post
      </Link>
      <div>
        <ErrorBoundary
          FallbackComponent={ErrorFallBack}
          onReset={() => {
            setSearchParams();
          }}
          resetKeys={[posts]}
        >
          <BlogFilter
            postQuery={postQuery}
            latest={latest}
            setSearchParams={setSearchParams}
          />
        </ErrorBoundary>
      </div>
      <ul>
        {posts
          .filter(
            post => post.title.includes(postQuery) && post.id >= startsForm,
          )
          .map(post => (
            <li key={post.id}>
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Blog;
