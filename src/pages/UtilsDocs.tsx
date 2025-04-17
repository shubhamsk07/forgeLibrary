import React from "react";
import "./docs.css";
import DocsLayout from "../components/DocsLayout";
import { Link } from "react-router-dom";

const Docs = () => {
  return (
    <DocsLayout>
         <div className="page-content">
      <main>
        <section>
            <h1>Customize According to your requirement</h1>
          <h2>1. What is :root?</h2>
          <p>
            The :root selector allows you to define global CSS variables that can be
            reused throughout your project. In your theme, it's where --color-primary,
           --font-primary, and others are declared.
          </p>
        </section>

        <section>
          <h2>2. How to Customize Colors</h2>
          <p>Override the default color variables like this:</p>

          <pre className="code-block">
{`:root {
  --color-primary: black;
  --color-secondary: gray;
  --accent-color: white;
}`}
          </pre>
        </section>

        <section>
          <h2>3. Dark Mode Support</h2>
          <p>Use the body.dark class to define styles when dark mode is active:</p>

          <pre className="code-block">
{`body.dark {
  background-color: #000000;
  color: #FAFAFA;
}

body.dark .navbar {
  background-color: #09090B;
}`}
          </pre>
        </section>

        <section>
          <h2>4. How to Apply This</h2>
          <p>
            Simply include your stylesheet <strong>after</strong> loading the default framework styles (if any) so your overrides take precedence.
          </p>

          <pre className="code-block">
{`<!-- Framework styles -->
<link rel="stylesheet" href="https://cdn.example.com/framework.css" />

<!-- Your custom overrides -->
<link rel="stylesheet" href="/docs.css" />`}
          </pre>
        </section>

        <section>
          <h2>5. Font Configuration</h2>
          <p>
            Your setup uses Inter for all fonts (primary, secondary, and monospace). Here’s how that’s defined:
          </p>

          <pre className="code-block">
{`:root {
  --font-primary: "Inter", sans-serif;
  --font-secondary: "Inter", sans-serif;
  --font-monospace: "Inter", sans-serif;
}`}
          </pre>
        </section>
      </main>
      <div className='flex justify-between  mb-6'>
                    <div className='flex justify-end mb-6'>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/docs/installation">
                        <span className='px-1'>{'<'}</span>Installation
                        </Link>

                    </div>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/docs/grid">
                       12 Column Grid <span className='px-1'>{'>'}</span>
                        </Link>
                    </div>
    </div>
    </DocsLayout>
  );
};

export default Docs;
