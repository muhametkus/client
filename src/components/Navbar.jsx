import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {

  function setTheme(currentTheme) {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      
      if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
      }
    }
  
    toggleSwitch.addEventListener('change', function(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    });
  }






    useEffect(() => {
      const currentTheme = localStorage.getItem('theme');
      setTheme(currentTheme);
    }, []);

    return (
    
    <header id="site-header" className="fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <h1><a className="navbar-brand" href="/">
            </a><a  href="/"><img src="assets\images\eymenlogo.png" width={250} height="auto" /></a>
            <span />
          </h1>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fa icon-expand fa-bars" />
            <span className="fa icon-close fa-times" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">Anasayfa </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hakkimizda">HAKKIMIZDA</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/iletisim">İLETİŞİM</Link>
              </li>

              <div className="dropdown">
                <button className="dropbtn">ÜRÜNLER</button>
                <div className="dropdown-content">
                  <Link to="/vidali">VİDALI KOMPRESORLER</Link>
                  <Link to="/pistonlu">PİSTONLU KOMPRESORLER</Link>
                  <Link to="/ikinciel">İKİNCİ EL</Link>
                </div>
              </div>
            </ul>
            <ul className="navbar-nav search-right mt-lg-0 mt-2">
              <li className="nav-item mr-3" title="Search"><Link to="#search" className="btn search-search">
                  <span className="fa fa-search" aria-hidden="true" /></Link></li>
              <li className="nav-item"><Link to="/iletisim" className="btn btn-primary d-none d-lg-block btn-style mr-2">İletişime Geç</Link></li>
            </ul>
            {/* //toggle switch for light and dark theme */}
            {/* search popup */}
            <div id="search" className="pop-overlay">
              <div className="popup">
                <form action="#" method="GET" className="d-sm-flex">
                  <input type="search" placeholder="Search.." name="search" required="required" autoFocus />
                  <button type="submit">Search</button>
                  <Link className="close" to="#url">×</Link>
                </form>
              </div>
            </div>
            {/* /search popup */}
          </div>
          {/* toggle switch for light and dark theme */}
          <div className="mobile-position">
            <nav className="navigation">
              <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                  <input type="checkbox"
      id="checkbox"/>
                  <div className="mode-container">
                    <i className="gg-sun" />
                    <i className="gg-moon" />
                  </div>
                </label>
              </div>
            </nav>
          </div>
        </nav>
      </div>
      
    </header>
   
  )
}

export default Navbar