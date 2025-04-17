
import { Link } from 'react-router-dom';
import "./sidebar.css"
const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <nav className="sidebar-nav">

                <div className="sidebar-section " style={{ textDecoration: 'none' }} >

                   <h3 className="text-lg ">Getting Started</h3>
                   <div className='px-1 flex flex-col gap-1'>
                    <Link to="/docs/introduction" style={{ textDecoration: 'none' }} className="text-primary text-sm">
                        Introduction
                    </Link>
                    <Link to="/docs/installation" className="text-primary text-sm" style={{ textDecoration: 'none' }}>
                        Installation
                    </Link>

                    </div>
                </div>
                <div className="sidebar-section">
                    <h3 className="text-lg">Core Concepts</h3>
                    <div className='px-1 flex flex-col gap-1'>
                    <Link to="/docs/utils" className="text-primary text-sm" style={{ textDecoration: 'none' }}>
                        Utility Classes
                    </Link>
                    <Link to="/docs/grid" className="text-primary text-sm" style={{ textDecoration: 'none' }}>
                        12 Column Grid
                    </Link>
                    <Link to="/docs/flex" className="text-primary text-sm" style={{ textDecoration: 'none' }}>
                       Flexbox
                    </Link>
                    </div>

                </div>
                {/* Utitlis Section */}
                <div className="sidebar-section">
                    <h3 className="text-lg">Utility Classes</h3>
                    <div className='px-1 flex flex-col gap-1'>
                    <Link to="/docs/margin" className="text-primary text-sm" style={{ textDecoration: 'none' }}>
                        Margin Classes
                    </Link>
                    <Link to="/docs/padding" className="text-primary text-sm" style={{ textDecoration: 'none' }}>
                        Padding Classes
                    </Link>
                    <Link to="/docs/horizontalandverticalSpacing" className="text-primary text-sm" style={{ textDecoration: 'none' }}>
                    Horizontal and Vertical Side
                    </Link>
                    </div>

                </div>
                {/* Typography section */}
                <div className="sidebar-section">
                    <h3 className="text-lg">Typography</h3>
                    <div className='px-1 flex flex-col gap-1'>
                    <Link to="/docs/fontsize" className=" text-sm" style={{ textDecoration: 'none' }}>
                       Font Size
                    </Link>
                    <Link to="/docs/fontweight" className="text-primary text-sm" style={{ textDecoration: 'none' }}>
                    Font Weight
                    </Link>
                    <Link to="/docs/textutilites" className="text-primary text-sm" style={{ textDecoration: 'none' }}>
                    Font Utilites
                    </Link>
                    <Link to="/docs/letterspacing" className="text-primary text-sm" style={{ textDecoration: 'none' }}>
                    Letter Spacing
                    </Link>
                    </div>

                </div>

                <div className="sidebar-section">
                    <h3 className="text-lg">Components</h3>
                    <div className='px-1 flex flex-col'>
                    <Link to="/components/button" className="text-primary text-sm" style={{ textDecoration: 'none' }}>
                        Button
                    </Link>
                    <Link to="/components/input" className="text-primary text-sm" style={{ textDecoration: 'none' }}>
                        Input Box
                    </Link>
                    <Link to="/components/modal" className="text-primary text-sm" style={{ textDecoration: 'none' }}>
                        Modal
                    </Link>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
