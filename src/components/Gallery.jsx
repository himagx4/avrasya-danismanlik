import React from 'react';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'MTSK Eğitimleri',
      description: 'Profesyonel sürücü kursu eğitimleri',
      icon: '🎓'
    },
    {
      id: 2,
      title: 'Kurumsal Toplantılar',
      description: 'Stratejik planlama toplantıları',
      icon: '💼'
    },
    {
      id: 3,
      title: 'Dijital Çözümler',
      description: 'Teknoloji entegrasyon projeleri',
      icon: '🌐'
    },
    {
      id: 4,
      title: 'Başarı Hikayeleri',
      description: 'Mutlu müşteri referansları',
      icon: '⭐'
    },
    {
      id: 5,
      title: 'Ekip Çalışmaları',
      description: 'Uzman kadromuz ile çalışmalar',
      icon: '👥'
    },
    {
      id: 6,
      title: 'Sertifika Törenleri',
      description: 'Başarı belgelendirme etkinlikleri',
      icon: '🏆'
    }
  ];

  return (
    <section id="gallery" className="section gallery-section-premium">
      <div className="container">
        <div className="section-header-premium">
          <div className="section-badge">Galeri</div>
          <h2 className="section-title-premium">Çalışmalarımızdan Kareler</h2>
          <p className="section-subtitle-premium">
            Profesyonel hizmet süreçlerimiz, etkinliklerimiz ve başarı hikayelerimizden 
            özel anları burada bulabilirsiniz.
          </p>
        </div>
        
        <div className="gallery-grid-premium">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item-premium">
              <div className="gallery-image-premium">
                <div className="gallery-placeholder-premium">
                  <span className="gallery-icon">{item.icon}</span>
                </div>
                <div className="gallery-overlay-premium">
                  <h3 className="gallery-title-premium">{item.title}</h3>
                  <p className="gallery-description-premium">{item.description}</p>
                  <button className="gallery-view-btn">
                    <span>Görüntüle</span>
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>
              <div className="gallery-glow"></div>
            </div>
          ))}
        </div>
        
        <div className="gallery-cta-premium">
          <div className="cta-content-premium">
            <h3>Daha Fazla Çalışmamızı Görün</h3>
            <p>Tüm projelerimizi ve referanslarımızı inceleyin</p>
            <button className="btn btn-secondary-premium">
              <span>Tam Galeriyi Görüntüle</span>
              <span className="btn-icon">🖼️</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;