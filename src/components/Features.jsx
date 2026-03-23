import { GitBranch, Rocket, BarChart3 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Features.css';

const steps = [
  {
    step: '01',
    icon: <GitBranch size={28} />,
    title: 'Connect your stack',
    description: 'Integrate with your existing payment processors, databases, and services in minutes. Our SDK supports all major languages and frameworks.',
    visual: 'connect',
  },
  {
    step: '02',
    icon: <Rocket size={28} />,
    title: 'Deploy & configure',
    description: 'Set up smart retry rules, routing logic, and security policies through our intuitive dashboard. No infrastructure management needed.',
    visual: 'deploy',
  },
  {
    step: '03',
    icon: <BarChart3 size={28} />,
    title: 'Monitor & optimize',
    description: 'Watch your recovery rates climb with real-time analytics. Our AI continuously optimizes retry timing and routing for maximum success.',
    visual: 'monitor',
  },
];

const features = [
  { title: 'Native SDKs', desc: 'Python, Node.js, Go, Java, Ruby, and more' },
  { title: 'Infrastructure as Code', desc: 'Define your entire config in YAML or JSON' },
  { title: 'Isolated Environments', desc: 'Sandbox, staging, and production environments' },
  { title: 'Webhooks & Events', desc: 'Real-time notifications for every state change' },
  { title: 'Edge Processing', desc: 'Process at the edge for lowest latency' },
  { title: 'Auto-scaling', desc: 'Handle 100x traffic spikes automatically' },
];

export default function Features() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [stepsRef, stepsVisible] = useScrollReveal({ threshold: 0.05 });
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="section section-glow" id="features">
      <div className="container">
        <div ref={titleRef}>
          <h2 className={`section-title reveal ${titleVisible ? 'revealed' : ''}`}>
            <span className="gradient-text">Click, connect,</span> done
          </h2>
          <p className={`section-subtitle reveal reveal-delay-1 ${titleVisible ? 'revealed' : ''}`}>
            Get up and running in three simple steps. Our platform handles the heavy lifting
            so your team can ship faster.
          </p>
        </div>

        <div className="steps-grid" ref={stepsRef}>
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`step-card reveal reveal-delay-${i + 1} ${stepsVisible ? 'revealed' : ''}`}
            >
              <div className="step-number">{s.step}</div>
              <div className="step-visual">
                <div className={`step-visual-inner step-visual-${s.visual}`}>
                  {s.visual === 'connect' && (
                    <div className="visual-connect">
                      <div className="visual-node visual-node-1" />
                      <div className="visual-line" />
                      <div className="visual-node visual-node-2" />
                      <div className="visual-line" />
                      <div className="visual-node visual-node-3" />
                    </div>
                  )}
                  {s.visual === 'deploy' && (
                    <div className="visual-deploy">
                      <div className="visual-terminal">
                        <div className="terminal-dots">
                          <span /><span /><span />
                        </div>
                        <div className="terminal-line"><span className="terminal-prompt">$</span> bl deploy --prod</div>
                        <div className="terminal-line terminal-success">Deployed successfully</div>
                      </div>
                    </div>
                  )}
                  {s.visual === 'monitor' && (
                    <div className="visual-monitor">
                      <div className="visual-bars">
                        <div className="visual-bar" style={{ '--bar-height': '40%', '--bar-delay': '0s' }} />
                        <div className="visual-bar" style={{ '--bar-height': '60%', '--bar-delay': '0.1s' }} />
                        <div className="visual-bar" style={{ '--bar-height': '45%', '--bar-delay': '0.2s' }} />
                        <div className="visual-bar" style={{ '--bar-height': '80%', '--bar-delay': '0.3s' }} />
                        <div className="visual-bar" style={{ '--bar-height': '65%', '--bar-delay': '0.4s' }} />
                        <div className="visual-bar visual-bar-accent" style={{ '--bar-height': '95%', '--bar-delay': '0.5s' }} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="step-icon">{s.icon}</div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-description">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="features-grid" ref={gridRef}>
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`feature-item reveal reveal-delay-${i + 1} ${gridVisible ? 'revealed' : ''}`}
            >
              <div className="feature-dot" />
              <div>
                <h4 className="feature-item-title">{f.title}</h4>
                <p className="feature-item-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
