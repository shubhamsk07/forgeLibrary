
import DocsLayout from '../../components/DocsLayout';
import DocsTitle from '../../components/DocsTitle';
import { Link } from 'react-router-dom';

const gridUtilities = [
  'col-span-1',
  'col-span-2',
  'col-span-3',
  'col-span-4',
  'col-span-5',
  'col-span-6',
  'col-span-7',
  'col-span-8',
  'col-span-9',
  'col-span-10',
  'col-span-11',
  'col-span-12',
];

const GridDocs = () => {
  return (
    <DocsLayout>
      <div className="page-content">
        <DocsTitle title="12-Column Grid Utility Classes" />
        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          12-Column Grid Utility Classes
        </h1>
        <p style={{ fontSize: '1rem', color: '#555', marginBottom: '2rem' }}>
          Below are utility classes for a 12-column grid layout system.
        </p>

        {/* Grid Utilities */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
            12-Column Grid Utilities
          </h2>
          <div
            className="grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '1rem',
            }}
          >
            {gridUtilities.map((cls) => (
              <div
                key={cls}
                className={cls}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px dashed #ccc',
                  padding: '1rem',
                  borderRadius: '8px',
                  minHeight: '50px',
                }}
              >
                <div className='pr-2' style={{ fontFamily: 'monospace', fontSize: '0.875rem', color: '#888' }}>
                  {cls}
                </div>
                <div>Sample content with <strong> {cls} </strong> class</div>
              </div>
            ))}
          </div>

        </section>
        <div className='flex justify-between  mb-6'>
                    <div className='flex justify-end mb-6'>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/docs/utilites">
                        <span className='px-1'>{'<'}</span>  Utils
                        </Link>

                    </div>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/docs/flex">
                            Flex <span className='px-1'>{'>'}</span>
                        </Link>
                    </div>
      </div>
    </DocsLayout>
  );
};

export default GridDocs;
