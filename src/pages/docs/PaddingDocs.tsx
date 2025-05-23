
import DocsLayout from '../../components/DocsLayout';
import DocsTitle from '../../components/DocsTitle';
import { Link } from 'react-router-dom';

const spacingValues = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
};

const sides = {
  'p': 'All sides',
  'pt': 'Top',
  'pb': 'Bottom',
  'pl': 'Left',
  'pr': 'Right',
};

const PaddingDocs = () => {
  return (
    <DocsLayout>
      <div className="page-content">
        <DocsTitle title="Padding Utilities" />
        <h1>Padding Utility Classes</h1>
        <p style={{ marginBottom: '2rem', maxWidth: '600px' }}>
          Below are utility classes for applying padding to specific sides using a scale based on your spacing system:
        </p>

        <div className="mx-4">
          {Object.entries(sides).map(([prefix, label]) => (
            <div key={prefix} style={{ marginBottom: '2rem' }}>
              <h2 style={{ marginBottom: '0.5rem' }}>{label} Padding</h2>
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
                        backgroundColor: '#f9fafb',
                      }}
                    >
                      <strong>{className}</strong>
                      <div style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
                        {prefix === 'p' ? 'padding' : `padding-${label.toLowerCase()}`}: {value}
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
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/docs/margin">
                        <span className='px-1'>{'<'}</span>  Margin
                        </Link>

                    </div>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/docs/horizontalandverticalSpacing">
                        Horizontal and Vertical Side <span className='px-1'>{'>'}</span>
                        </Link>
                    </div>
      </div>
    </DocsLayout>
  );
};

export default PaddingDocs;
