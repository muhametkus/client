import React from 'react'
import { Link } from 'react-router-dom'

function Pistonlu_comp() {
  const products = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `ÜRÜN ${i + 1}`,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit hic odio.'
  }))

  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Pistonlu Kompresör</h1>
          <nav className="page-breadcrumb" aria-label="Sayfa yolu">
            <Link to="/">Anasayfa</Link>
            <span className="sep">/</span>
            <Link to="/urunler">Ürünler</Link>
            <span className="sep">/</span>
            <span className="current">Pistonlu Kompresör</span>
          </nav>
        </div>
      </section>

      <div className="w3-services py-5">
        <div className="container py-lg-4">
          <div className="title-content text-center mb-lg-5 mb-4">
            <h6 className="sub-title">Ürünlerimiz</h6>
            <h3 className="hny-title">Pistonlu Kompresör Kataloğumuz</h3>
          </div>
          <div className="row">
            {products.map(product => (
              <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
                <div className="causes-grid-info">
                  <Link to="#"><img src="assets/images/urun1.jpg" alt={product.name} /></Link>
                  <Link to="#" className="cause-title-wrap">
                    <h4 className="cause-title">{product.name}</h4>
                  </Link>
                  <p className="card-text">{product.desc}</p>
                  <Link to="#" className="btn-style mt-4">Ürünü İncele</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pistonlu_comp
