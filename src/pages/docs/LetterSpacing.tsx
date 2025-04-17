import React from 'react';
import DocsLayout from '../../components/DocsLayout';
import DocsTitle from '../../components/DocsTitle';
import { Link } from 'react-router-dom';

const letterSpacingUtilities = [
  'letter-spacing-tight',
  'letter-spacing-normal',
  'letter-spacing-wide',
];

const lineHeightUtilities = [
  'leading-tight',
  'leading-normal',
  'leading-loose',
];

const LetterSpacingDocs = () => {
  return (
    <DocsLayout>
      <div className="page-content">
        <DocsTitle title="Letter Spacing & Line Height Utilities" />
        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Letter Spacing & Line Height
        </h1>
        <p style={{ fontSize: '1rem', color: '#555', marginBottom: '2rem' }}>
          These utility classes help you adjust letter spacing and line height in your typography system.
        </p>

        {/* Letter Spacing */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
            Letter Spacing
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {letterSpacingUtilities.map((cls) => (
              <div
                key={cls}
                className={cls}
                style={{
                  border: '1px dashed #ccc',
                  padding: '1rem',
                  borderRadius: '8px',
                  backgroundColor: '#fff',
                  fontSize: '1rem',
                }}
              >
                <div style={{ fontFamily: 'monospace', fontSize: '0.875rem', color: '#888' }}>{cls}</div>
                <div>Example of letter spacing utility</div>
              </div>
            ))}
          </div>
        </section>

        {/* Line Height */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
            Line Height
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {lineHeightUtilities.map((cls) => (
              <div
                key={cls}
                className={cls}
                style={{
                  border: '1px dashed #ccc',
                  padding: '1rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  maxWidth: '400px',
                }}
              >
                <div style={{ fontFamily: 'monospace', fontSize: '0.875rem', color: '#888' }}>{cls}</div>
                <div>
                  This is a block of text that shows how line height is rendered over two or more lines. Line height helps control vertical spacing in paragraphs.
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className='flex justify-between  mb-6'>
                    <div className='flex justify-end mb-6'>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/docs/textutilites">
                        <span className='px-1'>{'<'}</span>  Font Utilites
                        </Link>

                    </div>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/components/button">
                       Button <span className='px-1'>{'>'}</span>
                        </Link>
                    </div>
      </div>
    </DocsLayout>
  );
};

export default LetterSpacingDocs;
