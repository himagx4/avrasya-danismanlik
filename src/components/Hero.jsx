import React from 'react';

const Hero = ({ scrollToSection }) => {
  const stats = [
    { number: '10+', label: 'Yıllık Deneyim', icon: '🎯' },
    { number: '15+', label: 'Tamamlanmış Proje', icon: '🚀' },
    { number: '20+', label: 'İş Ortağı', icon: '🤝' },
    { number: '%100', label: 'Müşteri Memnuniyeti', icon: '⭐' }
  ];

  const partners = [
    { name: 'Metunic', logo: '🏢' },
    { name: 'Natro', logo: '⚡' },
    { name: 'Mtrafik', logo: '🚦' },
    { name: 'Elif MTSK', logo: '🎓' },
    { name: 'Emniyet MTSK', logo: '👮' }
  ];

  return (
    <section id="home" className="hero-premium">
      <div className="container">
        <div className="hero-content-premium">
          <div className="hero-badge-premium">
            🚀 Premium Danışmanlık Hizmeti
          </div>
          
          <h1 className="hero-title-premium">
            Profesyonel <span className="gradient-text">Danışmanlık Çözümleriyle</span> İşinizi Büyütün
          </h1>
          
          <p className="hero-description-premium">
            Avrasya Danışmanlık olarak, kurumsal danışmanlıktan MTSK yönetim desteğine, 
            trafik eğitimlerinden dijital çözümlere kadar geniş bir yelpazede 
            <strong> 10 yılı aşkın deneyimimizle</strong> yanınızdayız.
          </p>
          
          <div className="hero-actions-premium">
            <button 
              className="btn btn-primary-premium"
              onClick={() => scrollToSection('services')}
            >
              Hizmetlerimizi Keşfedin
              <span className="btn-icon">→</span>
            </button>
            <button 
              className="btn btn-secondary-premium"
              onClick={() => scrollToSection('contact')}
            >
              Ücretsiz Danışmanlık Alın
              <span className="btn-icon">📞</span>
            </button>
          </div>
        </div>
        
        {/* BÜYÜTÜLMÜŞ VE EŞ BOYUTLU İSTATİSTİK KARTLARI */}
        <div className="hero-stats-premium">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card-premium hero-stat-card">
              <div className="stat-icon-container">
                <span className="stat-icon-large">{stat.icon}</span>
              </div>
              <div className="stat-content-wrapper">
                <div className="stat-number-large">{stat.number}</div>
                <div className="stat-label-large">{stat.label}</div>
              </div>
              <div className="stat-glow-effect"></div>
            </div>
          ))}
        </div>

        {/* Güvenilen İş Ortaklarımız Bölümü */}
        <div className="partners-section-premium">
          <div className="partners-header">
            <h3 className="partners-title">Güvenilen İş Ortaklarımız</h3>
            <p className="partners-subtitle">
              10 yıllık başarı hikayemizde bize güvenen değerli iş ortaklarımız
            </p>
          </div>
          
          <div className="partners-grid-premium">
            {partners.map((partner, index) => (
              <div key={index} className="partner-card-premium">
                <div className="partner-logo">
                  <span>{partner.logo}</span>
                </div>
                <div className="partner-name">{partner.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="hero-background-premium">
        <div className="gradient-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;