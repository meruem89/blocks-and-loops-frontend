import { Github, Linkedin, Twitter } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Footer.css';

const footerLinks = {
  Products: [
    { name: 'Tinko', href: 'https://tinko.in', external: true },
    { name: 'LoopPay', href: '#' },
    { name: 'BlockShield', href: '#' },
    { name: 'NodeSync', href: '#' },
  ],
  Features: [
    { name: 'Payment Recovery', href: '#' },
    { name: 'Smart Routing', href: '#' },
    { name: 'Security Suite', href: '#' },
    { name: 'Data Sync', href: '#' },
    { name: 'Analytics', href: '#' },
  ],
  Resources: [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Changelog', href: '#' },
    { name: 'Status', href: '#' },
  ],
  Company: [
    { name: 'About', href: '#about' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};

export default function Footer() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <footer className="footer" id="about" ref={ref}>
      <div className="container">
        <div className={`footer-top reveal ${isVisible ? 'revealed' : ''}`}>
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <svg viewBox="0 0 32 32" width="28" height="28">
                <rect x="2" y="2" width="12" height="12" rx="3" fill="#6c5ce7" />
                <rect x="18" y="2" width="12" height="12" rx="3" fill="#00cec9" />
                <rect x="2" y="18" width="12" height="12" rx="3" fill="#00cec9" />
                <rect x="18" y="18" width="12" height="12" rx="3" fill="#6c5ce7" />
                <path d="M14 8 h4 M8 14 v4 M24 14 v4 M14 24 h4" stroke="#0a0a0f" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>Blocks & Loops</span>
            </a>
            <p className="footer-tagline">
              Building the infrastructure layer for modern fintech. Payments, security,
              and data — solved.
            </p>
            <div className="footer-newsletter">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-input"
              />
              <button className="btn btn-primary btn-sm">Subscribe</button>
            </div>
            <div className="footer-socials">
              <a href="#" className="footer-social" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" className="footer-social" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" className="footer-social" aria-label="GitHub"><Github size={18} /></a>
            </div>
          </div>

          <div className="footer-links">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer-column">
                <h4 className="footer-column-title">{category}</h4>
                <ul className="footer-column-links">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="footer-link"
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Blocks & Loops, Inc. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy</a>
            <a href="#" className="footer-bottom-link">Terms</a>
            <a href="#" className="footer-bottom-link">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
