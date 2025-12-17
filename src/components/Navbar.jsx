import React, { useState, useEffect } from 'react';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'Hakkımızda' },
    { id: 'services', label: 'Hizmetler' },
    { id: 'references', label: 'Referanslar' },
    { id: 'news', label: 'Haberler' },
    { id: 'gallery', label: 'Galeri' },
    { id: 'contact', label: 'İletişim' }
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <a 
            href="#home" 
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Avrasya Danışmanlık
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
            <button 
              className="btn btn-primary"
              onClick={() => handleNavClick('contact')}
            >
              Teklif Al
            </button>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-nav-links">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <button 
                className="btn btn-primary"
                onClick={() => handleNavClick('contact')}
              >
                Teklif Al
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;