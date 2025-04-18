
import DocsLayout from '../../components/DocsLayout';
import DocsTitle from '../../components/DocsTitle';
import { Link } from 'react-router-dom';

const textAlignmentUtilities = ['text-left', 'text-center', 'text-right'];
const textDecorationUtilities = ['underline', 'line-through', 'no-underline'];
const textTransformUtilities = ['uppercase', 'lowercase', 'capitalize'];
const textColorUtilities = ['text-primary', 'text-secondary', 'text-accent', 'text-light', 'text-dark'];
const textOverflowUtilities = ['overflow-ellipsis', 'overflow-clip', 'white-space-nowrap'];

const TextUtilitiesDocs = () => {
  return (
    <DocsLayout>
      <div className="page-content" style={{ display: 'flex', gap: '2rem' }}>

        <div style={{ flex: 1 }}>
          <DocsTitle title="Text Utilities" />
          <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Text Utility Classes
          </h1>
          <p style={{ fontSize: '1rem', color: '#555', marginBottom: '2rem' }}>
            These utility classes help you control text alignment, decoration, transformation, color, and overflow behavior.
          </p>


          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
              Text Alignment
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {textAlignmentUtilities.map((cls) => (
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
                  <div>This is aligned text</div>
                </div>
              ))}
            </div>
          </section>


          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
              Text Decoration
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {textDecorationUtilities.map((cls) => (
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
                  <div>This text shows decoration</div>
                </div>
              ))}
            </div>
          </section>


          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
              Text Transform
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {textTransformUtilities.map((cls) => (
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
                  <div>sample transformed text</div>
                </div>
              ))}
            </div>
          </section>


          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
              Text Color
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {textColorUtilities.map((cls) => (
                <div
                  key={cls}
                  className={cls}
                  style={{
                    border: '1px dashed #ccc',
                    padding: '1rem',
                    borderRadius: '8px',
                    fontSize: '1rem',
                  }}
                >
                  <div style={{ fontFamily: 'monospace', fontSize: '0.875rem', color: '#888' }}>{cls}</div>
                  <div>This is a colored text</div>
                </div>
              ))}
            </div>
          </section>


          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
              Text Overflow
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {textOverflowUtilities.map((cls) => (
                <div
                  key={cls}
                  className={cls}
                  style={{
                    border: '1px dashed #ccc',
                    padding: '1rem',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    maxWidth: '200px',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ fontFamily: 'monospace', fontSize: '0.875rem', color: '#888' }}>{cls}</div>
                  <div>This is a long line of overflowing text that should demonstrate the utility.</div>
                </div>
              ))}
            </div>
          </section>
          <div className='flex justify-between  mb-6'>
                    <div className='flex justify-end mb-6'>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/docs/fontweight">
                        <span className='px-1'>{'<'}</span>  Font Weight
                        </Link>

                    </div>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/docs/letterspacing">
                       Letter Spacing <span className='px-1'>{'>'}</span>
                        </Link>
                    </div>
        </div>
        <div style={{ width: '150px', visibility: 'hidden' }}></div>
      </div>
    </DocsLayout>
  );
};

export default TextUtilitiesDocs;
