import { useScrollReveal } from '../hooks/useScrollReveal';
import './TrustedBy.css';

const logos = [
  { name: 'itappens.ai', highlight: true, url: 'https://itappens.ai' },
  { name: 'Acme Corp' },
  { name: 'Nexora' },
  { name: 'Synthetix' },
  { name: 'Quantumly' },
  { name: 'VeloBank' },
  { name: 'CloudPeak' },
  { name: 'DataForge' },
];

export default function TrustedBy() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="trusted section" ref={ref}>
      <div className="container">
        <p className={`trusted-label reveal ${isVisible ? 'revealed' : ''}`}>
          Trusted by innovative teams worldwide
        </p>
        <div className="trusted-marquee-wrapper">
          <div className="trusted-marquee-fade trusted-marquee-fade-left" />
          <div className="trusted-marquee">
            <div className="trusted-marquee-track">
              {[...logos, ...logos].map((logo, i) => {
                const content = (
                  <>
                    <div className="trusted-logo-icon">
                      {logo.name.charAt(0)}
                    </div>
                    <span>{logo.name}</span>
                  </>
                );

                if (logo.url) {
                  return (
                    <a
                      key={`${logo.name}-${i}`}
                      href={logo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`trusted-logo ${logo.highlight ? 'trusted-logo-highlight' : ''}`}
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={`${logo.name}-${i}`}
                    className={`trusted-logo ${logo.highlight ? 'trusted-logo-highlight' : ''}`}
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="trusted-marquee-fade trusted-marquee-fade-right" />
        </div>
      </div>
    </section>
  );
}
