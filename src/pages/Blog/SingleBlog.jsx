import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { getPostId } from '@app/features/posts/postsActions';
import { resetPost, selectPosts } from '@app/features/posts/postsSlice';

const SingleBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector(selectPosts);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goHome = () => navigate('/posts', { replace: true });

  useEffect(() => {
    dispatch(getPostId(id));
    return () => dispatch(resetPost());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div>
      {post && (
        <>
          <button type="button" onClick={goBack}>
            Go back
          </button>
          <button type="button" onClick={goHome}>
            Go Home
          </button>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};
export default SingleBlog;
