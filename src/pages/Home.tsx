import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './home.css';
import { Link } from 'react-router-dom';
import PillButton from '../components/PillButton';

const HomePage = () => {
  const [copied, setCopied] = useState(false);
  const cdnLink = `<link href="https://cdn.forgeui.dev/forgeui.min.css" rel="stylesheet">`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cdnLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="home">
      <Navbar />

      <section className="hero">
        <PillButton>ForgeUI For Faster Design</PillButton>
        <h1 className="hero-title">
          Building stunning UIs with <span>ease</span> and <span>flexibility</span>, crafted for developers.
        </h1>
        <p className="hero-subtitle">
          Seamless integration, simple API, and customizable components.
          With 12 grid responsive system and multiple pre-written classes.
        </p>

        <div className="hero-buttons">
          <Link to="/docs/installation" className="button button-primary">Get Started</Link>
          <Link to="/components/button" className="button button-outline">Components</Link>
        </div>
      </section>

      <section className="cdn-section">
        <h2 className="cdn-heading">Copy and paste the CDN – and you're good to go 🚀</h2>
        <div className="cdn-box">
          <code className="cdn-code">{cdnLink}</code>
          <button className="copy-button" onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
