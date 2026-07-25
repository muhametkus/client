import React from 'react'
import { Link } from 'react-router-dom'

function IkinciEl_comp() {
  const products = [
    {
      id: 1, name: 'AAG AIR DRYERS',
      desc: 'AAG AIR DRYERS KURUTUCU 2200 LT SIFIR SET',
      url: 'https://www.sahibinden.com/ilan/is-makineleri-sanayi-sanayi-kompresor-eymen-kompresor-aag-air-dryers-1063552749/detay',
      img: 'https://i0.shbdn.com/photos/55/27/49/x16_1063552749bk7.jpg'
    },
    {
      id: 2, name: '2. EL VİDA GRUPLARI',
      desc: '2. EL AZ KULLANILMIŞ TEMİZ KOMPLE REVİZYONLU VİDA',
      url: 'https://www.sahibinden.com/ilan/is-makineleri-sanayi-sanayi-kompresor-eymen-kompresor-2-el-vida-gruplari-1063545722/detay',
      img: 'https://i0.shbdn.com/photos/54/57/22/x16_1063545722b7f.jpg'
    },
    {
      id: 3, name: 'DALGAKIRAN TIDY 10',
      desc: 'DALGAKIRAN TIDY 10 VİDALI KOMPRESÖR 500 LİTRE TANK - KURUTUCULU SET',
      url: 'https://www.sahibinden.com/ilan/is-makineleri-sanayi-sanayi-kompresor-eymen-kompresor-dalgakiran-tidy-10-1063461586/detay',
      img: 'https://eymenkompresor.com/assets/images/kmps.jpg'
    },
  ]

  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>İkinci El Kompresör</h1>
          <nav className="page-breadcrumb" aria-label="Sayfa yolu">
            <Link to="/">Anasayfa</Link>
            <span className="sep">/</span>
            <Link to="/urunler">Ürünler</Link>
            <span className="sep">/</span>
            <span className="current">İkinci El</span>
          </nav>
        </div>
      </section>

      <div className="w3-services py-5">
        <div className="container py-lg-4">
          <div className="title-content text-center mb-lg-5 mb-4">
            <h6 className="sub-title">Ürünlerimiz</h6>
            <h3 className="hny-title">İkinci El Kompresör Kataloğumuz</h3>
          </div>
          <div className="row">
            {products.map(product => (
              <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
                <div className="causes-grid-info">
                  <a href={product.url} target="_blank" rel="noopener noreferrer">
                    <img src={product.img} alt={product.name} />
                  </a>
                  <a href={product.url} target="_blank" rel="noopener noreferrer" className="cause-title-wrap">
                    <h4 className="cause-title">{product.name}</h4>
                  </a>
                  <p className="card-text">{product.desc}</p>
                  <a href={product.url} target="_blank" rel="noopener noreferrer" className="btn-style mt-4">Ürünü İncele</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IkinciEl_comp
