import React, { Dispatch, SetStateAction } from 'react';
import ReactDOM from 'react-dom';

import { Container } from './styles';

type ModalProps = {
  isOpen: boolean;
  closeModal: Dispatch<SetStateAction<boolean>>;
};

function Modal({ isOpen, closeModal }: ModalProps): React.ReactPortal {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Container>
      <main>
        <h1>Modal</h1>
        <button type="button" onClick={() => closeModal(false)}>
          CLOSE
        </button>
      </main>
    </Container>,
    document.getElementById('modal-root'),
  );
}

export default Modal;
