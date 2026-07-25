import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  ['01', 'Servis ve Bakım', 'Periyodik bakım, arıza tespiti ve yerinde teknik destek.'],
  ['02', 'Satış', 'İhtiyacınıza uygun, verimli kompresör sistemleri.'],
  ['03', 'Yedek Parça', 'Hızlı tedarik ve güvenilir orijinal parça çözümleri.'],
  ['04', 'İkinci El', 'Kontrolleri tamamlanmış, güvenilir ikinci el seçenekler.'],
];

function IndexPage() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow light">BASINÇLI HAVA SİSTEMLERİ</p>
          <h1>Endüstriniz için<br /><em>kesintisiz güç.</em></h1>
          <p className="hero-copy">Kompresör sistemlerinde satış, bakım ve teknik servis çözümlerini tek çatı altında sunuyoruz.</p>
          <div className="hero-actions">
            <Link className="button button-gold" to="/iletisim">Teklif Al <span>→</span></Link>
            <Link className="button button-outline" to="/urunler">Ürünleri İncele</Link>
          </div>
        </div>
        <div className="hero-scroll">Aşağı kaydır <span /> </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <div><strong>25+</strong><span>Yıllık teknik deneyim</span></div>
          <div><strong>7/24</strong><span>Servis yaklaşımı</span></div>
          <div><strong>360°</strong><span>Uçtan uca çözüm</span></div>
        </div>
      </section>

      <section className="section section-intro">
        <div className="container intro-grid">
          <div className="image-frame"><img src="/assets/images/ab1.jpg" alt="Eymen Kompresör teknik çalışma alanı" /></div>
          <div className="intro-copy">
            <p className="eyebrow">BİZ KİMİZ?</p>
            <h2>İşletmenizin havasını <em>güvenle</em> yönetiyoruz.</h2>
            <p>Basınçlı hava sistemlerinde yıllara dayanan tecrübemizle, işletmelerin verimliliğini artıran güvenilir çözümler üretiyoruz. Her projede doğru ekipman, doğru servis ve sürdürülebilir sonuç hedefliyoruz.</p>
            <Link to="/hakkimizda" className="text-link">Bizi yakından tanıyın <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">HİZMET ALANLARIMIZ</p><h2>Teknik ihtiyacınızın<br />her adımında yanınızdayız.</h2></div><p>Uzman ekibimiz, sisteminizin sürekliliği için ihtiyacınız olan desteği hızlı ve planlı biçimde sunar.</p></div>
          <div className="service-grid">
            {services.map(([number, title, text]) => <article className="service-card" key={number}><span className="service-number">{number}</span><h3>{title}</h3><p>{text}</p><Link to={title === 'İkinci El' ? '/ikinciel' : '/iletisim'} aria-label={`${title} hakkında bilgi al`}>→</Link></article>)}
          </div>
        </div>
      </section>

      <section className="product-callout">
        <div className="container product-callout-grid"><div><p className="eyebrow light">ÜRÜN KATALOĞU</p><h2>İhtiyacınıza uygun<br />çözümü birlikte seçelim.</h2></div><Link className="button button-gold" to="/urunler">Kataloğu Görüntüle <span>→</span></Link></div>
      </section>
    </main>
  );
}

export default IndexPage;
