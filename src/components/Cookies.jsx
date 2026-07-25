import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Cookies() {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const isAlertClosed = localStorage.getItem('isAlertClosed');
    if (isAlertClosed) {
      setShowAlert(false);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('isAlertClosed', 'true');
    setShowAlert(false);
  };

  return (
    showAlert && (
      <div className="alert-container">
        <div className="alert">
          <p>
            Web sitemizi ziyaret ettiğinizde çerezler kullanılmaktadır.
            Çerezler hakkında daha fazla bilgi almak için{' '}
            <Link to="/cerezpolitikasi">Çerez Politikamızı</Link> ziyaret edebilirsiniz.
            Web sitemizi kullanmaya devam ettiğinizde çerez kullanımını kabul etmiş sayılırsınız.
          </p>
          <button className="alert-cookies-kapat-btn" onClick={handleClose}>Kabul Et</button>
        </div>
      </div>
    )
  );
}

export default Cookies
