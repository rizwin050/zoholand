import { Link } from 'react-router-dom';
import site from '../../config/site';
import { productCategories } from '../../data/products';
import { sisterConcerns } from '../../data/company';
import logoWhite from '../../assets/images/logo-white.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__about">
          <img src={logoWhite} alt="Zohaland" width="120" height="111" loading="lazy" />
          <p>
            Plain and pre-laminated particle boards from {site.legalName}, made in Perumbavoor, Kerala.
          </p>
          <p className="site-footer__group">Sister concerns: {sisterConcerns.join(' and ')}</p>
        </div>

        <nav aria-label="Footer pages">
          <h2>Pages</h2>
          <ul>
            {site.nav.map((item) => (
              <li key={item.to}><Link to={item.to}>{item.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2>Products</h2>
          <ul>
            {productCategories.map((p) => (
              <li key={p.id}><Link to="/products">{p.name}</Link></li>
            ))}
          </ul>
        </div>

        <address>
          <h2>Contact</h2>
          <p>{site.address.lines.join(', ')}</p>
          <p>
            {site.phones.map((p, i) => (
              <span key={p.href}>{i > 0 && ' / '}<a href={p.href}>{p.label}</a></span>
            ))}
          </p>
          <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
        </address>
      </div>
      <div className="container site-footer__legal">
        <p>© {new Date().getFullYear()} {site.legalName} All rights reserved.</p>
        <p>{site.tagline}.</p>
      </div>
    </footer>
  );
}
