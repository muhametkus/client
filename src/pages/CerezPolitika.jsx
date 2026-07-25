import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function CerezPolitika() {
  return (
    <div>
      <Navbar />
      <section className="page-header">
        <div className="container">
          <h1>Çerez Politikası</h1>
          <nav className="page-breadcrumb" aria-label="Sayfa yolu">
            <Link to="/">Anasayfa</Link>
            <span className="sep">/</span>
            <span className="current">Çerez Politikası</span>
          </nav>
        </div>
      </section>
      <div className="container">
        <div className="cerez-politika">
          <strong>Çerez Politikamız</strong>
          <p>Son Güncellenme Tarihi: 07/08/2023</p>
          <p>Biz, Eymen Kompresör olarak, gizliliğinizi korumak ve çevrimiçi deneyiminizi geliştirmek amacıyla çerezleri kullanmaktayız. Bu Çerez Politikası, çerezlerin ne olduğunu, neden kullanıldığını ve çerez ayarlarınızı nasıl yönetebileceğinizi açıklar.</p>

          <strong>Çerez Nedir?</strong>
          <p>Çerezler, cihazınıza kaydedilen küçük metin dosyalarıdır. Web sitemizi daha etkin bir şekilde kullanabilmeniz ve deneyiminizi kişiselleştirebilmemiz için kullanılırlar.</p>

          <strong>Hangi Tür Çerezleri Kullanıyoruz?</strong>
          <p><strong>Zorunlu Çerezler:</strong> Web sitemizin temel işlevlerini etkinleştiren çerezlerdir.</p>
          <p><strong>Performans Çerezleri:</strong> Anonim kullanım bilgilerini toplayarak web sitemizin performansını geliştiren çerezlerdir.</p>
          <p><strong>Fonksiyonel Çerezler:</strong> Geçmiş ziyaretlerinize dayanarak kişiselleştirilmiş deneyim sunmamıza yardımcı olan çerezlerdir.</p>

          <strong>Çerez Tercihleriniz</strong>
          <p>Çerezleri kabul etmek veya reddetmek size bağlıdır. Tarayıcınızın ayarlarından çerez tercihlerinizi yönetebilirsiniz.</p>

          <strong>İletişim</strong>
          <p>Eğer çerez politikamız veya gizlilik uygulamalarımız hakkında sorularınız varsa, lütfen info@eymenkompresor.com adresinden bizimle iletişime geçmekten çekinmeyin.</p>
          <p>Saygılarımızla,<br />Eymen Kompresör</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CerezPolitika
