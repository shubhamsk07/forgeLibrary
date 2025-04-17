import React from 'react';
import DocsLayout from '../../components/DocsLayout';
import DocsTitle from '../../components/DocsTitle';
import { Link } from 'react-router-dom';

const fontWeightUtilities = [
  'font-thin',
  'font-extralight',
  'font-light',
  'font-normal',
  'font-medium',
  'font-semibold',
  'font-bold',
  'font-extrabold',
  'font-black',
];

const FontWeightDocs = () => {
  return (
    <DocsLayout>
      <div className="page-content" style={{ display: 'flex', gap: '2rem' }}>
        {/* Main content */}
        <div style={{ flex: 1 }}>
          <DocsTitle title="Font Weight Utilities" />
          <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Font Weight Utility Classes
          </h1>
          <p style={{ fontSize: '1rem', color: '#555', marginBottom: '2rem' }}>
            Below are utility classes for applying font weights in your design system.
          </p>

          {/* Font Weights */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
              Font Weights
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {fontWeightUtilities.map((cls) => (
                <div
                  key={cls}
                  className={cls}
                  style={{
                    minWidth: '180px',
                    border: '1px dashed #ccc',
                    padding: '1rem',
                    borderRadius: '8px',

                    fontSize: '1rem',
                  }}
                >
                  <div style={{ fontFamily: 'monospace', fontSize: '0.875rem', color: '#888' }}>{cls}</div>
                  <div>Sample Text</div>
                </div>
              ))}
            </div>
            <div className='flex justify-between  mb-6'>
                    <div className='flex justify-end mb-6'>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/docs/fontsize">
                        <span className='px-1'>{'<'}</span>  Font Size
                        </Link>

                    </div>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/docs/textutilites">
                       Font Utilites <span className='px-1'>{'>'}</span>
                        </Link>
                    </div>
          </section>
        </div>

        {/* Invisible right div to align like docs */}
        <div style={{ width: '150px', visibility: 'hidden' }}></div>
      </div>
    </DocsLayout>
  );
};

export default FontWeightDocs;
