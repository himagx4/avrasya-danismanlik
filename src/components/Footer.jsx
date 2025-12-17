import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <p>© 2025 Avrasya Danışmanlık. Tüm hakları saklıdır.</p>
          </div>
          <div className="footer-links">
            <a href="/kvkk.html" className="footer-link" target="_blank" rel="noopener noreferrer">
              KVKK
            </a>
            <a href="/gizlilik.html" className="footer-link" target="_blank" rel="noopener noreferrer">
              Gizlilik Politikası
            </a>
            <a href="/cerez.html" className="footer-link" target="_blank" rel="noopener noreferrer">
              Çerez Politikası
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;