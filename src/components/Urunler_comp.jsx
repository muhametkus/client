import React from 'react'

function Urunler_comp() {
  return (
    <div>
  <section className="w3l-about-breadcrumb position-relative text-center">
    <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
      <div className="container py-lg-5 py-3">
        <h2 className="title">Ürünler</h2>
        <ul className="breadcrumbs-custom-path mt-2">
          <li><a href="/">Anasayfa</a></li>
          <li className="active"><span className="fa fa-angle-double-right mx-2" aria-hidden="true" /> Ürünler </li>
        </ul>
      </div>
    </div>
  </section>
  {/* //about breadcrumb */}
  {/*/services-sec*/}
  <div className="w3-services py-5">
    <div className="container py-lg-4">
      <div className="title-content text-left mb-lg-5 mb-4">
        <h6 className="sub-title">ÜRÜNLERİMİZ</h6>
        <h3 className="hny-title">Ürün Katoloğumuz</h3>
        <p />
      </div>
      <div className="row w3-services-grids">
        <div className="col-lg-4 col-md-6 causes-grid">
          <div className="causes-grid-info">
            <a href="vidali"><img src="assets/images/vidali.jpg" className="img-fuild" alt="" /></a>
            <a href="vidali" className="cause-title-wrap">
              <h4 className="cause-title">Vidalı Kompresorler
              </h4>
            </a>
            <p className="card-text mb-0">Vidalı kompresor katoloğumuzu inceleyin. 
            </p>
            <a href="vidali" className="btn btn-style btn-primary mt-4">Katoloğu İncele</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 causes-grid">
          <div className="causes-grid-info">
            <a href="pistonlu"><img src="assets/images/pistonlu.jpg" className="img-fuild" alt="" /></a>
            <a href="pistonlu" className="cause-title-wrap">
              <h4 className="cause-title">Pistonlu Kompresorler
              </h4>
            </a>
            <p className="card-text mb-0">Pistonlu kompresor katoloğumuzu inceleyin. 
            </p>
            <a href="pistonlu" className="btn btn-style btn-primary mt-4">Katoloğu İncele</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 causes-grid">
          <div className="causes-grid-info">
            <a href="ikinciel"><img src="assets/images/kmps.jpg" className="img-fuild" alt="" /></a>
            <a href="ikinciel" className="cause-title-wrap">
              <h4 className="cause-title">İkinci El Kompresorler
              </h4>
            </a>
            <p className="card-text mb-0">İkinci el kompresor katoloğumuzu inceleyin. 
            </p>
            <a href="ikinciel" className="btn btn-style btn-primary mt-4">Katoloğu İncele</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Urunler_comp