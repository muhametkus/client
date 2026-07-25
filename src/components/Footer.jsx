import React from 'react'
import { Link } from 'react-router-dom';
import Cookies from './Cookies';

function Footer() {
  const suankiYil = new Date().getFullYear();

  window.onscroll = function () {
    scrollFunction()
  };

  function scrollFunction() {
    const movetop = document.getElementById("movetop");
    if (movetop) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        movetop.style.display = "flex";
      } else {
        movetop.style.display = "none";
      }
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <footer className="w3l-footer-66">
      <Cookies />
      <section className="footer-inner-main">
        <div className="footer-hny-grids py-5">
          <div className="container py-lg-4">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <h2>
                  <Link className="navbar-brand" to="/">
                    Eymen Kompresor
                  </Link>
                </h2>
                <p className="pr-lg-4 mt-3">
                  Eymen Teknik olarak 2019 yılında büyük olan
                  bu bütünün en küçük parçası olarak 20 m² ile başladık.
                  Bir yıl gibi kısa sürede kendisini geliştirerek üst seviyede
                  hizmet sunmak için 120 m² kapalı alanı ile yeni yerimize geçmiş bulunmaktayız.
                </p>
                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/yusuf.eymen.399488" target="_blank" rel="noopener noreferrer">
                      <span className="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/eymen_kompresor" target="_blank" rel="noopener noreferrer">
                      <span className="fa fa-instagram" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://eymenkompresor.sahibinden.com/" target="_blank" rel="noopener noreferrer">
                      <span className="fa fa-s" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h6>Sayfalar</h6>
                <ul className="footer-menu-linkler-ul">
                  <li>
                    <Link to="/">
                      <span className="fa fa-angle-double-right mr-2" /> Anasayfa
                    </Link>
                  </li>
                  <li>
                    <Link to="/hakkimizda">
                      <span className="fa fa-angle-double-right mr-2" /> Hakkımızda
                    </Link>
                  </li>
                  <li>
                    <Link to="/urunler">
                      <span className="fa fa-angle-double-right mr-2" /> Ürünler
                    </Link>
                  </li>
                  <li>
                    <Link to="/iletisim">
                      <span className="fa fa-angle-double-right mr-2" /> İletişim
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h6>Ürünler</h6>
                <ul className="footer-menu-linkler-ul">
                  <li>
                    <Link to="/vidali">
                      <span className="fa fa-angle-double-right mr-2" /> Vidalı Kompresörler
                    </Link>
                  </li>
                  <li>
                    <Link to="/pistonlu">
                      <span className="fa fa-angle-double-right mr-2" /> Pistonlu Kompresörler
                    </Link>
                  </li>
                  <li>
                    <Link to="/ikinciel">
                      <span className="fa fa-angle-double-right mr-2" /> İkinci El
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6">
                <h6>İletişim</h6>
                <div className="sub-contact-info">
                  <p>
                    <span className="fa fa-map-marker mr-2" />
                    Sanayi Mh. Sanayi Cd. No:44<br />
                    Kurtköy San. Sit. B/81<br />
                    Pendik / İstanbul
                  </p>
                  <p>
                    <span className="fa fa-phone mr-2" />
                    <a href="tel:+902163970262">0 216 307 07 19</a>
                  </p>
                  <p>
                    <span className="fa fa-mobile mr-2" />
                    <a href="tel:+905443566681">0 544 356 66 81</a>
                  </p>
                  <p>
                    <span className="fa fa-envelope mr-2" />
                    <a href="mailto:info@eymenkompresor.com">info@eymenkompresor.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="below-section">
          <div className="container">
            <div className="copyright-footer">
              <p>© {suankiYil} Eymen Kompresor. Tüm hakları saklıdır.</p>
              <ul>
                <li><Link to="/cerezpolitikasi">Çerez Politikası</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <button onClick={topFunction} id="movetop" title="Yukarı çık">
          <span className="fa fa-long-arrow-up" aria-hidden="true" />
        </button>
      </section>
    </footer>
  )
}

export default Footer
