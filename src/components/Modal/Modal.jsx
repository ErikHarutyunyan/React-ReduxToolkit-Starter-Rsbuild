import { useEffect, useState } from 'react';

import { createPortal } from 'react-dom';

import { CloseButton, ModalBox, ModalWrapper } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ isOpen, onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };
  useEffect(() => {
    if (!isOpen && isClosing) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);
  if (!isOpen && !isClosing) return null;
  return createPortal(
    <ModalWrapper $isClosing={isClosing}>
      <ModalBox $isClosing={isClosing}>
        <CloseButton onClick={handleClose}>X</CloseButton>
        {children}
      </ModalBox>
    </ModalWrapper>,
    modalRoot,
  );
};

export default Modal;
