const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-copy">
            © {year} Aditya Malhotra · Built with React & Vite
          </span>

          <div className="footer-links">
            <a
              href="https://github.com/ADML003"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-malhotra-am003/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/adml003"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              X / Twitter
            </a>
            <a
              href="mailto:reach.adml@gmail.com"
              className="footer-link"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
