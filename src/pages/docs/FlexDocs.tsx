import React from 'react';
import DocsLayout from '../../components/DocsLayout';
import DocsTitle from '../../components/DocsTitle';
import "../../styles/flex.css"
import { Link } from 'react-router-dom';

const flexUtilities = [
  'flex',
  'inline-flex',
  'flex-row',
  'flex-row-reverse',
  'flex-col',
  'flex-col-reverse',
  'flex-wrap',
  'flex-nowrap',
  'flex-wrap-reverse',
  'items-start',
  'items-center',
  'items-end',
  'items-baseline',
  'items-stretch',
  'justify-start',
  'justify-center',
  'justify-end',
  'justify-between',
  'justify-around',
  'justify-evenly',
];

const FlexDocs = () => {
  return (
    <DocsLayout>
      <div className="page-content">
        <DocsTitle title="Flexbox Utility Classes" />
        <h1 className="docs-title">Flexbox Utility Classes</h1>
        <p className="docs-description">
          Below are utility classes for applying various flexbox properties. These can be applied to quickly adjust layout and alignment.
        </p>

        {/* Flex Utilities */}
        <section className="flex-utilities-section">
          <h2 className="section-title">Flex Utilities</h2>
          <div className="flex-utilities-grid">
            {flexUtilities.map((cls) => (
              <div
                key={cls}
                className={`flex-example-box ${cls}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100px',
                }}
              >
                <div className="example-class-name">{cls}</div>
                <div className="example-content">
                  Sample content with <strong>{cls}</strong> class
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className='flex justify-between  mb-6'>
                    <div className='flex justify-end mb-6'>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/docs/flex">
                        <span className='px-1'>{'<'}</span>  Grid
                        </Link>

                    </div>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/docs/margin">
                            Margin Classes <span className='px-1'>{'>'}</span>
                        </Link>
                    </div>
      </div>
    </DocsLayout>
  );
};

export default FlexDocs;
