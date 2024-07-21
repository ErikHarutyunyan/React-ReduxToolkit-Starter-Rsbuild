import { Link } from 'react-router-dom';

import { NotFoundPageWrapper } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <NotFoundPageWrapper>
      This page doesn`&apos;t exist. Go <Link to="/">home</Link>
    </NotFoundPageWrapper>
  );
};

export default NotFoundPage;
