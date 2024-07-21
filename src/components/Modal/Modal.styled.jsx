import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleUp = keyframes`
  from { transform: scale(0.8); }
  to { transform: scale(1); }
`;

const scaleDown = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0.8); }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
  animation: ${props =>
    props.$isClosing
      ? css`
          ${fadeOut} 0.3s ease-out forwards
        `
      : css`
          ${fadeIn} 0.3s ease-out forwards
        `};
`;

export const ModalBox = styled.div`
  padding: 20px;
  background: #000;
  border-radius: 2px;
  display: inline-block;
  min-height: 300px;
  max-height: 620px;
  margin: 1rem;
  position: relative;
  min-width: 500px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  justify-self: center;
  background:
    linear-gradient(#000000, #000000) padding-box,
    linear-gradient(60deg, #ffc226, #f84119) border-box;
  border: 1px solid transparent;
  border-radius: 18px;
  overflow-y: auto;
  animation: ${props =>
    props.$isClosing
      ? css`
          ${scaleDown} 0.3s ease-out forwards
        `
      : css`
          ${scaleUp} 0.3s ease-out forwards
        `};

  --sb-track-color: #000000;
  --sb-thumb-color: #ff6f00;
  --sb-size: 5px;

  &::-webkit-scrollbar {
    width: var(--sb-size);
    height: var(--sb-size);
  }

  &::-webkit-scrollbar-track {
    background: var(--sb-track-color);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: 10px;
  }

  @supports not selector(::-webkit-scrollbar) {
    & {
      scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  color: #ffc53d;
  font-weight: 600;
  font-size: 17px;
  &:hover {
    opacity: 0.8;
  }
`;
