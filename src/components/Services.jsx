import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Kurumsal Danışmanlık',
      description: 'Şirketinize özel stratejik planlama, süreç iyileştirme ve yönetim danışmanlığı. Büyüme odaklı çözümlerle işletmenizi bir sonraki seviyeye taşıyoruz.',
      icon: '💼',
      features: ['Stratejik Planlama', 'Süreç Optimizasyonu', 'Performans Yönetimi', 'Kurumsal Gelişim'],
      color: '#ff6b35',
      gradient: 'linear-gradient(135deg, #ff6b35 0%, #e55a2b 100%)'
    },
    {
      title: 'MTSK Yönetim Desteği',
      description: 'Sürücü kurslarınız için operasyonel süreç desteği, dijital dönüşüm ve yönetim danışmanlığı. Modern çözümlerle verimliliğinizi artırıyoruz.',
      icon: '🚗',
      features: ['Operasyonel Desteği', 'Dijital Dönüşüm', 'Yönetim Danışmanlığı', 'Süreç İyileştirme'],
      color: '#e55a2b',
      gradient: 'linear-gradient(135deg, #e55a2b 0%, #c2410c 100%)'
    },
    {
      title: 'Eğitim ve Belgelendirme',
      description: 'SRC, PSİKOTEKNİK ve MTSK eğitim süreçlerinde uzman rehberlik ve belgelendirme hizmetleri. Kaliteli eğitim standartları sunuyoruz.',
      icon: '🎓',
      features: ['SRC Eğitimleri', 'Psikoteknik', 'Belgelendirme', 'Sınav Hazırlık'],
      color: '#dc2626',
      gradient: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)'
    },
    {
      title: 'Web ve Dijital Hizmetler',
      description: 'Kurumsal web siteleri, hosting, domain yönetimi ve dijital pazarlama çözümleri. Dijital varlığınızı güçlendiriyoruz.',
      icon: '🌐',
      features: ['Web Tasarım', 'Hosting Çözümleri', 'Dijital Pazarlama', 'SEO Optimizasyon'],
      color: '#c2410c',
      gradient: 'linear-gradient(135deg, #c2410c 0%, #9a3412 100%)'
    }
  ];

  return (
    <section id="services" className="section services-section-premium">
      <div className="container">
        <div className="section-header-premium">
          <div className="section-badge">Premium Hizmetler</div>
          <h2 className="section-title-premium">Neden Bizi Tercih Ediyorlar?</h2>
          <p className="section-subtitle-premium">
            10 yıllık uzman deneyimimizle, her biri özel olarak tasarlanmış premium hizmetler sunuyoruz. 
            <strong> Kalite, güven ve sonuç odaklı</strong> yaklaşımımızla fark yaratıyoruz.
          </p>
        </div>
        
        <div className="services-grid-premium">
          {services.map((service, index) => (
            <div key={index} className="service-card-premium">
              <div className="service-card-inner">
                <div className="service-header-premium">
                  <div 
                    className="service-icon-premium"
                    style={{ 
                      background: service.gradient,
                      boxShadow: `0 8px 32px ${service.color}40`
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="service-title-premium">{service.title}</h3>
                </div>
                
                <p className="service-description-premium">{service.description}</p>
                
                <div className="service-features-premium">
                  <h4>Hizmet Kapsamı:</h4>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="feature-item-premium">
                      <span className="feature-check" style={{ color: service.color }}>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  className="service-btn-premium"
                  style={{ 
                    '--btn-color': service.color,
                    '--btn-gradient': service.gradient
                  }}
                >
                  <span>Detaylı Bilgi Alın</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
              
              <div className="service-card-glow" style={{ background: service.gradient }}></div>
            </div>
          ))}
        </div>
        
        <div className="services-cta-premium">
          <div className="cta-content-premium">
            <h3>Özel Çözümünüzü Birlikte Geliştirelim</h3>
            <p>İhtiyaçlarınıza özel çözümler için uzman ekibimizle görüşün</p>
            <button className="btn btn-primary-premium">
              Ücretsiz Danışmanlık Alın
              <span className="btn-icon">🎯</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;