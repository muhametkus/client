import React, { useRef } from 'react'
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

function Iletisim_comp() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y42vx2j', 'template_uleaasp', form.current, 'QhFxktQnY6PysEVWJ')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  const mesaj_ilet = () => {
    const adSoyad = document.getElementById("gonderen_adi").value;
    const telefon = document.getElementById("gonderen_telefon").value;
    const mail = document.getElementById("gonderen_mail").value;
    const konu = document.getElementById("mail_konu").value;
    const mesaj = document.getElementById("mesaj_icerik").value;
    if ((adSoyad !== "") && ((telefon !== "") || (mail !== "")) && (konu !== "") && (mesaj !== ""))
      Swal.fire('Mesajınız İletildi.');
    else {
      Swal.fire({
        icon: 'error',
        title: 'HATA!',
        text: 'Formdaki boş alanları doldurunuz.',
      })
    }
  }

  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>İletişim</h1>
          <nav className="page-breadcrumb" aria-label="Sayfa yolu">
            <a href="/">Anasayfa</a>
            <span className="sep">/</span>
            <span className="current">İletişim</span>
          </nav>
        </div>
      </section>

      <section className="w3l-contact-11">
        <div className="form-41-mian py-5">
          <div className="container py-lg-4">
            <div className="row">
              <div className="col-lg-6 pr-lg-4 mb-5 mb-lg-0">
                <div className="title-content text-left">
                  <h6 className="sub-title">Bizimle İletişime Geçin</h6>
                  <h3 className="hny-title">Bir Telefon Uzağınızdayız</h3>
                </div>
                <p className="mt-3 mb-4">Bizimle iletişime geçebilirsiniz.</p>
                <div className="hours">
                  <h6>Email:</h6>
                  <p><a href="mailto:info@eymenkompresor.com">info@eymenkompresor.com</a></p>

                  <h6>Adres:</h6>
                  <p>Sanayi Mh. Sanayi Cd. No:44 Kurtköy San. Sit. B/81<br />Pendik / İstanbul</p>

                  <h6>Telefon:</h6>
                  <p><a href="tel:+905443566681">0 544 356 66 81</a></p>
                  <p><a href="tel:+902163970262">0 216 307 07 19</a></p>
                </div>
              </div>
              <div className="col-lg-6 form-inner-cont">
                <div className="title-content text-left">
                  <h3 className="hny-title mb-4">Mesajınızı İletin</h3>
                </div>
                <form className="signin-form" ref={form} onSubmit={sendEmail}>
                  <div className="form-input">
                    <input type="text" name="gonderen_adi" id="gonderen_adi" placeholder="Ad Soyad" />
                  </div>
                  <div className="form-input">
                    <input type="email" name="gonderen_mail" id="gonderen_mail" placeholder="E-posta Adresi" />
                  </div>
                  <div className="row">
                    <div className="col-lg-6 form-input">
                      <input type="tel" name="gonderen_telefon" id="gonderen_telefon" placeholder="Telefon" required />
                    </div>
                    <div className="col-lg-6 form-input">
                      <input type="text" name="mail_konu" id="mail_konu" placeholder="Konu" />
                    </div>
                  </div>
                  <div className="form-input">
                    <textarea placeholder="Mesajınız" name="mesaj_icerik" id="mesaj_icerik" required defaultValue={""} />
                  </div>
                  <div className="text-right">
                    <button onClick={mesaj_ilet} type="submit" className="btn-style">Gönder</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.6540665005055!2d29.293487790103807!3d40.90140265217782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadbb682780647%3A0x2c7203bd211850a9!2sRamazano%C4%9Flu%2C%20Sanayi%20Cd.%20No%3A44%20D%3Ab%2C%2034906%20Pendik%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1716495854549!5m2!1str!2str"
            title="Eymen Kompresor Konum"
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </section>
    </div>
  )
}

export default Iletisim_comp
