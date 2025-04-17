// components/Navbar.jsx
import {  Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
  };

  return (
    <nav className="navbar mb-4 mt-2 container flex justify-between items-center  ">
      {/* Logo */}
     <div className='flex'>
     <div className="px-4">
      <Link to='/' style={{textDecoration:'none'}} className='logo'>ForgeUI</Link>
     </div>

{/* Navigation Links */}
<div className="nav-links flex items-center text-sm">
  <Link to="/docs/installation">Docs</Link>
  <Link to="/components/button">Components</Link>
</div>
</div>

      {/* Search Input */}
   <div className='flex px-4 items-center'>
   <div className="search-container px-4">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      {/* GitHub Icon */}
      <div className="github-icon px-4">
        <a href="https://github.com/shubhamsk07/forgeLibrary" target="_blank" rel="noopener noreferrer">
          <FaGithub color={`${darkMode?'white':'black'} `}/>
        </a>
      </div>

      {/* Dark/Light Toggle */}
      <button className="theme-toggle" onClick={toggleDarkMode}>
      {darkMode ?<Moon size={18} />:<Sun size={18}/>}
      </button>
   </div>
    </nav>
  );
}

export default Navbar;
