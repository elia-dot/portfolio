import React from 'react';
import styled from 'styled-components';
import { GiCheckMark } from 'react-icons/gi';

const ModalBg = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background: rgba(0, 0, 0, 0.9);
  border-radius: 1em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1.5em;
`;

const CheckMarkCircle = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.3em;
  font-size: 1.5em;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5em;
  transition: border-width 3s linear;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;

const SuccessModal = () => {
  return (
    <ModalBg>
      <Modal>
        {' '}
        <CheckMarkCircle>
          <GiCheckMark />
        </CheckMarkCircle>
        <Text>Message sent succhssfuly</Text>
      </Modal>
    </ModalBg>
  );
};

export default SuccessModal;
