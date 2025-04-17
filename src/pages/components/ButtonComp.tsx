import { useState } from 'react';
import DocsLayout from '../../components/DocsLayout';
import DocsTitle from '../../components/DocsTitle';
import Button from '../../library/ui/Button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedDarkAtom, solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ClipboardCopy } from 'lucide-react';

import { Link } from 'react-router-dom';


const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    alert('Text copied to clipboard!');
  }).catch(err => {
    alert('Failed to copy text: ' + err);
  });
};


const buttonCode = `
interface ButtonProps {
  children: ReactNode;
  size?: 'sm' | 'base' | 'lg';
  variant?: 'filled' | 'outline';
  onClick?: () => void;
  disabled?: boolean;
}

import styled from 'styled-components';

const StyledButton = styled.button\`
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  text-align: center;
  cursor: pointer;
  padding: var(--spacing-3) var(--spacing-5);
  border: 2px solid transparent;
  border-radius: 0.375rem;
  transition: all 0.3s ease;

  /* Default colors */
  background-color: #333; /* Dark background like VS theme */
  color: #f1f1f1; /* Light text color */

  /* Hover effect */
  &:hover {
    background-color: #0066cc; /* Blue background on hover */
    color: white; /* Change text to white on hover */
  }

  /* Focus effect */
  &:focus {
    outline: 2px solid #007acc; /* Light blue outline */
    background-color: #1e1e1e; /* Slightly darker background on focus */
  }

  /* Disabled state */
  &:disabled {
    background-color: #555; /* Greyed-out background when disabled */
    color: #888; /* Lighter text when disabled */
    cursor: not-allowed; /* Change cursor when disabled */
  }

\`;

const Button = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
`;

const CopyButton = ({ code }: { code: string }) => {
  return (
    <button
      onClick={() => copyToClipboard(code)}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        position: 'absolute',
        right: '10px',
        top: '-30px', // Adjust positioning above the code block
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      <ClipboardCopy />
    </button>
  );
};

const ButtonPage = () => {
  const [copyText, setCopyText] = useState('');
  return (
    <DocsLayout>
      <div className="page-content" style={{ display: 'flex', gap: '2rem' }}>

        <div style={{ flex: 1 }}>
          <DocsTitle title="Button" />
          <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Button
          </h1>
          <p style={{ fontSize: '1rem', color: '#555'}} className='pb-2'>
            Use these custom Button or Button Components in your project.
          </p>

          <h1 className='text-lg font-semibold pb-2'>Primary Button</h1>
          <Button>Demo</Button>
          <p>{copyText}</p>
          <section className='mb-4s'>
            <h3 className='py-2'>Installation</h3>
            <p> <strong>1. </strong>Copy and paste the following code into your project.</p>
            <div style={{ position: 'relative' }}>
              <CopyButton code={buttonCode} />
              <SyntaxHighlighter language="jsx" style={solarizedDarkAtom}>
                {buttonCode}
              </SyntaxHighlighter>
            </div>
            <p className='mb-3'>2. Update the import paths to match your project setup.  </p>
          </section>
          <div className='flex justify-between  mb-6'>
                    <div className='flex justify-end mb-6'>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/docs/letterspacing">
                        <span className='px-1'>{'<'}</span>  Letter Spacing
                        </Link>

                    </div>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/components/input">
                       Input <span className='px-1'>{'>'}</span>
                        </Link>
                    </div>
        </div>

        <div style={{ width: '100px', visibility: 'hidden' }}></div>
      </div>
    </DocsLayout>
  );
};

export default ButtonPage;
