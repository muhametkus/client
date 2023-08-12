import React, { useRef } from 'react'
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

function Iletisim_comp() {

  const form =useRef();

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






  const mesaj_ilet=()=>{
    const adSoyad=document.getElementById("gonderen_adi").value;
    const telefon=document.getElementById("gonderen_telefon").value;
    const mail=document.getElementById("gonderen_mail").value;
    const konu=document.getElementById("mail_konu").value;
    const mesaj=document.getElementById("mesaj_icerik").value;
    if((adSoyad!="")&&((telefon!="")||(mail!=""))&&(konu!="")&&(mesaj!=""))
    Swal.fire('Mesajınız İletildi.');

    else{
      Swal.fire({
        icon: 'error',
        title: 'HATA!',
        text: 'Formdaki boş alanları doldurunuz.',
      })
    }

  }
 
  return (
    <div>
  <section className="w3l-about-breadcrumb position-relative text-center">
    <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
      <div className="container py-lg-5 py-3">
        <h2 className="title">İletişim</h2>
        <ul className="breadcrumbs-custom-path mt-2">
          <li><a href="/">Anasayfa</a></li>
          <li className="active"><span className="fa fa-angle-double-right mx-2" aria-hidden="true" /> İletişim </li>
        </ul>
      </div>
    </div>
  </section>
  {/* //about breadcrumb */}
  <section className="w3l-contact-11">
    <div className="form-41-mian py-5">
      <div className="container py-lg-4">
        <div className="row align-form-map">
          <div className="col-lg-6 contact-left pr-lg-4">
            <div className="partners">
              <div className="cont-details">
                <div className="title-content text-left">
                  <h6 className="sub-title">Bizimle İletişime Geçin</h6>
                  <h3 className="hny-title">Bir telefon uzağınızdayız</h3>
                </div>
                <p className="mt-3 mb-4 pr-lg-5">Bizimle iletişime geçebilirsiniz.</p>
                <h6 className="mb-4" />
              </div>
              <div className="hours">
                <h6 className="mt-4">Email:</h6>
                <p> <a href="mailto:info@eymenkompresor.com">
                    info@eymenkompresor.com</a></p>
                <h6 className="mt-4">Adres:</h6>
                <p> Velibaba Mh. Günyüzü  Sk. No: 10/A
                  Pendik / İSTANBUL</p>
                <h6 className="mt-4">Telefon numaramız:</h6>
                <p className="margin-top"><a href="tel:+(90) 544 356 66 81">0 544 356 66 81</a></p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 form-inner-cont">
            <div className="title-content text-left">
              <h3 className="hny-title mb-lg-5 mb-4">Mesajınızı İletin</h3>
            </div>
            <form className="signin-form" ref={form} onSubmit={sendEmail}>
              <div className="form-input">
                <input type="text" name="gonderen_adi" id="gonderen_adi" placeholder="İsim Soyisim" />
              </div>
              <div className="form-input">
                <input type="text" name="gonderen_mail" id="gonderen_mail" placeholder="Mail Adresi" />
              </div>
              <div className="row con-two">
                <div className="col-lg-6 form-input">
                  <input type="tel" name="gonderen_telefon" id="gonderen_telefon" placeholder="Telefon numaranız" required />
                </div>
                <div className="col-lg-6 form-input">
                  <input type="text" name="mail_konu" id='mail_konu' placeholder="Konu" className="contact-input" />
                </div>
              </div>
              <div className="form-input">
                <textarea placeholder="Mesajınız" name="mesaj_icerik" id="mesaj_icerik" required defaultValue={""} />
              </div>
              <div className="submit-button text-lg-right">
                <button onClick={mesaj_ilet} type="submit" value="gonder" className="btn btn-style">Gönder</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.771363635341!2d29.252751324778984!3d40.898829967946455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadb6accf2eb1d%3A0xe1d0c66a7c1944ab!2zVmVsaWJhYmEsIMSwxJ9kZSBTay4gTm86MTAsIDM0ODk2IFBlbmRpay_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1663925360727!5m2!1str!2str" frameBorder={0} allowFullScreen />
    </div>
  </section>
</div>

  )
}

export default Iletisim_comp