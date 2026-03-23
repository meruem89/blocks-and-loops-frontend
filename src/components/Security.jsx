import { Shield, Lock, Globe, FileCheck, Network, Eye } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Security.css';

const securityFeatures = [
  {
    icon: <Network size={22} />,
    title: 'Private Networking',
    description: 'All services communicate over encrypted private networks. No data leaves your VPC.',
  },
  {
    icon: <Shield size={22} />,
    title: 'DDoS Protection',
    description: 'Enterprise-grade DDoS mitigation built into every endpoint automatically.',
  },
  {
    icon: <FileCheck size={22} />,
    title: 'SOC 2 & PCI DSS',
    description: 'Fully compliant with SOC 2 Type II, PCI DSS Level 1, GDPR, and HIPAA.',
  },
  {
    icon: <Eye size={22} />,
    title: 'Audit Logging',
    description: 'Every action is logged and traceable. Complete audit trails for compliance.',
  },
  {
    icon: <Lock size={22} />,
    title: 'End-to-End Encryption',
    description: 'AES-256 encryption at rest, TLS 1.3 in transit. Your data is always protected.',
  },
  {
    icon: <Globe size={22} />,
    title: 'Multi-Region',
    description: 'Deploy across multiple regions for redundancy, compliance, and low latency.',
  },
];

export default function Security() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });
  const [bannerRef, bannerVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="section security-section" id="security">
      <div className="container">
        <div ref={titleRef}>
          <h2 className={`section-title reveal ${titleVisible ? 'revealed' : ''}`}>
            Enterprise <span className="gradient-text">security</span> by default
          </h2>
          <p className={`section-subtitle reveal reveal-delay-1 ${titleVisible ? 'revealed' : ''}`}>
            Security is not an afterthought. Every layer of our infrastructure is designed
            with zero-trust principles and industry-leading compliance standards.
          </p>
        </div>

        <div className="security-grid" ref={gridRef}>
          {securityFeatures.map((feature, i) => (
            <div
              key={feature.title}
              className={`security-card reveal reveal-delay-${Math.min(i + 1, 5)} ${gridVisible ? 'revealed' : ''}`}
            >
              <div className="security-icon">{feature.icon}</div>
              <h3 className="security-title">{feature.title}</h3>
              <p className="security-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div
          ref={bannerRef}
          className={`security-banner reveal ${bannerVisible ? 'revealed' : ''}`}
        >
          <div className="security-banner-content">
            <h3 className="security-banner-title">Ready to build with confidence?</h3>
            <p className="security-banner-text">
              Start for free with no credit card required. Scale as you grow.
            </p>
          </div>
          <div className="security-banner-actions">
            <a href="#" className="btn btn-primary">Get started free</a>
            <a href="#" className="btn btn-secondary">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
