import React from 'react';
import DocsLayout from '../../components/DocsLayout';
import DocsTitle from '../../components/DocsTitle';
import { Link } from 'react-router-dom';

const spacingValues = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
};

const utilityGroups = [
  { prefix: 'mx', label: 'Horizontal Margin', css: 'margin-left / margin-right' },
  { prefix: 'my', label: 'Vertical Margin', css: 'margin-top / margin-bottom' },
  { prefix: 'px', label: 'Horizontal Padding', css: 'padding-left / padding-right' },
  { prefix: 'py', label: 'Vertical Padding', css: 'padding-top / padding-bottom' },
];

const HorizontalVerticalSpacingDocs = () => {
  return (
    <DocsLayout>
      <div className="page-content">
        <DocsTitle title="Horizontal & Vertical Spacing" />
        <h1>Horizontal & Vertical Spacing Utility Classes</h1>
        <p style={{ marginBottom: '2rem', maxWidth: '600px' }}>
          These utility classes apply spacing to both horizontal or vertical directions, useful for quickly adjusting layout spacing.
        </p>

        <div className="mx-4">
          {utilityGroups.map(({ prefix, label, css }) => (
            <div key={prefix} style={{ marginBottom: '2rem' }}>
              <h2 style={{ marginBottom: '0.5rem' }}>{label}</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {Object.entries(spacingValues).map(([key, value]) => {
                  const className = `${prefix}-${key}`;
                  return (
                    <div
                      key={className}
                      className={className}
                      style={{
                        border: '1px dashed #ccc',
                        padding: '1rem',
                        borderRadius: '8px',
                      }}
                    >
                      <strong>{className}</strong>
                      <div style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
                        {css}: {value}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-between  mb-6'>
                    <div className='flex justify-end mb-6'>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/docs/padding">
                        <span className='px-1'>{'<'}</span>  Padding
                        </Link>

                    </div>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/docs/fontsize">
                        Font Size <span className='px-1'>{'>'}</span>
                        </Link>
                    </div>
      </div>
    </DocsLayout>
  );
};

export default HorizontalVerticalSpacingDocs;
