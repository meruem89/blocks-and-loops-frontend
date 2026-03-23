import { ExternalLink, CreditCard, Shield, RefreshCw, Zap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Products.css';

const products = [
  {
    name: 'Tinko',
    tagline: 'Recover failed payments automatically',
    description: 'Tinko intelligently retries failed transactions, recovers lost revenue, and provides deep analytics into payment failures across all your payment providers.',
    icon: <CreditCard size={24} />,
    color: '#6c5ce7',
    link: 'https://tinko.in',
    external: true,
    featured: true,
    features: ['Smart retry logic', 'Multi-provider support', 'Revenue analytics', 'Dunning management'],
  },
  {
    name: 'LoopPay',
    tagline: 'Seamless payment orchestration',
    description: 'Route payments intelligently across multiple processors. Maximize success rates and minimize costs with smart payment orchestration.',
    icon: <RefreshCw size={24} />,
    color: '#00cec9',
    link: '#',
    features: ['Smart routing', 'Failover handling', 'Cost optimization', 'Real-time analytics'],
  },
  {
    name: 'BlockShield',
    tagline: 'Enterprise-grade security suite',
    description: 'Protect your fintech infrastructure with advanced fraud detection, compliance automation, and real-time threat monitoring.',
    icon: <Shield size={24} />,
    color: '#00b894',
    link: '#',
    features: ['Fraud detection', 'PCI compliance', 'Threat monitoring', 'Audit logging'],
  },
  {
    name: 'NodeSync',
    tagline: 'Real-time data synchronization',
    description: 'Keep your data perfectly synchronized across services. Handle millions of events per second with sub-millisecond latency.',
    icon: <Zap size={24} />,
    color: '#e17055',
    link: '#',
    features: ['Event streaming', 'Conflict resolution', 'Multi-region sync', 'Schema evolution'],
  },
];

export default function Products() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="section section-glow" id="products">
      <div className="container">
        <div ref={titleRef}>
          <h2 className={`section-title reveal ${titleVisible ? 'revealed' : ''}`}>
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className={`section-subtitle reveal reveal-delay-1 ${titleVisible ? 'revealed' : ''}`}>
            A suite of powerful tools built for modern fintech teams. Each product is
            designed to solve a critical piece of the payments infrastructure puzzle.
          </p>
        </div>

        <div className="products-grid" ref={gridRef}>
          {products.map((product, i) => (
            <a
              key={product.name}
              href={product.link}
              className={`product-card ${product.featured ? 'product-card-featured' : ''} reveal reveal-delay-${i + 1} ${gridVisible ? 'revealed' : ''}`}
              target={product.external ? '_blank' : undefined}
              rel={product.external ? 'noopener noreferrer' : undefined}
            >
              {product.featured && (
                <div className="product-badge">Flagship Product</div>
              )}
              <div className="product-icon" style={{ '--card-color': product.color }}>
                {product.icon}
              </div>
              <h3 className="product-name">
                {product.name}
                {product.external && <ExternalLink size={14} className="product-ext-icon" />}
              </h3>
              <p className="product-tagline">{product.tagline}</p>
              <p className="product-description">{product.description}</p>
              <div className="product-features">
                {product.features.map((f) => (
                  <span key={f} className="product-feature-tag">{f}</span>
                ))}
              </div>
              <span className="product-link" style={{ color: product.color }}>
                {product.external ? 'Visit website' : 'Coming soon'}
                <span className="product-link-arrow">&rarr;</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
