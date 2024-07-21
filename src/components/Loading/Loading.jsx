import { Spinner } from '../Spinner';
import { LoadingWrapper } from './Loading.styled';

const Loading = () => {
  return (
    <LoadingWrapper>
      <Spinner />
    </LoadingWrapper>
  );
};

export default Loading;
