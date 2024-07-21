import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  border: 3px solid transparent;
  border-radius: 50%;
  border-top: 3px solid #e5c809;
  width: ${props => (props.width ? props.width : '80px')};
  height: ${props => (props.height ? props.height : '80px')};
  border-right: 3px solid #e5c809;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 1s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
