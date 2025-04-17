import  { ReactNode, useState } from 'react';
import styled from 'styled-components';

interface ModalProps {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const ModalContainer = styled.div`
  background-color: #f9fafb; /* soft light gray */
  border-radius: 0.375rem;
  padding: var(--spacing-5);
  max-width: 500px;
  width: 100%;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15); /* soft dark shadow for light mode */

  .dark & {
    background-color: #ffffff; /* bright in dark mode */
    box-shadow: 0px 8px 20px rgba(255, 255, 255, 0.08); /* gentle glow in dark mode */
    color: #111827;
  }
`;

const ModalHeader = styled.div`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  color: #111827;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .dark & {
    color: #111827; /* same dark text for white background in dark mode */
  }
`;

const ModalBody = styled.div`
  font-family: var(--font-primary);
  color: #111827;
  margin-top: var(--spacing-4);

  .dark & {
    color: #111827;
  }
`;


const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.25rem;
  color: var(--color-primary);
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-accent);
  }
`;

const Button = styled.button`
  padding: var(--spacing-3) var(--spacing-5);
  background-color: var(--color-primary);
  color: var(--color-accent);
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  font-family: var(--font-primary);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-dark);
  }
`;

const Modal = ({ children, title, isOpen, onClose }: ModalProps) => {
  return (
    <Overlay isOpen={isOpen}>
      <ModalContainer className="dark"> {/* Automatically uses dark styles if dark class is applied globally */}
        <ModalHeader>
          <span>{title}</span>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <ModalBody className="dark">{children}</ModalBody>
      </ModalContainer>
    </Overlay>
  );
};

const ModalDemo = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Button onClick={toggleModal}>Open Modal</Button>
      <Modal isOpen={isModalOpen} onClose={toggleModal} title="Modal Title">
        <p>This is the modal content. You can add any content you like here!</p>
        <Button onClick={toggleModal}>Close Modal</Button>
      </Modal>
    </div>
  );
};

export default ModalDemo;
