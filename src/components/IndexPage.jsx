import React from 'react'
import { Link } from 'react-router-dom';
function IndexPage() {
  return (
    <div>
  {/* main-slider */}
  <section className="w3l-main-slider position-relative" id="home">
    <div className="companies20-content">
      <div className="owl-one owl-carousel owl-theme">
        <div className="item">
          <li>
            <div className="slider-info banner-view bg bg2">
              <div className="banner-info">
                <div className="container">
                  <div className="banner-info-bg">
                    <h5>Enerji <br /> Geleceğimizdir</h5>
                    <div className="banner-buttons">
                      <Link className="btn btn-style btn-primary" to="/hakkimizda">Hakkımızda</Link>
                      <a href="#small-dialog" className="popup-with-zoom-anim play-view">
                        <span className="video-play-icon">
                          <span className="fa fa-play" />
                        </span>
                        <h6>Enerji de devrim yaratıyoruz.</h6>
                      </a>
                      {/* dialog itself, mfp-hide class is required to make dialog hidden */}
                      <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                        <iframe width={560} height={315} src="https://www.youtube.com/embed/bJluUxA7aaY" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </div>
        <div className="item">
          <li>
            <div className="slider-info  banner-view banner-top1 bg bg2">
              <div className="banner-info">
                <div className="container">
                  <div className="banner-info-bg">
                    <h5>Enerjide devrim yaratıyoruz</h5>
                    <div className="banner-buttons">
                      <a className="btn btn-style btn-primary" href="hakkimizda">Hakkımızda</a>
                      <a href="#small-dialog" className="popup-with-zoom-anim play-view">
                        <span className="video-play-icon">
                          <span className="fa fa-play" />
                        </span>
                        <h6>How We Works</h6>
                      </a>
                      {/* dialog itself, mfp-hide class is required to make dialog hidden */}
                      <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                        <iframe width={560} height={315} src="https://www.youtube.com/embed/bJluUxA7aaY" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </div>
        <div className="item">
          <li>
            <div className="slider-info banner-view banner-top2 bg bg2">
              <div className="banner-info">
                <div className="container">
                  <div className="banner-info-bg">
                    <h5>Enerji &amp; <br /> Geleceğimizdir.</h5>
                    <div className="banner-buttons">
                      <a className="btn btn-style btn-primary" href="hakkimizda">Katoloğumuzu incele</a>
                      <a href="#small-dialog1" className="popup-with-zoom-anim play-view">
                        <span className="video-play-icon">
                          <span className="fa fa-play" />
                        </span>
                        <h6>How We Works</h6>
                      </a>
                      {/* dialog itself, mfp-hide class is required to make dialog hidden */}
                      <div id="small-dialog2" className="zoom-anim-dialog mfp-hide">
                        <iframe width={560} height={315} src="https://www.youtube.com/embed/bJluUxA7aaY" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </div>
        <div className="item">
          <li>
            <div className="slider-info banner-view banner-top3 bg bg2">
              <div className="banner-info">
                <div className="container">
                  <div className="banner-info-bg">
                    <h5>Enerjide verimliliği destekliyoruz</h5>
                    <div className="banner-buttons">
                      <a className="btn btn-style btn-primary" href="hakkimizda">Read More</a>
                      <a href="#small-dialog3" className="popup-with-zoom-anim play-view">
                        <span className="video-play-icon">
                          <span className="fa fa-play" />
                        </span>
                        <h6>How We Works</h6>
                      </a>
                      {/* dialog itself, mfp-hide class is required to make dialog hidden */}
                      <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                        <iframe width={560} height={315} src="https://www.youtube.com/embed/bJluUxA7aaY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
  </section>
  {/* //banner-slider*/}
  {/* //bottom-grids */}
  <div className="w3l-bottom-grids">
    <div className="container-fluid px-0">
      <div className="bottomhny-grids-sec">
        <div className="bottomhny-1">
          <div className="bottomhny-gd-ingf">
            <h4>Basınçlı hava sistemleri uzmanlık alanımız.</h4>
          </div>
        </div>
        <div className="bottomhny-1 bottomhny-2">
          <div className="bottomhny-gd-ingf">
            <h4>Gelişen teknolojiye takiben kendimizi geliştiriyoruz.</h4>
          </div>
        </div>
        <div className="bottomhny-1 bottomhny-1-img">
          <div className="bottomhny-gd-ingf">
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* //bottom-grids */}
  {/* /content-3*/}
  <section className="w3l-content-3">
    {/* /content-3-main*/}
    <div className="content-3-mian py-5">
      <div className="container py-lg-5">
        <div className="content-info-in row">
          <div className="col-lg-6">
            <img src="assets/images/ab1.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6 mt-lg-0 mt-5 about-right-faq align-self  pl-lg-5">
            <div className="title-content text-left mb-2">
              <h6 className="sub-title">BİZ KİMİZ?</h6>
              <h3 className="hny-title"> Kompresor Sistemleri uzmanlık alanımız</h3>
            </div>
            <p className="mt-3">Uzun yıllardır kompresor sistemleri bakımı ve işleyişi üzerine edindiğimiz tecrübelerle kurumsallığa doğru adım atıyoruz. Sizlere daha iyi hizmet sağlamak adına gelişen teknolojiyi takiben kendimizi geliştiriyor, yeni teknolojileri bilgi ve tecrübe birikimlerimizin üzerine ekliyoruz. Bu alandaki profesyonelliğimizi sizlere verdiğimiz ve vereceğimiz hizmetle kanıtlıyor, tecrübemizi arttırıyoruz. Sizlere verdiğimiz her hizmetle profesyonellik adına yeni bir basamak kat etmiş oluyoruz.</p>
            <a href="hakkimizda" className="btn btn-style btn-primary mt-md-5 mt-4">HAKKIMIZDA</a>
          </div>
        </div>
      </div>
    </div></section>
  {/* //content-3*/}
  {/* /features-4 */}
  <section className="features-4">
    <div className="features4-block py-5">
      <div className="container py-lg-4">
        <div className="title-content text-center mb-lg-5 mt-4">
          <h6 className="sub-title">Enerji devamlılığı için çalışıyoruz</h6>
          <h3 className="hny-title">Projelerimiz</h3>
          <p className="fea-para">Lorem illum facere aperiam consectetur adipisicing elit</p>
        </div>
        <div className="row features4-grids text-left mt-lg-4">
          <div className="col-lg-3 col-md-6 features4-grid mt-4">
            <div className="features4-grid-inn">
              <div className="img-featured">
                <div className="ch-item ch-img-2">
                  <div className="ch-info-wrap">
                    <div className="ch-info">
                      <div className="ch-info-front ch-img-2" />
                      <div className="ch-info-back">
                        <h4>Servİs</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="features4-rightinfo">
                <h5><a href="#URL">Servis</a></h5>
                <p>Bakım, yedek parça tedariği konusunda sizlere hizmet sağlıyoruz.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 features4-grid mt-4">
            <div className="features4-grid-inn">
              <div className="img-featured">
                <div className="ch-item ch-img-2">
                  <div className="ch-info-wrap">
                    <div className="ch-info">
                      <div className="ch-info-front ch-img-2" />
                      <div className="ch-info-back">
                        <h4>Satış</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="features4-rightinfo">
                <h5><a href="#URL">
                    Satış</a></h5>
                <p>Sıfır ve tüm bakımları yapılmış sıfır ayarında ikinci el satışlarımız mevcut.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 features4-grid mt-4">
            <div className="features4-grid-inn">
              <div className="img-featured">
                <div className="ch-item ch-img-3">
                  <div className="ch-info-wrap">
                    <div className="ch-info">
                      <div className="ch-info-front ch-img-3" />
                      <div className="ch-info-back">
                        <h4>Yedek Parça</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="features4-rightinfo">
                <h5><a href="#URL">
                    Yedek Parça</a></h5>
                <p>Sizlere yedek parça tedariği konusunda hizmet veriyoruz.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 features4-grid mt-4">
            <div className="features4-grid-inn">
              <div className="img-featured">
                <div className="ch-item ch-img-4">
                  <div className="ch-info-wrap">
                    <div className="ch-info">
                      <div className="ch-info-front ch-img-4" />
                      <div className="ch-info-back">
                        <h4>İkİncİ el</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="features4-rightinfo">
                <h5><Link to="/ikinciel">
                    İkinci El Satış</Link></h5>
                <p>Tüm bakımları yapılmış sıfır ayarında ikinci el kompresor satışlarımız mevcuttur.</p>
              </div> 
            </div>
          </div> 
        </div>  
      </div>
    </div>
  </section>
  {/*//features-4 */}
  {/* /specification-6*/}{/* //specification-6*/}{/* middle
<div class="middle py-5">
    <div class="container py-xl-5 py-lg-3">
  <div class="welcome-left text-left py-3">
      <div class="title-content">
          <h6 class="sub-title">Call Us</h6>
          <h3 class="hny-title two mb-2">Imagine Your Car Feeling New Again</h3>
          <p>Questions? Give us a call today at <a href="tel:+(21) 255 999 8899">+(21)
                  255 999 8899</a></p>

      </div>
      <a href="urunler" class="btn btn-white mt-md-5 mt-4 mr-sm-2">Our Services</a>
      <a href="iletisim" class="btn btn-white-active btn-primary mt-md-5 mt-4">Contact Us</a>
  </div>
    </div>
</div>
<!-- //middle */}
  {/*/testimonials*/}
  <section className="w3l-testimonials">
    <div className="testimonials py-5">
      <div className="container text-center py-lg-3">
        <div className="title-content text-center mb-lg-5 mb-4">
          <h6 className="sub-title">Client Testimonials</h6>
          <h3 className="hny-title">100% approved by customers</h3>
        </div>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="owl-testimonial owl-carousel owl-theme">
              <div className="item">
                <div className="slider-info mt-lg-4 mt-3">
                  <div className="img-circle">
                    <img src="assets/images/team1.jpg" className="img-fluid rounded" alt="client image" />
                  </div>
                  <div className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit
                    id
                    accusantium
                    officia quod quasi necessitatibus perspiciatis Harum error provident
                    quibusdam tenetur.</div>
                  <div className="name">- Jenkins</div>
                </div>
              </div>
              <div className="item">
                <div className="slider-info mt-lg-4 mt-3">
                  <div className="img-circle">
                    <img src="assets/images/team2.jpg" className="img-fluid rounded" alt="client image" />
                  </div>
                  <div className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit
                    id
                    accusantium
                    officia quod quasi necessitatibus perspiciatis Harum error provident
                    quibusdam tenetur.</div>
                  <div className="name">- John Balmer</div>
                </div>
              </div>
              <div className="item">
                <div className="slider-info mt-lg-4 mt-3">
                  <div className="img-circle">
                    <img src="assets/images/team3.jpg" className="img-fluid rounded" alt="client image" />
                  </div>
                  <div className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit
                    id
                    accusantium
                    officia quod quasi necessitatibus perspiciatis Harum error provident
                    quibusdam tenetur.</div>
                  <div className="name">- Kiss Kington</div>
                </div>
              </div>
              <div className="item">
                <div className="slider-info mt-lg-4 mt-3">
                  <div className="img-circle">
                    <img src="assets/images/team4.jpg" className="img-fluid rounded" alt="client image" />
                  </div>
                  <div className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit
                    id
                    accusantium
                    officia quod quasi necessitatibus perspiciatis Harum error provident
                    quibusdam tenetur.</div>
                  <div className="name">- Elizabeth</div>
                </div>
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

export default IndexPage