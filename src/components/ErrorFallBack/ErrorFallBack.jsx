import { Link } from 'react-router-dom';

import { HOME } from '@router/Main/paths';

import { ErrorFallBackWrapper } from './ErrorFallBack.styled';

const ErrorFallBack = ({ error, resetErrorBoundary }) => {
  return (
    <ErrorFallBackWrapper role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <Link to={HOME}>To Home</Link>
      <button onClick={resetErrorBoundary}>Try again</button>
    </ErrorFallBackWrapper>
  );
};

export default ErrorFallBack;
