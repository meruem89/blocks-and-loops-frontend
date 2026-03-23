import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import './Navbar.css';

const products = [
  { name: 'Tinko', desc: 'Recover failed payments automatically', link: 'https://tinko.in', external: true },
  { name: 'LoopPay', desc: 'Seamless payment orchestration', link: '#products' },
  { name: 'BlockShield', desc: 'Enterprise-grade security suite', link: '#products' },
  { name: 'NodeSync', desc: 'Real-time data synchronization', link: '#products' },
];

const resources = [
  { name: 'Documentation', link: '#' },
  { name: 'Blog', link: '#' },
  { name: 'Changelog', link: '#' },
  { name: 'Community', link: '#' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-inner">
          {/* Logo */}
          <a href="#" className="navbar-logo">
            <div className="logo-icon">
              <svg viewBox="0 0 32 32" width="32" height="32">
                <rect x="2" y="2" width="12" height="12" rx="3" fill="#6c5ce7" />
                <rect x="18" y="2" width="12" height="12" rx="3" fill="#00cec9" />
                <rect x="2" y="18" width="12" height="12" rx="3" fill="#00cec9" />
                <rect x="18" y="18" width="12" height="12" rx="3" fill="#6c5ce7" />
                <path d="M14 8 h4 M8 14 v4 M24 14 v4 M14 24 h4" stroke="#0a0a0f" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="logo-text">Blocks & Loops</span>
          </a>

          {/* Desktop Nav */}
          <div className="navbar-links">
            <div
              className="nav-dropdown"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link">
                Products <ChevronDown size={14} />
              </button>
              {activeDropdown === 'products' && (
                <div className="dropdown-menu">
                  {products.map((p) => (
                    <a
                      key={p.name}
                      href={p.link}
                      className="dropdown-item"
                      target={p.external ? '_blank' : undefined}
                      rel={p.external ? 'noopener noreferrer' : undefined}
                    >
                      <div className="dropdown-item-content">
                        <span className="dropdown-item-name">
                          {p.name}
                          {p.external && <ExternalLink size={12} />}
                        </span>
                        <span className="dropdown-item-desc">{p.desc}</span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#features" className="nav-link">Features</a>
            <a href="#pricing" className="nav-link">Pricing</a>

            <div
              className="nav-dropdown"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link">
                Resources <ChevronDown size={14} />
              </button>
              {activeDropdown === 'resources' && (
                <div className="dropdown-menu dropdown-menu-sm">
                  {resources.map((r) => (
                    <a key={r.name} href={r.link} className="dropdown-item dropdown-item-simple">
                      {r.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#about" className="nav-link">Company</a>
          </div>

          {/* CTA */}
          <div className="navbar-actions">
            <a href="#" className="nav-link">Sign In</a>
            <a href="#" className="btn btn-primary btn-sm">Get Started</a>
          </div>

          {/* Mobile toggle */}
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-section">
              <span className="mobile-menu-label">Products</span>
              {products.map((p) => (
                <a
                  key={p.name}
                  href={p.link}
                  className="mobile-menu-link"
                  target={p.external ? '_blank' : undefined}
                  rel={p.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setMobileOpen(false)}
                >
                  {p.name} {p.external && <ExternalLink size={12} />}
                </a>
              ))}
            </div>
            <a href="#features" className="mobile-menu-link" onClick={() => setMobileOpen(false)}>Features</a>
            <a href="#pricing" className="mobile-menu-link" onClick={() => setMobileOpen(false)}>Pricing</a>
            <a href="#about" className="mobile-menu-link" onClick={() => setMobileOpen(false)}>Company</a>
            <div className="mobile-menu-actions">
              <a href="#" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Sign In</a>
              <a href="#" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Get Started</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
