import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import site from '../../config/site';
import logo from '../../assets/images/logo.png';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu on navigation and on Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <Link to="/" className="site-header__brand" aria-label="Zohaland home">
          <img src={logo} alt="Zohaland" width="52" height="48" />
        </Link>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="site-header__burger" aria-hidden="true" />
        </button>

        <nav id="primary-nav" className={`site-nav${open ? ' is-open' : ''}`} aria-label="Primary">
          <ul>
            {site.nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn--primary site-nav__cta">Get a quote</Link>
        </nav>
      </div>
    </header>
  );
}
