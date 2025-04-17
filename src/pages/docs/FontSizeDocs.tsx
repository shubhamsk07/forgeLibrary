
import DocsLayout from '../../components/DocsLayout';
import DocsTitle from '../../components/DocsTitle';
import { Link } from 'react-router-dom';

const fontSizeUtilities = [
  'text-xs',
  'text-sm',
  'text-base',
  'text-lg',
  'text-xl',
  'text-2xl',
  'text-3xl',
  'text-4xl',
  'text-5xl',

];


const FontSizeDocs = () => {
  return (
    <DocsLayout>
    <div className="page-content" style={{ display: 'flex', gap: '2rem' }}>
      {/* Main content */}
      <div style={{ flex: 1 }}>
        <DocsTitle title="Font Size Utilities" />
        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Font Size Utility Classes
        </h1>
        <p style={{ fontSize: '1rem', color: '#555', marginBottom: '2rem' }}>
          Below are utility classes for applying font sizes in your design system.
        </p>

        {/* Font Size */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
            Font Sizes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {fontSizeUtilities.map((cls) => (
              <div
                key={cls}
                className={cls}
                style={{
                  minWidth: '180px',
                  border: '1px dashed #ccc',
                  padding: '1rem',
                  borderRadius: '8px',
                }}
              >
                <div style={{ fontFamily: 'monospace', fontSize: '0.875rem', color: '#888' }}>{cls}</div>
                <div>Sample Text</div>
              </div>
            ))}
          </div>
        </section>
        <div className='flex justify-between  mb-6'>
                    <div className='flex justify-end mb-6'>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/docs/horizontalandverticalSpacing">
                        <span className='px-1'>{'<'}</span>  Horizontal And Vertical Side
                        </Link>

                    </div>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/docs/fontweight">
                       Font Weight <span className='px-1'>{'>'}</span>
                        </Link>
                    </div>
      </div>

      {/* Invisible div to align layout */}
      <div style={{ width: '150px', visibility: 'hidden' }}></div>

    </div>
  </DocsLayout>

  );
};

export default FontSizeDocs;
