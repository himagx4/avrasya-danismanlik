import React from 'react';

const References = () => {
  const references = [
    { 
      name: 'Metunic', 
      logo: '/assets/logos/metunic.svg',
      description: 'Teknoloji ve İnovasyon',
      projects: '12+ Proje',
      since: '2020',
      icon: '🏢'
    },
    { 
      name: 'Natro', 
      logo: '/assets/logos/natro.svg',
      description: 'Hosting Çözümleri',
      projects: '8+ Proje', 
      since: '2019',
      icon: '⚡'
    },
    { 
      name: 'Mtrafik', 
      logo: '/assets/logos/mtrafik.svg',
      description: 'Trafik Eğitimleri',
      projects: '15+ Proje',
      since: '2018',
      icon: '🚦'
    },
    { 
      name: 'Elif MTSK', 
      logo: '/assets/logos/elif-mtsk.svg',
      description: 'Sürücü Kursu',
      projects: '6+ Proje',
      since: '2021',
      icon: '🎓'
    },
    { 
      name: 'Emniyet MTSK', 
      logo: '/assets/logos/emniyet-mtsk.svg',
      description: 'Resmi Kurum',
      projects: '10+ Proje',
      since: '2019',
      icon: '👮'
    }
  ];

  return (
    <section id="references" className="section references-section-premium">
      <div className="container">
        <div className="section-header-premium">
          <div className="section-badge">Referanslar</div>
          <h2 className="section-title-premium">Güvenilen İş Ortaklarımız</h2>
          <p className="section-subtitle-premium">
            Türkiye'nin önde gelen kurumlarıyla gerçekleştirdiğimiz başarılı iş birlikleri. 
            Her biri sektöründe lider firmalar.
          </p>
        </div>
        
        <div className="references-grid-premium">
          {references.map((reference, index) => (
            <div key={index} className="reference-card-premium">
              <div className="reference-header-premium">
                <div className="reference-logo-container">
                  <div className="reference-logo-placeholder-premium">
                    <span className="reference-icon">{reference.icon}</span>
                  </div>
                </div>
                
                <div className="reference-badge-premium">
                  <span className="badge-text">{reference.since}'den beri</span>
                </div>
              </div>
              
              <div className="reference-content-premium">
                <h3 className="reference-name-premium">{reference.name}</h3>
                <p className="reference-description-premium">{reference.description}</p>
                
                <div className="reference-stats-premium">
                  <div className="stat-premium">
                    <span className="stat-number-premium">{reference.projects}</span>
                    <span className="stat-label-premium">İş Birliği</span>
                  </div>
                </div>
              </div>
              
              <div className="reference-footer-premium">
                <div className="partner-badge-premium">
                  <span>⭐ Premium İş Ortağı</span>
                </div>
              </div>
              
              <div className="reference-glow"></div>
            </div>
          ))}
        </div>
        
        <div className="references-cta-premium">
          <div className="cta-content-premium">
            <h3>Siz de Güvenilir İş Ortağımız Olun</h3>
            <p>Profesyonel çözümlerimizle işletmenizi büyütmeye hazır mısınız?</p>
            <button className="btn btn-primary-premium">
              <span>Hemen Teklif Alın</span>
              <span className="btn-icon">🚀</span>
            </button>
          </div>
          <div className="cta-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default References;