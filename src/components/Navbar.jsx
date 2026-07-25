import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;
  const isProductPage = ['/urunler', '/vidali', '/pistonlu', '/ikinciel'].includes(location.pathname);

  return (
    <header id="site-header">
      <div className="nav-shell container">
        <Link className="navbar-brand" to="/" aria-label="Eymen Kompresör ana sayfa">
          <img src="/assets/images/eymenlogo.png" alt="Eymen Kompresör" />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Menüyü aç veya kapat"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
        <nav className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Ana navigasyon">
          <Link className={isActive('/') ? 'active' : ''} to="/">Ana Sayfa</Link>
          <Link className={isActive('/hakkimizda') ? 'active' : ''} to="/hakkimizda">Hakkımızda</Link>
          <div className={`nav-products ${productsOpen ? 'is-open' : ''}`}>
            <button className={isProductPage ? 'active' : ''} type="button" onClick={() => setProductsOpen((open) => !open)} aria-expanded={productsOpen}>
              Ürünler <span className="chevron">⌄</span>
            </button>
            <div className="product-menu">
              <Link to="/vidali">Vidalı Kompresörler</Link>
              <Link to="/pistonlu">Pistonlu Kompresörler</Link>
              <Link to="/ikinciel">İkinci El Kompresörler</Link>
              <Link to="/urunler" className="all-products">Tüm ürünleri görüntüle <span>→</span></Link>
            </div>
          </div>
          <Link className={isActive('/iletisim') ? 'active' : ''} to="/iletisim">İletişim</Link>
          <Link className="nav-cta" to="/iletisim">Teklif Al <span>→</span></Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
