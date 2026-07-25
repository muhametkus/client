import React from 'react'
import { Link } from 'react-router-dom'

function Urunler_comp() {
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Ürünler</h1>
          <nav className="page-breadcrumb" aria-label="Sayfa yolu">
            <Link to="/">Anasayfa</Link>
            <span className="sep">/</span>
            <span className="current">Ürünler</span>
          </nav>
        </div>
      </section>

      <div className="w3-services py-5">
        <div className="container py-lg-4">
          <div className="title-content text-center mb-lg-5 mb-4">
            <h6 className="sub-title">Ürünlerimiz</h6>
            <h3 className="hny-title">Ürün Kataloğumuz</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="causes-grid-info">
                <Link to="/vidali"><img src="assets/images/vidali.jpg" alt="Vidalı Kompresörler" /></Link>
                <Link to="/vidali" className="cause-title-wrap">
                  <h4 className="cause-title">Vidalı Kompresörler</h4>
                </Link>
                <p className="card-text">Vidalı kompresör kataloğumuzu inceleyin.</p>
                <Link to="/vidali" className="btn-style mt-4">Kataloğu İncele</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="causes-grid-info">
                <Link to="/pistonlu"><img src="assets/images/pistonlu.jpg" alt="Pistonlu Kompresörler" /></Link>
                <Link to="/pistonlu" className="cause-title-wrap">
                  <h4 className="cause-title">Pistonlu Kompresörler</h4>
                </Link>
                <p className="card-text">Pistonlu kompresör kataloğumuzu inceleyin.</p>
                <Link to="/pistonlu" className="btn-style mt-4">Kataloğu İncele</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="causes-grid-info">
                <Link to="/ikinciel"><img src="assets/images/kmps.jpg" alt="İkinci El Kompresörler" /></Link>
                <Link to="/ikinciel" className="cause-title-wrap">
                  <h4 className="cause-title">İkinci El Kompresörler</h4>
                </Link>
                <p className="card-text">İkinci el kompresör kataloğumuzu inceleyin.</p>
                <Link to="/ikinciel" className="btn-style mt-4">Kataloğu İncele</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Urunler_comp
