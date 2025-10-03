import { Link } from 'react-router-dom';
import { Home, Map, Calendar } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <Link to="/" className="footer-nav-link">
            <Home size={18} />
            Dashboard
          </Link>
          <Link to="/journey" className="footer-nav-link">
            <Map size={18} />
            Visitor Journey
          </Link>
          <Link to="/timeline" className="footer-nav-link">
            <Calendar size={18} />
            Project Timeline
          </Link>
        </nav>
        <div className="footer-branding">
          <span className="footer-text">Powered by</span>
          <a
            href="https://kayanlive.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-logo-link"
          >
            <img
              src="/kayanlive-logo.webp"
              alt="Kayan Live"
              className="footer-logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
