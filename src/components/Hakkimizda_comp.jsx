import React from 'react'
import { Link } from 'react-router-dom'

function Hakkimizda_comp() {
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Hakkımızda</h1>
          <nav className="page-breadcrumb" aria-label="Sayfa yolu">
            <Link to="/">Anasayfa</Link>
            <span className="sep">/</span>
            <span className="current">Hakkımızda</span>
          </nav>
        </div>
      </section>

      <section className="w3l-content-4">
        <div className="content-4-main py-5">
          <div className="container py-lg-4">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img src="assets/images/hakkimizda.jpg" className="img-fluid" alt="Hakkımızda" />
              </div>
              <div className="col-lg-6 pl-lg-5 mt-4 mt-lg-0">
                <div className="title-content text-left">
                  <h6 className="sub-title">Hakkımızda</h6>
                  <h3 className="hny-title">
                    Elektrik, Mekanik Bakım Arıza Hizmetleri Konusunda Hizmet Veriyoruz.
                  </h3>
                </div>
                <p className="mt-3">
                  25 yıllık elektrik – mekanik bakım, onarım ve arıza hizmetleri geçmişimizi de yanımıza alıp
                  basınçlı hava sistemleri hususunda 2020 yılı itibari ile Eymen Kompresör olarak yeni ismimiz
                  ile yolumuza devam edeceğiz. Altyapımız olan elektrik - mekanik bakım servis hizmetlerindeki
                  bilgi ve birikimimizi ana konu kompresör olacak şekilde sabitliyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-team-main py-5">
        <div className="container py-lg-4">
          <div className="title-content text-center">
            <h6 className="sub-title">Ekibimiz</h6>
            <h3 className="hny-title">Deneyimli Ekibimiz İle Hizmetinizdeyiz</h3>
          </div>
          <div className="row mt-4">
            <div className="col-md-3 col-6 mb-4">
              <div className="team-grids text-center">
                <img src="assets/images/team1.jpg" className="img-fluid" alt="Kemal" />
                <div className="team-info">
                  <div className="caption">
                    <h4>Kemal</h4>
                    <h6>Tekniker</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="team-grids text-center">
                <img src="assets/images/team2.jpg" className="img-fluid" alt="Zara Conner" />
                <div className="team-info">
                  <div className="caption">
                    <h4>Zara Conner</h4>
                    <h6>Tekniker</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="team-grids text-center">
                <img src="assets/images/team3.jpg" className="img-fluid" alt="John Chater" />
                <div className="team-info">
                  <div className="caption">
                    <h4>John Chater</h4>
                    <h6>Tekniker</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="team-grids text-center">
                <img src="assets/images/team4.jpg" className="img-fluid" alt="June Smith" />
                <div className="team-info">
                  <div className="caption">
                    <h4>June Smith</h4>
                    <h6>Tekniker</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hakkimizda_comp
