"use client";

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, User, Mail, Building2, Users, Coffee, ArrowRight, CreditCard, Truck, Apple, Wrench, Package, CupSoda, Store, Cpu, Box, ClipboardCheck, RefreshCw } from 'lucide-react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (window.matchMedia("(pointer: fine)").matches && heroContentRef.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * 15;
        const y = (e.clientY / window.innerHeight - 0.5) * 15;
        heroContentRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    const handleMouseLeave = () => {
      if (heroContentRef.current) {
        heroContentRef.current.style.transform = `translate(0px, 0px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.body.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <main>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">Houston Vending</div>
        <nav>
          <ul className="nav-links">
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#contact" className="btn-primary">Get a Machine</Link></li>
          </ul>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content" ref={heroContentRef}>
            <span className="badge">
              <MapPin size={16} className="badge-icon" /> 
              Proudly Serving Houston, TX
            </span>
            <h1 className="hero-title">Fueling Houston<br />One Snack at a Time</h1>
            <p className="hero-subtitle">Modern, reliable, and fully stocked vending machines tailored for your Houston business. Elevate your breakroom experience today.</p>
            <div className="hero-cta-group">
              <Link href="#contact" className="btn-primary btn-large">
                Request a Machine <ArrowRight size={20} className="icon-right" />
              </Link>
              <Link href="#services" className="btn-secondary btn-large">
                View Options
              </Link>
            </div>
          </div>
          
          <div className="hero-form-container">
            <div className="hero-form-card">
              <h3>Get Your Free Machine</h3>
              <p>Fill out the form below and we'll be in touch within 24 hours.</p>
              
              <form className="hero-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group icon-input-group">
                  <User size={18} className="input-icon" />
                  <input type="text" id="name" placeholder="Full Name" required />
                </div>
                
                <div className="form-group icon-input-group">
                  <Mail size={18} className="input-icon" />
                  <input type="email" id="email" placeholder="Email Address" required />
                </div>
                
                <div className="form-group icon-input-group">
                  <Building2 size={18} className="input-icon" />
                  <input type="text" id="businessName" placeholder="Business Name" required />
                </div>
                
                <div className="form-row">
                  <div className="form-group icon-input-group">
                    <Users size={18} className="input-icon" />
                    <select id="employeeCount" required defaultValue="">
                      <option value="" disabled>Employees</option>
                      <option value="1-50">1-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>
                  
                  <div className="form-group icon-input-group">
                    <Coffee size={18} className="input-icon" />
                    <select id="vendingType" required defaultValue="">
                      <option value="" disabled>Machine Type</option>
                      <option value="snacks_only">Snacks Only</option>
                      <option value="drinks_only">Drinks Only</option>
                      <option value="combo">Combo</option>
                      <option value="coffee">Coffee Service</option>
                      <option value="micro_market">Micro Market</option>
                    </select>
                  </div>
                </div>
                
                <button type="submit" className="btn-primary btn-block">Request Consultation</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Why Choose <span className="text-highlight">Houston Vending?</span></h2>
            <p>We provide a hassle-free, fully managed vending experience that your employees and customers will actually love.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <CreditCard size={28} />
              </div>
              <h3>Cashless & Modern</h3>
              <p>State-of-the-art machines equipped with secure tap-to-pay, Apple Pay, and credit card readers.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Truck size={28} />
              </div>
              <h3>Fast Local Service</h3>
              <p>Based right here in Houston. We restock regularly and guarantee lightning-fast maintenance response times.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Apple size={28} />
              </div>
              <h3>Custom Selections</h3>
              <p>From local favorites to healthy alternatives, you dictate exactly what goes into your breakroom machines.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Wrench size={28} />
              </div>
              <h3>Zero Headaches</h3>
              <p>Installation, stocking, and maintenance are 100% free for qualifying Houston locations. We handle everything.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="machines" className="machines-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Our Modern <span className="text-highlight">Fleet</span></h2>
            <p>We supply top-of-the-line, energy-efficient equipment tailored entirely to your location's specific needs and volume.</p>
          </div>
          
          <div className="machines-grid">
            <div className="machine-card">
              <div className="machine-image-wrapper bg-gradient-combo">
                <Cpu size={80} className="machine-hero-icon" />
              </div>
              <div className="machine-card-content">
                <h3>AI Smart Coolers</h3>
                <p>The future of breakroom convenience. Advanced computer vision tracks what you take. Simply swipe your card, open the door, grab your items, and walk away—you're billed automatically.</p>
                <Link href="#contact" className="text-link">Request Smart Cooler &rarr;</Link>
              </div>
            </div>

            <div className="machine-card">
              <div className="machine-image-wrapper bg-gradient-beverage">
                <Box size={80} className="machine-hero-icon" />
              </div>
              <div className="machine-card-content">
                <h3>Traditional Vending</h3>
                <p>The reliable classic. High-capacity, dual-temperature machines stocked with all your favorite name-brand snacks, chips, and ice-cold bottled beverages.</p>
                <Link href="#contact" className="text-link">Request This Machine &rarr;</Link>
              </div>
            </div>

            <div className="machine-card">
              <div className="machine-image-wrapper bg-gradient-micro">
                <Store size={80} className="machine-hero-icon" />
              </div>
              <div className="machine-card-content">
                <h3>Premium Micro-Markets</h3>
                <p>A self-checkout luxury amenity. Perfect for huge offices wanting to supply employees with fresh salads, sandwiches, and upscale treats.</p>
                <Link href="#contact" className="text-link">Request This Market &rarr;</Link>
              </div>
            </div>

            <div className="machine-card">
              <div className="machine-image-wrapper bg-gradient-coffee">
                <Coffee size={80} className="machine-hero-icon" />
              </div>
              <div className="machine-card-content">
                <h3>Office Coffee Service</h3>
                <p>Bring the barista into the breakroom. High-end bean-to-cup machines ensuring your team is fueled with the best morning brew.</p>
                <Link href="#contact" className="text-link">Request Coffee Service &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="process-section">
        <div className="section-container">
          <div className="section-header">
            <h2>How It <span className="text-highlight">Works</span></h2>
            <p>Upgrading your breakroom is completely hassle-free. We handle everything from start to finish at zero cost to you.</p>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-icon-container">
                <ClipboardCheck size={32} className="step-icon" />
              </div>
              <h3>Consultation & Customization</h3>
              <p>We visit your location to assess your space and discuss your team's specific snack and beverage preferences to build the perfect menu.</p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-icon-container">
                <Wrench size={32} className="step-icon" />
              </div>
              <h3>Free Delivery & Setup</h3>
              <p>Our professional team delivers, installs, and tests your brand new equipment. We handle all logistics, ensuring zero disruption to your workday.</p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-icon-container">
                <RefreshCw size={32} className="step-icon" />
              </div>
              <h3>Automated Restocking</h3>
              <p>Our smart telemetry systems monitor inventory in real-time. We dispatch route drivers to restock and clean your machines before they ever run empty.</p>
            </div>
          </div>

          <div className="cta-container-center">
             <Link href="#contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>
               Get Started Today <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="section-container">
          <div className="about-container">
            <div className="about-visuals">
              <div className="main-img-wrapper">
                <Image src="/assets/houston-skyline.png" alt="Houston Skyline" fill style={{ objectFit: 'cover' }} className="main-img" />
              </div>
              <div className="accent-img-wrapper">
                <Image src="/assets/friendly-tech.png" alt="Friendly Vending Technician" fill style={{ objectFit: 'cover' }} className="accent-img" />
              </div>
              <div className="floating-badge">
                <span className="badge-number">10+</span>
                <span className="badge-text">Years of<br />Local Service</span>
              </div>
            </div>
            
            <div className="about-content">
              <h2>Deep Roots In <br /><span className="text-highlight">Houston</span></h2>
              <p className="about-lead">We aren't a faceless national corporation. We are a locally owned and operated Houston business dedicated to elevating the breakrooms of our community.</p>
              <p>For over a decade, Houston Vending has provided reliable, rapid, and fully customized refreshment services to businesses across the metro area. From the Energy Corridor to Downtown, our technicians are always just around the corner, ensuring your team stays fueled, focused, and happy.</p>
              
              <ul className="about-list">
                <li><MapPin size={20} className="list-icon" /> Guaranteed fast, local response times.</li>
                <li><Users size={20} className="list-icon" /> Dedicated account managers who know your business.</li>
                <li><Building2 size={20} className="list-icon" /> Proudly servicing 500+ Houston facilities.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">Houston Vending</div>
          <p className="footer-description">Premium vending machine services for the Houston metro area. Modern, reliable, and fully stocked for your business.</p>
          <div className="footer-links">
            <Link href="#services">Services</Link>
            <Link href="#machines">Machines</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </div>
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Houston Vending. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
