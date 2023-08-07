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
            <p>Web sitemizi ziyaret ettiğinizde çerezler kullanılmaktadır. Çerezler, web sitemizi daha etkin bir şekilde kullanabilmeniz ve deneyiminizi geliştirebilmemiz için kullanılır. Çerezler hakkında daha fazla bilgi almak için <Link to="/cerezpolitikasi"> <b style={{color:'white', fontSize:'17px'}}>Çerez Politikamızı </b></Link>&nbsp; ziyaret edebilirsiniz.

Web sitemizi kullanmaya devam ettiğinizde çerez kullanımını kabul etmiş sayılırsınız.</p>
            <button className='alert-cookies-kapat-btn' >Kapat</button>
          </div>

          
        </div>
        
      )
      
    );
    
    
  }

export default Cookies