import { useState, useEffect } from 'react';

const navItems = [
  { name: 'About',    href: '#about' },
  { name: 'Skills',   href: '#tech-skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Work',     href: '#work' },
  { name: 'Contact',  href: '#contact' },
];

// Sun icon
const SunIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
  </svg>
);

// Moon icon
const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme]     = useState(() =>
    typeof window !== 'undefined'
      ? (localStorage.getItem('theme') || 'dark')
      : 'dark'
  );

  // Apply theme to <html> and persist
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 68;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={(e) => handleNav(e, '#home')}>
          AxM
        </a>

        {/* Desktop links + toggle */}
        <div className="navbar-right">
          <ul className="navbar-links">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} onClick={(e) => handleNav(e, item.href)}>
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a href="https://github.com/ADML003" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                GitHub
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
          </ul>

          {/* Light / Dark toggle */}
          <button
            className="theme-toggle"
            onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Mobile hamburger */}
          <button className="navbar-mobile-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} onClick={(e) => handleNav(e, item.href)}>
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a href="https://github.com/ADML003" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              GitHub
              <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </li>
          {/* Theme toggle in mobile menu too */}
          <li>
            <button
              onClick={() => { setTheme(t => t === 'dark' ? 'light' : 'dark'); setIsOpen(false); }}
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '11px 0', width: '100%', background: 'none',
                border: 'none', cursor: 'pointer',
                color: 'var(--text-secondary)', fontSize: '15px',
                fontFamily: 'inherit', borderBottom: '1px solid var(--border)',
              }}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
