import React from 'react';
import { Link } from 'react-router-dom';
import './InformationPage.css';

const InformationPage = () => {
    return (
        <div className="info-container">
            <nav className="navbar">
                <Link to="/" className="nav-link">← Back Home</Link>
            </nav>

            <header className="info-header">
                <h1 className="gradient-text">Project Intelligence</h1>
                <p className="subtitle">Discover the architecture and vision behind our platform.</p>
            </header>

            <div className="info-grid">
                <section className="info-card glass">
                    <div className="card-icon">🚀</div>
                    <h3>Our Mission</h3>
                    <p>To provide a seamless, high-performance environment for modern web development, leveraging the power of Vite and React.</p>
                </section>

                <section className="info-card glass">
                    <div className="card-icon">🛠️</div>
                    <h3>Tech Stack</h3>
                    <ul className="tech-list">
                        <li>React 19 (Latest)</li>
                        <li>Vite Bundler</li>
                        <li>Vanilla CSS3</li>
                        <li>Modern JS (ESNext)</li>
                    </ul>
                </section>

                <section className="info-card glass">
                    <div className="card-icon">✨</div>
                    <h3>Key Features</h3>
                    <p>Hot Module Replacement, Glassmorphism UI, Responsive Design, and optimized performance out of the box.</p>
                </section>

                <section className="info-card glass">
                    <div className="card-icon">✉️</div>
                    <h3>Get in Touch</h3>
                    <p>Interested in contributing? Reach out via our GitHub repository or join our developer community.</p>
                </section>
            </div>

            <footer className="info-footer">
                <p>&copy; 2026 Antigravity Systems. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default InformationPage;
