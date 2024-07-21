import { SpinnerWrapper } from './Spinner.styled';

const Spinner = ({ width = '', height = '' }) => {
  return <SpinnerWrapper $width={width} $height={height} />;
};

export default Spinner;
