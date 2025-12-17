import React from 'react';

const MiniNews = () => {
  const miniNews = [
    {
      id: 1,
      title: '2025 Yılı MTSK Kayıtları Başladı',
      date: '15 Mart 2025',
      category: 'Duyuru',
      readTime: '2 dk'
    },
    {
      id: 2,
      title: 'Metunic ile Stratejik İş Birliği',
      date: '10 Şubat 2025',
      category: 'İş Birliği',
      readTime: '3 dk'
    },
    {
      id: 3,
      title: 'MTSK Dijital Takip Modülü Tanıtıldı',
      date: '25 Ocak 2025',
      category: 'Teknoloji',
      readTime: '4 dk'
    }
  ];

  return (
    <div className="mini-news-grid">
      {miniNews.map((news) => (
        <div key={news.id} className="mini-news-card">
          <div className="mini-news-badge">{news.category}</div>
          <h4 className="mini-news-title">{news.title}</h4>
          <div className="mini-news-meta">
            <span className="mini-news-date">{news.date}</span>
            <span className="mini-news-time">{news.readTime}</span>
          </div>
          <button className="mini-news-read-btn">
            Detaylı Oku
            <span className="btn-arrow">→</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default MiniNews;