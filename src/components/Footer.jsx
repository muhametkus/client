import React from 'react'
import { Link } from 'react-router-dom';
import Cookies from './Cookies';

function Footer() {
  const suankiYil = new Date().getFullYear();
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("movetop").style.display = "block";
        } else {
            document.getElementById("movetop").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
  return (
    <footer className="w3l-footer-66">
      <Cookies/>
    <section className="footer-inner-main">
      <div className="footer-hny-grids py-5">
        <div className="container py-lg-4">
          <div className="text-txt">
            <div className="row sub-columns">
              <div className="col-lg-4 col-md-6 sub-one-left pr-lg-4">
                <h2><Link className="navbar-brand" to="/">
                    <span />Eymen Kompresor
                  </Link></h2>
                
                <p className="pr-lg-4">Eymen Teknik olarak 2019 yılında büyük olan
                  bu bütünün en Küçük parçası olarak 20 m2 ile başladık.
                  Bir yıl gibi kısa sürede kendisini geliştirerek üst seviyede
                  hizmet sunmak için 120 m2 kapalı alanı ile yeni yerimize geçmiş bulunmaktayız.</p>
                <div className="columns-2">
                  <ul className="social">
                    <li><a href="https://www.facebook.com/yusuf.eymen.399488" target="_blank"><span className="fa fa-facebook" aria-hidden="true" /></a>
                    </li>
                    <li><a href="https://www.instagram.com/eymen_kompresor" target="_blank"><span className="fa fa-instagram" aria-hidden="true" /></a>
                    </li>
                    <li><a href="#twitter" target="_blank"><span className="fa fa-twitter" aria-hidden="true" /></a>
                    </li>
                    <li><a href="https://eymenkompresor.sahibinden.com/" target="_blank"><span className="fa fa-s" aria-hidden="true" /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 sub-one-left">
                <h6>Sayfalar</h6>
                <div className="mid-footer-gd sub-two-right">
                  <ul className='footer-menu-linkler-ul'>
                    <li><a href="/"><span className="fa fa-angle-double-right mr-2" /> Anasayfa</a>
                    </li>
                    <li><Link to="/hakkimizda"><span className="fa fa-angle-double-right mr-2" /> Hakkımızda</Link>
                    </li>
                    <li><Link to="/urunler"><span className="fa fa-angle-double-right mr-2" /> Ürünler</Link>
                    </li>
                    <li><Link to="/iletisim"><span className="fa fa-angle-double-right mr-2" />İletişim</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 sub-one-left">
                <h6>İletişim Bilgilerimiz</h6>
                <div className="sub-contact-info">
                  <p>Adres: Sanayi Mh. Sanayi Cd. No:44<br/> Kurtköy San. Sit. B/81<br/>
                    Pendik / İSTANBUL</p>
                  <p className="my-3">Tel: <strong><a href="tel:+902163970262">0 216 307 07 19</a></strong></p>
                  <p>GSM:<strong> <a href="tel:+905443566681">0 544 356 66 81</a></strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="below-section">
        <div className="container">
          <div className="copyright-footer">
            <div className="columns text-lg-left">
              <p>© {suankiYil} Tüm hakları saklıdır. | Designed by <a href="https://w3layouts.com">W3layouts</a> | Kodlama: <a href="https://muhammetkus.netlify.app/" target='_blank'>Muhammet KUŞ</a></p>
            </div>
            <ul className="columns text-lg-right">
              <li><a href="#">Privacy Policy</a>
              </li>
              <li>|</li>
              <li><a href="#">Terms Of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <button onClick={topFunction} id="movetop" title="Go to top">
        <span className="fa fa-long-arrow-up" aria-hidden="true" />
      </button>
    </section>
    
    
    </footer>
  

  )
}

export default Footer
