
import DocsLayout from '../../components/DocsLayout';
import ModalDemo from '../../library/ui/Modal';
import { ClipboardCopy } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedDarkAtom } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from 'react-router-dom';

// ✂️ Usage Code Snippet
const modalCode = `
import React, { useState } from 'react';
import styled from 'styled-components';

const Modal = ({ children, title, isOpen, onClose }) => {
  return (
    <Overlay isOpen={isOpen}>
      <ModalContainer>
        <ModalHeader>
          <span>{title}</span>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContainer>
    </Overlay>
  );
};

const ModalDemo = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <>
      <Button onClick={toggleModal}>Open Modal</Button>
      <Modal isOpen={isModalOpen} onClose={toggleModal} title="Modal Title">
        <p>This is the modal content.</p>
        <Button onClick={toggleModal}>Close Modal</Button>
      </Modal>
    </>
  );
};
`;

// ✂️ Full Modal Component Code
const fullModalCode = `
import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';

interface ModalProps {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const Overlay = styled.div<{ isOpen: boolean }>\`
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
  opacity: \${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: \${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
\`;

const ModalContainer = styled.div\`
  background-color: #f9fafb;
  border-radius: 0.375rem;
  padding: var(--spacing-5);
  max-width: 500px;
  width: 100%;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
\`;

const ModalHeader = styled.div\`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  color: #111827;
  display: flex;
  justify-content: space-between;
  align-items: center;
\`;

const ModalBody = styled.div\`
  font-family: var(--font-primary);
  color: #111827;
  margin-top: var(--spacing-4);
\`;

const CloseButton = styled.button\`
  background: none;
  border: none;
  font-size: 1.25rem;
  color: var(--color-primary);
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-accent);
  }
\`;

const Button = styled.button\`
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
\`;

const Modal = ({ children, title, isOpen, onClose }: ModalProps) => {
  return (
    <Overlay isOpen={isOpen}>
      <ModalContainer>
        <ModalHeader>
          <span>{title}</span>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
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
`;

// ✂️ Reusable Copy Button
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    alert('Code copied to clipboard!');
  }).catch(err => {
    alert('Failed to copy: ' + err);
  });
};

const CopyButton = ({ code }: { code: string }) => (
  <button
    onClick={() => copyToClipboard(code)}
    style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      position: 'absolute',
      right: '10px',
      top: '-30px',
      display: 'inline-flex',
      alignItems: 'center',
    }}
    title="Copy code"
  >
    <ClipboardCopy />
  </button>
);

// ✨ Main Component
const ModalComp = () => {
  return (
    <DocsLayout>
      <div className="page-content" style={{ display: 'flex', gap: '2rem' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Modal Component
          </h1>

          <p style={{ fontSize: '1rem', color: '#555' }} className="pb-4">
            Use this modal component for dialog interactions, confirmations, and more.
          </p>

          <ModalDemo />

          {/* Usage Example */}
          <section style={{ marginTop: '2rem' }}>
            <h3 className="py-2">Installation</h3>
            <p><strong>1.</strong> Copy and paste the following usage code into your project:</p>
            <div style={{ position: 'relative' }}>
              <CopyButton code={modalCode} />
              <SyntaxHighlighter language="tsx" style={solarizedDarkAtom}>
                {modalCode}
              </SyntaxHighlighter>
            </div>
          </section>

          {/* Full Modal Code */}
          <section style={{ marginTop: '2rem' }}>
            <h3 className="py-2">Full Modal Component Code</h3>
            <p><strong>2.</strong> Copy this full modal component including styles:</p>
            <div style={{ position: 'relative' }}>
              <CopyButton code={fullModalCode} />
              <SyntaxHighlighter language="tsx" style={solarizedDarkAtom}>
                {fullModalCode}
              </SyntaxHighlighter>
            </div>
          </section>

          {/* Navigation */}
          <div className='flex justify-between mb-6'>
            <div className='flex justify-end mb-6'>
              <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/components/input">
                <span className='px-1'>{'<'}</span> Input
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default ModalComp;
