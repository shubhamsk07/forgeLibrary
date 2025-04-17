import { ReactNode } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'


const DocsLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div >
            <Navbar />
            <div className='container grid body-layout'>
                <div className='col-span-2'>
                    <Sidebar />
                </div>
                <div className='col-span-10'>{children}</div>
            </div>

        </div>
    )
}

export default DocsLayout