
import DocsTitle from '../../components/DocsTitle'
import { Link } from 'react-router-dom'

import DocsLayout from '../../components/DocsLayout'

const Introduction = () => {
    return (
        <div>
            <DocsLayout>
                <div className='page-content' >
                    <DocsTitle title={'Introduction'} />
                    <h1 className="text-2xl mt-4 font-bold mb-2">Welcome to Forge UI</h1>
                    <p className="text-lg mb-2 text-secondary">
                        Forge UI is a modern, lightweight UI toolkit built with developer productivity in mind. It uses CSS variables and utility-first principles to give you full control while maintaining simplicity and consistency across your app.
                    </p>
                    <h2 className="text-xl font-semibold mt-4 mb-2">Features</h2>
                    <ul className=" ml-2" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                        <li className="mb-1">✅ Built with custom CSS variables</li>
                        <li className="mb-1">✅ Utility-first spacing and typography</li>
                        <li className="mb-1">✅ Fully responsive 12-column grid system</li>
                        <li className="mb-1">✅ Dark mode support</li>
                        <li className="mb-1">✅ Easy theming</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-4 mb-2">Philosophy</h2>
                    <p className="mb-6">
                        Forge UI doesn’t try to reinvent the wheel. Instead, it gives you a clean foundation to build scalable and beautiful UIs with a consistent design language and a smooth developer experience.
                    </p>

                    <div className='flex justify-end px-6 '>
                        <Link to="/docs/installation" style={{ textDecoration: 'none' }} className="text-primary text-sm mt-6">
                            Introduction {'>'}
                        </Link>
                    </div>
                </div>
            </DocsLayout>

        </div>
    )
}

export default Introduction