import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Avrasya Danışmanlık sayesinde MTSK süreçlerimizi tamamen dijitalleştirdik. Profesyonel yaklaşımları, hızlı çözüm üretme becerileri ve müşteri odaklı hizmet anlayışları için teşekkür ederiz. Kesinlikle tavsiye ediyoruz.",
      author: "Ahmet Yılmaz",
      company: "Elif MTSK Kurucusu",
      rating: 5,
      project: "Dijital Dönüşüm Projesi",
      avatar: "A",
      since: "2021",
      verified: true
    },
    {
      text: "Kurumsal danışmanlık hizmeti aldık. Süreç yönetimi, stratejik planlama ve operasyonel verimlilik konusunda oldukça başarılı bir ekip. İşletmemizin büyümesine önemli katkıları oldu.",
      author: "Mehmet Demir",
      company: "Metunic Proje Müdürü",
      rating: 5,
      project: "Kurumsal Danışmanlık",
      avatar: "M",
      since: "2020",
      verified: true
    },
    {
      text: "Eğitim ve belgelendirme süreçlerimizde her zaman yanımızdalar. Güvenilir, profesyonel ve sonuç odaklı hizmet anlayışları takdire şayan. 3 yıldır güvenle çalışıyoruz.",
      author: "Ayşe Kaya",
      company: "Natro İnsan Kaynakları",
      rating: 5,
      project: "Eğitim Yönetimi",
      avatar: "A",
      since: "2022",
      verified: true
    }
  ];

  const stats = [
    { number: '4.9/5', label: 'Ortalama Puan', icon: '⭐' },
    { number: '50+', label: 'Memnun Müşteri', icon: '😊' },
    { number: '%98', label: 'Tekrar Çalışma Oranı', icon: '🔄' },
    { number: '10+', label: 'Yıllık Deneyim', icon: '🎯' }
  ];

  return (
    <section id="testimonials" className="section testimonials-section-premium">
      <div className="container">
        <div className="section-header-premium">
          <div className="section-badge">Müşteri Deneyimleri</div>
          <h2 className="section-title-premium">Müşterilerimizin Gözünden</h2>
          <p className="section-subtitle-premium">
            Gerçek müşteri deneyimleri ve memnuniyet hikayeleri. 
            Neden bizi tercih ettiklerini kendi ağızlarından dinleyin.
          </p>
        </div>
        
        <div className="testimonials-grid-premium">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card-premium">
              <div className="testimonial-header-premium">
                <div className="client-avatar-premium">
                  <span>{testimonial.avatar}</span>
                </div>
                
                <div className="client-info-premium">
                  <h3 className="client-name-premium">{testimonial.author}</h3>
                  <p className="client-company-premium">{testimonial.company}</p>
                  <div className="client-project-premium">
                    <span className="project-badge">{testimonial.project}</span>
                    <span className="client-since">{testimonial.since}'den beri</span>
                  </div>
                </div>
                
                <div className="rating-stars-premium">
                  {'⭐'.repeat(testimonial.rating)}
                  <span className="rating-text">{testimonial.rating}.0</span>
                </div>
              </div>
              
              <div className="testimonial-content-premium">
                <div className="quote-icon-premium">"</div>
                <p className="testimonial-text-premium">{testimonial.text}</p>
              </div>
              
              <div className="testimonial-footer-premium">
                {testimonial.verified && (
                  <div className="verified-badge-premium">
                    <span className="verified-icon">✅</span>
                    <span>Doğrulanmış Yorum</span>
                  </div>
                )}
                <div className="testimonial-date">2 gün önce</div>
              </div>
              
              <div className="testimonial-glow"></div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-stats-premium">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item-premium">
              <div className="stat-icon-premium">{stat.icon}</div>
              <div className="stat-number-premium">{stat.number}</div>
              <div className="stat-label-premium">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-cta-premium">
          <div className="cta-content-premium">
            <h3>Başarı Hikayenize Birlikte İmza Atalım</h3>
            <p>Binlerce mutlu müşterimiz arasına katılın ve işinizi büyütün</p>
            <button className="btn btn-primary-premium">
              Ücretsiz Danışmanlık Alın
              <span className="btn-icon">🚀</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;