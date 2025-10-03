import './Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
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
    </footer>
  );
};

export default Footer;
