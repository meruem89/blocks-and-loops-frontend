import { Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Pricing.css';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    description: 'Perfect for trying out Blocks & Loops products.',
    features: [
      'Up to 1,000 transactions/mo',
      '1 product integration',
      'Community support',
      'Basic analytics',
      'Sandbox environment',
    ],
    cta: 'Start free',
    ctaStyle: 'btn btn-secondary',
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/mo',
    description: 'For growing teams that need more power.',
    popular: true,
    features: [
      'Up to 50,000 transactions/mo',
      'All product integrations',
      'Priority support',
      'Advanced analytics & reporting',
      'Staging + production environments',
      'Webhooks & custom events',
      'Team collaboration (5 seats)',
    ],
    cta: 'Start free trial',
    ctaStyle: 'btn btn-primary',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with custom needs.',
    features: [
      'Unlimited transactions',
      'All products + early access',
      'Dedicated support & SLA',
      'Custom analytics & dashboards',
      'Multi-region deployment',
      'SSO & RBAC',
      'Dedicated infrastructure',
      'Compliance assistance',
    ],
    cta: 'Contact sales',
    ctaStyle: 'btn btn-secondary',
  },
];

export default function Pricing() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="section section-glow" id="pricing">
      <div className="container">
        <div ref={titleRef}>
          <h2 className={`section-title reveal ${titleVisible ? 'revealed' : ''}`}>
            Simple, <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className={`section-subtitle reveal reveal-delay-1 ${titleVisible ? 'revealed' : ''}`}>
            Start for free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="pricing-grid" ref={gridRef}>
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.popular ? 'pricing-card-popular' : ''} reveal reveal-delay-${i + 1} ${gridVisible ? 'revealed' : ''}`}
            >
              {plan.popular && <div className="pricing-badge">Most Popular</div>}
              <h3 className="pricing-name">{plan.name}</h3>
              <div className="pricing-price">
                <span className="pricing-amount">{plan.price}</span>
                {plan.period && <span className="pricing-period">{plan.period}</span>}
              </div>
              <p className="pricing-description">{plan.description}</p>
              <ul className="pricing-features">
                {plan.features.map((f) => (
                  <li key={f} className="pricing-feature">
                    <Check size={16} className="pricing-check" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={plan.ctaStyle} style={{ width: '100%', justifyContent: 'center' }}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
