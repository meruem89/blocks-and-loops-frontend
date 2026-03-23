import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Blocks & Loops has enabled us to recover over $2M in failed payments in just the first quarter. Tinko's smart retry logic is a game-changer for our subscription business.",
    name: 'Arjun Mehta',
    role: 'CTO, PayStack India',
  },
  {
    quote: "The infrastructure just works. We went from spending 40% of our engineering time on payment plumbing to focusing entirely on product. Blocks & Loops handles everything.",
    name: 'Sarah Chen',
    role: 'VP Engineering, NeoFinance',
  },
  {
    quote: "We evaluated every payment recovery solution on the market. Tinko from Blocks & Loops was the only one that delivered real results from day one with zero integration headaches.",
    name: 'Marcus Rivera',
    role: 'Head of Payments, CloudCommerce',
  },
  {
    quote: "NodeSync solved our data consistency nightmares across microservices. Sub-millisecond sync with conflict resolution built-in. Our team is shipping 3x faster now.",
    name: 'Priya Sharma',
    role: 'Founder, Quantumly',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const [titleRef, titleVisible] = useScrollReveal();

  useEffect(() => {
    const autoPlay = setInterval(() => {
      goNext();
    }, 5000);
    return () => clearInterval(autoPlay);
  }, [current]);

  const goNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('next');
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const goPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('prev');
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div ref={titleRef}>
          <h2 className={`section-title reveal ${titleVisible ? 'revealed' : ''}`}>
            Loved by <span className="gradient-text">engineering teams</span>
          </h2>
          <p className={`section-subtitle reveal reveal-delay-1 ${titleVisible ? 'revealed' : ''}`}>
            See how teams around the world use Blocks & Loops to build better fintech products.
          </p>
        </div>

        <div className={`testimonial-carousel reveal reveal-delay-2 ${titleVisible ? 'revealed' : ''}`}>
          <button className="testimonial-nav" onClick={goPrev}>
            <ChevronLeft size={20} />
          </button>

          <div className={`testimonial-card testimonial-${isAnimating ? `exit-${direction}` : 'enter'}`}>
            <Quote className="testimonial-quote-icon" size={32} />
            <blockquote className="testimonial-text">
              {testimonials[current].quote}
            </blockquote>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                {testimonials[current].name.charAt(0)}
              </div>
              <div>
                <div className="testimonial-name">{testimonials[current].name}</div>
                <div className="testimonial-role">{testimonials[current].role}</div>
              </div>
            </div>
          </div>

          <button className="testimonial-nav" onClick={goNext}>
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot ${i === current ? 'active' : ''}`}
              onClick={() => {
                setDirection(i > current ? 'next' : 'prev');
                setCurrent(i);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
