import React from 'react';

const Stats = () => {
  const stats = [
    { 
      number: '50+', 
      label: 'Mutlu Müşteri', 
      description: 'Türkiye genelinde hizmet verdiğimiz kurumsal müşteriler',
      icon: '😊'
    },
    { 
      number: '10', 
      label: 'Yıllık Deneyim', 
      description: 'Sektördeki uzmanlık ve tecrübe birikimimiz',
      icon: '📅'
    },
    { 
      number: '%100', 
      label: 'Başarı Oranı', 
      description: 'Tamamlanan projelerdeki başarı istatistiğimiz',
      icon: '✅'
    },
    { 
      number: '24/7', 
      label: 'Destek', 
      description: 'Kesintisiz müşteri hizmetleri ve teknik destek',
      icon: '🛠️'
    }
  ];

  return (
    <section className="stats-section-premium">
      <div className="container">
        <div className="section-header-premium">
          <div className="section-badge">İstatistikler</div>
          <h2 className="section-title-premium">Neden Bizi Tercih Ediyorlar?</h2>
          <p className="section-subtitle-premium">
            Rakamlarla Avrasya Danışmanlık - Kalitemizi ve güvenilirliğimizi sayılarla kanıtlıyoruz
          </p>
        </div>
        
        <div className="stats-grid-premium">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card-premium">
              <div className="stat-icon-wrapper">
                <span className="stat-icon">{stat.icon}</span>
              </div>
              
              <div className="stat-numbers">
                <div className="stat-number-premium">{stat.number}</div>
                <div className="stat-label-premium">{stat.label}</div>
              </div>
              
              <p className="stat-description">{stat.description}</p>
              
              <div className="stat-glow"></div>
            </div>
          ))}
        </div>
        
        {/* ALT KISIM KALDIRILDI - Sadece 4 ana istatistik kartı kalacak */}
      </div>
    </section>
  );
};

export default Stats;