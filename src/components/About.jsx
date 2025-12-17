import React from 'react';

const About = () => {
  const values = [
    {
      title: 'Güvenilirlik',
      description: 'Müşterilerimizle olan ilişkilerimizde şeffaf ve güvenilir bir iletişim kurmayı temel prensip olarak benimsiyoruz. Her projede söz verdiğimiz değeri sunmak için çalışıyoruz.',
      icon: '🛡️',
      color: '#ff6b35'
    },
    {
      title: 'Şeffaflık',
      description: 'Tüm süreçlerde açık ve şeffaf bir yaklaşım sergileyerek, müşterilerimizin her aşamadan haberdar olmasını sağlıyoruz. Gizli maliyet veya sürpriz yok.',
      icon: '🔍',
      color: '#e55a2b'
    },
    {
      title: 'Sürdürülebilir Başarı',
      description: 'Kısa vadeli çözümler yerine, uzun vadeli ve sürdürülebilir başarı odaklı stratejiler geliştiriyoruz. Müşterilerimizin sürekli büyümesini hedefliyoruz.',
      icon: '📈',
      color: '#dc2626'
    }
  ];

  const reasons = [
    {
      number: '01',
      title: '2015\'ten Beri Deneyim',
      description: '10 yılı aşkın sektör deneyimimizle en karmaşık sorunlara bile çözüm üretiyoruz.',
      icon: '📅'
    },
    {
      number: '02',
      title: 'Uzman Ekip',
      description: 'Alanında uzmanlaşmış deneyimli ekibimizle size en iyi hizmeti sunuyoruz.',
      icon: '👨‍💼'
    },
    {
      number: '03',
      title: 'Sonuç Odaklı',
      description: 'Sadece süreç değil, somut sonuçlar odaklı çalışıyor ve başarınızı garantiliyoruz.',
      icon: '🎯'
    },
    {
      number: '04',
      title: 'Bütünsel Yaklaşım',
      description: 'Tek bir hizmet değil, işletmenizin tüm ihtiyaçlarına yönelik bütünsel çözümler sunuyoruz.',
      icon: '🔄'
    }
  ];

  return (
    <section id="about" className="section about-section-premium">
      <div className="container">
        <div className="section-header-premium">
          <div className="section-badge">Hakkımızda</div>
          <h2 className="section-title-premium">Neden Bizi Tercih Ediyorlar?</h2>
          <p className="section-subtitle-premium">
            <strong>Avrasya Danışmanlık</strong> olarak, <strong>2015'ten beri</strong> yüzlerce müşteriye 
            kaliteli hizmet sunduk. İşte bizi farklı kılan premium özelliklerimiz:
          </p>
        </div>

        <div className="reasons-grid-premium">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card-premium">
              <div className="reason-icon">{reason.icon}</div>
              <div className="reason-number">{reason.number}</div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
              <div className="reason-glow"></div>
            </div>
          ))}
        </div>

        <div className="about-content-premium">
          <div className="about-text-premium">
            <div className="about-header">
              <h3>Avrasya Danışmanlık Hakkında</h3>
              <div className="accent-line"></div>
            </div>
            
            <p>
              <strong>Avrasya Danışmanlık</strong>, kurumsal yönetim, trafik eğitimi, sürücü kursu (MTSK) ve 
              proje danışmanlığı alanlarında uzmanlaşmış köklü bir Türk firmasıdır. 
              <strong> 2015'ten bu yana</strong> en karmaşık iş zorluklarına çözüm üretiyoruz.
            </p>
            
            <div className="about-features">
              <div className="feature-item">
                <span className="feature-icon">🎯</span>
                <span>Stratejik Danışmanlık</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🚀</span>
                <span>Dijital Dönüşüm</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <span>Süreç Optimizasyonu</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🌟</span>
                <span>Kalite Standartları</span>
              </div>
            </div>
            
            <p>
              Uzman kadromuz ve sektör tecrübemizle, işletmenizin büyümesine ve verimliliğine 
              katkıda bulunuyoruz. Modern teknolojiler ve kanıtlanmış metodolojilerle, 
              müşterilerimize rekabet avantajı sağlıyoruz.
            </p>
          </div>
          
          <div className="values-section-premium">
            <div className="values-header">
              <h3>Değerlerimiz</h3>
              <p>İş yapış şeklimizin temelini oluşturan premium değerler</p>
            </div>
            
            <div className="values-grid-premium">
              {values.map((value, index) => (
                <div key={index} className="value-card-premium">
                  <div 
                    className="value-icon-premium"
                    style={{ 
                      background: `linear-gradient(135deg, ${value.color} 0%, ${value.color}99 100%)`,
                      boxShadow: `0 8px 32px ${value.color}40`
                    }}
                  >
                    {value.icon}
                  </div>
                  
                  <div className="value-content-premium">
                    <h4 className="value-title-premium">{value.title}</h4>
                    <p className="value-description-premium">{value.description}</p>
                  </div>
                  
                  <div className="value-glow" style={{ background: value.color }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-stats-premium">
          <div className="stat-item-premium">
            <div className="stat-icon-premium">📅</div>
            <div className="stat-number-premium">2015</div>
            <div className="stat-label-premium">Danışmanlık Başlangıcı</div>
          </div>
          <div className="stat-item-premium">
            <div className="stat-icon-premium">😊</div>
            <div className="stat-number-premium">50+</div>
            <div className="stat-label-premium">Mutlu Müşteri</div>
          </div>
          <div className="stat-item-premium">
            <div className="stat-icon-premium">🚀</div>
            <div className="stat-number-premium">15+</div>
            <div className="stat-label-premium">Tamamlanan Proje</div>
          </div>
          <div className="stat-item-premium">
            <div className="stat-icon-premium">⭐</div>
            <div className="stat-number-premium">%100</div>
            <div className="stat-label-premium">Memnuniyet Oranı</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;