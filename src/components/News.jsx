import React from 'react';

const News = () => {
  const news = [
    {
      date: '15 Mart 2025',
      title: '2025 Yılı MTSK Kayıtları Başladı',
      excerpt: 'Yeni dönem MTSK kayıtları için başvurular başlamıştır. Detaylı bilgi ve kayıt işlemleri için uzman ekibimizle iletişime geçin.',
      category: 'Duyuru',
      readTime: '2 dk',
      image: '/assets/news/kayitlar.jpg',
      tags: ['MTSK', 'Kayıt', '2025'],
      featured: true
    },
    {
      date: '10 Şubat 2025',
      title: 'Metunic ile Stratejik İş Birliği',
      excerpt: 'Metunic firması ile gerçekleştirdiğimiz stratejik iş birliği kapsamında dijital dönüşüm projeleri başlatılmıştır.',
      category: 'İş Birliği',
      readTime: '3 dk',
      image: '/assets/news/isbirligi.jpg',
      tags: ['İş Birliği', 'Metunic', 'Dijital'],
      featured: false
    },
    {
      date: '25 Ocak 2025',
      title: 'MTSK Dijital Takip Modülü Tanıtıldı',
      excerpt: 'MTSK yönetim süreçlerini tamamen dijitalleştiren yeni takip modülümüz kullanıma sunulmuştur.',
      category: 'Teknoloji',
      readTime: '4 dk',
      image: '/assets/news/dijital.jpg',
      tags: ['Teknoloji', 'Dijital', 'MTSK'],
      featured: true
    }
  ];

  const categories = ['Tümü', 'Duyuru', 'İş Birliği', 'Teknoloji', 'Eğitim'];

  return (
    <section id="news" className="section news-section-premium">
      <div className="container">
        <div className="section-header-premium">
          <div className="section-badge">Güncel Haberler</div>
          <h2 className="section-title-premium">Haberler & Duyurular</h2>
          <p className="section-subtitle-premium">
            Sektördeki yenilikler, iş birlikleri ve önemli gelişmelerden haberdar olun. 
            En güncel bilgiler burada.
          </p>
        </div>
        
        <div className="news-categories-premium">
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`category-btn ${index === 0 ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="news-grid-premium">
          {news.map((item, index) => (
            <article key={index} className={`news-card-premium ${item.featured ? 'featured' : ''}`}>
              <div className="news-image-container-premium">
                <div className="news-image-placeholder-premium">
                  <span className="image-icon">📰</span>
                </div>
                
                <div className="news-overlay-premium">
                  {item.featured && (
                    <span className="featured-badge">🔥 Öne Çıkan</span>
                  )}
                  <span className="news-category-premium">{item.category}</span>
                  <div className="news-meta-premium">
                    <span className="news-date-premium">{item.date}</span>
                    <span className="news-read-time-premium">{item.readTime} okuma</span>
                  </div>
                </div>
              </div>
              
              <div className="news-content-premium">
                <h3 className="news-title-premium">{item.title}</h3>
                <p className="news-excerpt-premium">{item.excerpt}</p>
                
                <div className="news-tags-premium">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="news-tag-premium">#{tag}</span>
                  ))}
                </div>
                
                <div className="news-actions-premium">
                  <button className="news-read-btn-premium">
                    <span>Devamını Oku</span>
                    <span className="btn-arrow">→</span>
                  </button>
                  <button className="news-share-btn-premium">
                    <span>Paylaş</span>
                    <span className="share-icon">📤</span>
                  </button>
                </div>
              </div>
              
              <div className="news-glow"></div>
            </article>
          ))}
        </div>
        
        <div className="news-cta-premium">
          <div className="cta-content-premium">
            <div className="cta-icon">📰</div>
            <h3>Tüm Haberleri Görüntüleyin</h3>
            <p>Daha fazla güncel haber, sektör analizi ve uzman görüşleri için haber arşivimizi ziyaret edin.</p>
            <button className="btn btn-primary-premium btn-large">
              <span>Tüm Haberleri Gör</span>
              <span className="btn-icon">📚</span>
            </button>
          </div>
          <div className="cta-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default News;