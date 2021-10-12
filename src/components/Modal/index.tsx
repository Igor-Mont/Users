import React, { Dispatch, SetStateAction } from 'react';
import ReactDOM from 'react-dom';

import { Container } from './styles';

type User = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  login: {
    uuid: string;
  };
  registered: {
    date: string;
    age: number;
  };
  email: string;
  phone: string;
  cell: string;
  picture: {
    medium: string;
  };
};

type ModalProps = {
  user: User;
  isOpen: boolean;
  closeModal: Dispatch<SetStateAction<boolean>>;
};

function Modal({ user, isOpen, closeModal }: ModalProps): React.ReactPortal {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Container>
      <main>
        <div className="content-top">
          <h1>{user.name.first}</h1>
          <img src={user.picture.medium} alt="" />
        </div>
        <div className="infos">
          <h3>
            Email: <span>{user.email}</span>{' '}
          </h3>
          <h3>
            Phone: <span>{user.phone}</span>{' '}
          </h3>
        </div>
        <button type="button" onClick={() => closeModal(false)}>
          CLOSE
        </button>
      </main>
    </Container>,
    document.getElementById('modal-root'),
  );
}

export default Modal;
