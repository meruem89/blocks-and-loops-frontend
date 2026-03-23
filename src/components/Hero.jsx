import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const rotatingWords = [
  'any workload',
  'payment recovery',
  'fintech apps',
  'AI agents',
  'microservices',
  'modern SaaS',
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [animState, setAnimState] = useState('enter');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimState('exit');
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setAnimState('enter');
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-glow hero-glow-3" />
        <div className="hero-grid" />
      </div>

      <div className={`container hero-content ${loaded ? 'hero-loaded' : ''}`}>
        <h1 className="hero-title hero-anim hero-anim-1">
          The modern platform{' '}
          <br />
          to build & scale{' '}
          <span className={`hero-rotating hero-rotating-${animState}`}>
            {rotatingWords[wordIndex]}
          </span>
        </h1>

        <p className="hero-description hero-anim hero-anim-2">
          Blocks & Loops provides the infrastructure, tools, and products your team needs
          to ship faster. From payment recovery to real-time sync, we handle the complexity
          so you can focus on building.
        </p>

        <div className="hero-actions hero-anim hero-anim-3">
          <a href="#products" className="btn btn-primary btn-lg">
            Start for free <ArrowRight size={18} />
          </a>
          <a href="#about" className="btn btn-secondary btn-lg">
            Get in touch
          </a>
        </div>

        <div className="hero-stats hero-anim hero-anim-4">
          <div className="hero-stat">
            <span className="hero-stat-number">50K+</span>
            <span className="hero-stat-label">Developers</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">99.99%</span>
            <span className="hero-stat-label">Uptime SLA</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">$2B+</span>
            <span className="hero-stat-label">Recovered</span>
          </div>
        </div>
      </div>
    </section>
  );
}
