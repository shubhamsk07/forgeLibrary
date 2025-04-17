import { Link } from 'react-router-dom'
import DocsTitle from '../../components/DocsTitle'

import DocsLayout from '../../components/DocsLayout'

const Installation = () => {
    return (
        <div>
            <DocsLayout>
            <div className="col-span-10 page-content">
                    <DocsTitle title={'Installation'} />
                    <h1 className="text-2xl mt-4 font-bold mb-2">Installation</h1>
                    <p className=" mb-3">
                        Welcome to the Forge UI installation guide. This page will walk you through how to start using Forge UI in your project <strong>using just a single CDN link</strong>.
                    </p>

                    <h2 className="text-xl font-semibold mb-1">1. Add Forge UI to your HTML</h2>
                    <p className="mb-4">
                        Forge UI is currently available <strong>only via CDN</strong>. Just copy and paste the following link into the <code>&lt;head&gt;</code> of your HTML:
                    </p>
                    <pre className="bg-gray-100 p-4 rounded mb-3 overflow-x-auto code-block">
                        <code>
                            {'<'}<span className="code-color1">link</span> rel=<span className="code-color2">"stylesheet"</span> href=<span className="code-color2">"https://cdn.example.com/forge-ui/forge-ui.min.css"</span> /{'>'}
                        </code>
                    </pre>

                    <h2 className="text-xl font-semibold mb-1">2. Start Using the Utility Classes</h2>
                    <p className="mb-4">
                        Once included, you can use the Forge UI class system anywhere in your markup:
                    </p>
                    <pre className="bg-gray-100 p-4 rounded mb-6 overflow-x-auto code-block">
                        <code>
{`<div class="container mt-4">
  <h1 class="text-3xl font-bold mb-2">Hello, Forge UI!</h1>
  <p class="text-base">This is styled using Forge's utility-first system.</p>
</div>`}
                        </code>
                    </pre>

                    <h2 className="text-xl font-semibold mb-1">3. Customize with CSS Variables (Optional)</h2>
                    <p className="mb-4">You can override Forge UI's variables in your own CSS:</p>
                    <pre className="bg-gray-100 p-4 rounded mb-6 overflow-x-auto code-block">
                        <code className="language-css">
{`:root {
  --color-primary: #3b82f6;
  --font-primary: 'Poppins', sans-serif;
}`}
                        </code>
                    </pre>

                    <h2 className="text-xl font-semibold mb-2">4. Enable Dark Mode</h2>
                    <p className="mb-4">Add the <code>dark</code> class to the <code>&lt;body&gt;</code> to activate dark mode:</p>
                    <pre className="bg-gray-100 p-4 rounded mb-6 overflow-x-auto code-block">
                        <code>
{`<body class="dark">
  <h2 class="text-xl">This uses dark mode</h2>
</body>`}
                        </code>
                    </pre>

                    <h2 className="text-xl font-semibold mb-2">5. Browser Support</h2>
                    <p className="mb-6">
                        Forge UI supports all modern browsers including Chrome, Firefox, Safari, and Edge. No additional setup required.
                    </p>

                    <div className='flex justify-between  mb-6'>
                    <div className='flex justify-end mb-6'>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/docs/introduction">
                        <span className='px-1'>{'<'}</span>  Introduction
                        </Link>

                    </div>
                        <Link className='mt-6 text-primary font-medium text-sm' style={{ textDecoration: 'none' }} to="/docs/utils">
                            Utility Classes <span className='px-1'>{'>'}</span>
                        </Link>

                    </div>
                </div>
            </DocsLayout>

        </div>
    )
}

export default Installation
