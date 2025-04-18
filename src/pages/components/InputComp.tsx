import { useState } from 'react';
import DocsLayout from '../../components/DocsLayout';
import DocsTitle from '../../components/DocsTitle';
import Input from '../../library/ui/Input';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedDarkAtom } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ClipboardCopy } from 'lucide-react';
import { Link } from 'react-router-dom';

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    alert('Text copied to clipboard!');
  }).catch(err => {
    alert('Failed to copy text: ' + err);
  });
};

const inputCode = `
import React from 'react';
import styled from 'styled-components';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
}

const StyledInput = styled.input<InputProps>\`
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  padding: var(--spacing-3) var(--spacing-5);
  border: 2px solid transparent;
  border-radius: 0.375rem;
  transition: all 0.3s ease;
  width: 100%;

  /* Default colors */
  background-color: var(--color-light);
  color: var(--color-dark);

  /* Focus States */
  &:focus {
    outline: 2px solid var(--primary-color);
    border-color: var(--color-primary);
  }

  /* Disabled state */
  &:disabled {
    background-color: var(--color-light);
    color: var(--color-dark);
    cursor: not-allowed;
  }
\`;

const Input = ({ value, onChange, disabled, placeholder }: InputProps) => {
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
};

export default Input;
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
        top: '-30px',
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      <ClipboardCopy />
    </button>
  );
};

const InputPage = () => {
  const [copyText, setCopyText] = useState('');

  const [value,setValue] =useState('');

  return (
    <DocsLayout>
      <div className="page-content" style={{ display: 'flex', gap: '2rem' }}>
        <div style={{ flex: 1 }}>
          <DocsTitle title="Input" />
          <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Input Box
          </h1>
          <p style={{ fontSize: '1rem', color: '#555'}} className="pb-2">
            Use this custom Input Component in your project.
          </p>

          <h1 className="text-lg font-semibold pb-2">Text Input</h1>
          <Input value={value} onChange={(e) => {setValue(e.target.value)}} placeholder="Enter text" />

          <p>{copyText}</p>

          <section>
            <h3 className="py-2">Installation</h3>
            <p> <strong>1. </strong>Copy and paste the following code into your project.</p>
            <div style={{ position: 'relative' }}>
              <CopyButton code={inputCode} />
              <SyntaxHighlighter language="tsx" style={solarizedDarkAtom}>
                {inputCode}
              </SyntaxHighlighter>
              <p className='my-3'>2. Update the import paths to match your project setup.  </p>
            </div>
            <div className='flex justify-between  mb-6'>
                    <div className='flex justify-end mb-6'>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/components/button">
                        <span className='px-1'>{'<'}</span>  Button
                        </Link>

                    </div>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/components/form">
                       Form <span className='px-1'>{'>'}</span>
                        </Link>
                    </div>
          </section>
        </div>

        <div onClick={()=>setCopyText(copyText)} style={{ width: '100px', visibility: 'hidden' }}></div>
      </div>
    </DocsLayout>
  );
};

export default InputPage;
