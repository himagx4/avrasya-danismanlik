import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert('Mesajınız gönderildi! En kısa sürede sizinle iletişime geçeceğiz.');
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      } else {
        alert('Bir hata oluştu. Lütfen tekrar deneyin.');
      }
    }).catch(error => {
      alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Telefon',
      detail: '0541 549 1549',
      subtitle: 'Hemen Arayın',
      description: '7/24 aktif destek hattı',
      color: '#3b82f6',
      action: 'tel:05415491549'
    },
    {
      icon: '📧',
      title: 'E-posta',
      detail: 'avrasyaespdanismanlik@gmail.com',
      subtitle: 'Hızlı Yanıt',
      description: '24 saat içinde dönüş',
      color: '#10b981',
      action: 'mailto:avrasyaespdanismanlik@gmail.com'
    },
    {
      icon: '📍',
      title: 'Adres',
      detail: 'Malatya Merkez',
      subtitle: 'Merkez Ofis',
      description: 'Malatya ve çevre illerde hizmet',
      color: '#f59e0b',
      action: '#'
    }
  ];

  const services = [
    'Kurumsal Danışmanlık',
    'MTSK Yönetim Desteği',
    'Eğitim ve Belgelendirme',
    'Web ve Dijital Hizmetler',
    'Diğer'
  ];

  const features = [
    { icon: '⚡', text: '24 Saat İçinde Yanıt', description: 'Hızlı geri dönüş garantisi' },
    { icon: '🎯', text: 'Ücretsiz Danışmanlık', description: 'İlk görüşme ücretsiz' },
    { icon: '💎', text: 'Özel Çözümler', description: 'Kişiye özel stratejiler' },
    { icon: '🛡️', text: 'Güvenli İletişim', description: 'Veri güvenliği garantisi' }
  ];

  return (
    <section id="contact" className="section contact-section-premium">
      <div className="container">
        <div className="section-header-premium">
          <div className="section-badge">İletişim</div>
          <h2 className="section-title-premium">İletişime Geçin</h2>
          <p className="section-subtitle-premium">
            Profesyonel çözümlerimiz hakkında bilgi almak veya projenizi görüşmek için 
            hemen iletişime geçin. Size özel teklifimizi sunalım.
          </p>
        </div>

        {/* Büyütülmüş Özellikler */}
        <div className="contact-features-premium">
          {features.map((feature, index) => (
            <div key={index} className="feature-item-contact-premium">
              <div className="feature-icon-container">
                <span className="feature-icon-large">{feature.icon}</span>
              </div>
              <div className="feature-content-premium">
                <h4 className="feature-title-premium">{feature.text}</h4>
                <p className="feature-description-premium">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Hızlı İletişim Kanalları - ÜSTTE */}
        <div className="contact-info-premium">
          <div className="info-header-premium">
            <h3>Hızlı İletişim Kanalları</h3>
            <p>Size en uygun iletişim yöntemini seçin, hemen yardımcı olalım</p>
          </div>
          
          <div className="contact-methods-premium">
            {contactInfo.map((info, index) => (
              <a 
                key={index} 
                href={info.action}
                className="contact-method-card-premium"
              >
                <div 
                  className="method-icon-premium"
                  style={{ 
                    backgroundColor: `${info.color}15`, 
                    color: info.color,
                    border: `2px solid ${info.color}20`
                  }}
                >
                  {info.icon}
                </div>
                
                <div className="method-content-premium">
                  <h4>{info.title}</h4>
                  <p className="method-detail-premium">{info.detail}</p>
                  <p className="method-subtitle-premium">{info.subtitle}</p>
                  <p className="method-description-premium">{info.description}</p>
                </div>
                
                <div className="method-action-icon">
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Aralık Bırakma - Spacer Div */}
        <div className="contact-spacer" style={{ height: '60px' }}></div>

        {/* Özel Teklif Formu - ALTA */}
        <div className="contact-form-premium">
          <div className="form-header-premium">
            <div className="form-badge">Ücretsiz Danışmanlık</div>
            <h3>Özel Teklif Alın</h3>
            <p>Formu doldurun, 24 saat içinde sizi arayalım ve özel çözüm sunalım</p>
          </div>
          
          <form 
            action="https://formspree.io/f/mzzyzznv" 
            method="POST"
            onSubmit={handleSubmit}
            className="contact-form-content"
          >
            <input type="hidden" name="_subject" value="Avrasya Danışmanlık - Premium İletişim Formu" />
            <input type="hidden" name="_language" value="tr" />
            
            <div className="form-row-premium">
              <div className="form-group-premium">
                <label htmlFor="name">Ad Soyad *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tam adınızı yazın"
                  className="form-input-premium"
                />
              </div>
              
              <div className="form-group-premium">
                <label htmlFor="email">E-posta *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="ornek@firma.com"
                  className="form-input-premium"
                />
              </div>
            </div>
            
            <div className="form-row-premium">
              <div className="form-group-premium">
                <label htmlFor="phone">Telefon *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="05__ ___ __ __"
                  className="form-input-premium"
                />
              </div>
              
              <div className="form-group-premium">
                <label htmlFor="company">Firma Adı</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Firma veya kurum adı"
                  className="form-input-premium"
                />
              </div>
            </div>
            
            <div className="form-group-premium">
              <label htmlFor="service">İlgilendiğiniz Hizmet</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="form-select-premium"
              >
                <option value="">Hizmet seçiniz</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group-premium">
              <label htmlFor="message">Proje Detayları *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Projeniz hakkında detaylı bilgi verin..."
                rows="6"
                className="form-textarea-premium"
              />
            </div>
            
            <div className="form-actions-premium">
              <button type="submit" className="btn btn-primary-premium btn-large">
                <span className="btn-icon">📨</span>
                <span>Ücretsiz Teklif Alın</span>
              </button>
              <p className="form-note-premium">
                Formu gönderdiğinizde, <strong>KVKK Aydınlatma Metni</strong>'ni okumuş ve kabul etmiş sayılırsınız.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;